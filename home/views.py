from django.shortcuts import render
from .models import Person, Helper, Help, Token
from .serializers import PersonSerializer, HelperSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.db.models import Q, Subquery

import requests
import math
import datetime


def index(request, resource=None):
    print(request.META['REMOTE_ADDR'])
    return render(request, 'index.html')


# view for getting list of all persons in need
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_person(request):
    print(request.META)
    persons = Person.objects.filter(status='N')
    serializer = PersonSerializer(persons, many=True)
    response = {}
    response["status"] = "Success"
    response["code"] = 200
    response["message"] = "OK"
    response["data"] = serializer.data
    return Response(response, status=status.HTTP_200_OK)


# view for getting list of all helpers
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_helper(request):
    helpers = Helper.objects.all()
    serializer = HelperSerializer(helpers, many=True)
    response = {}
    response["status"] = "Success"
    response["code"] = 200
    response["message"] = "OK"
    response["data"] = serializer.data
    return Response(response, status=status.HTTP_200_OK)


# view for getting a person in need with given id
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_person_with_id(request, id):
    response = {}
    try:
        person = Person.objects.get(id=id)
        serializer = PersonSerializer(person)
        response["status"] = "Success"
        response["code"] = 200
        response["message"] = "OK"
        response["data"] = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    except:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["errors"] = "Does not exists !"
        return Response(response, status=status.HTTP_404_NOT_FOUND)


# view for getting a person in need with given mobile no
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_person_with_mobile(request, mob):
    response = {}
    try:
        person = Person.objects.get(mobile_no=mob)
        serializer = PersonSerializer(person)
        response["status"] = "Success"
        response["code"] = 200
        response["message"] = "OK"
        response["data"] = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    except:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["errors"] = "Does not exists"
        return Response(response, status=status.HTTP_404_NOT_FOUND)


def create_token_obj():
    data = {
        'client_id': "mB2LRLxbmaESfqEX3u7TNC30jh-lvyNvyYh321V9FBoN6Ixg3DYAJSMNkJiwBfvdbdxCkQr_xubUKz7EpM7mtA==",
        'client_secret': "QwBCJ01mbSOeJBoCVN9fak2TnSp1tuFn5uIsNPJRBg5bgJ0Vkaq7KjD2falWZG6jQqjQBY3OWUn1R3eShSZYJuAZhahXXIys",
        'grant_type': "client_credentials"
    }

    token_r = requests.post(
        f'https://outpost.mapmyindia.com/api/security/oauth/token', data)

    return token_r.json()


# view for creating a person in need
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def create_person(request):
    if request.method == "POST":
        response = {}
        street = request.data.get('street', '')
        city = request.data.get('city', '')
        state = request.data.get('state', '')
        pincode = request.data.get('pincode', '')

        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            try:
                token = ''
                if len(Token.objects.all()) > 0:
                    obj = Token.objects.all().order_by('-created_at')[0]
                    expires_in = obj.expires_in
                    expire_time = obj.created_at + \
                        datetime.timedelta(seconds=expires_in)
                    current_time = datetime.datetime.now(datetime.timezone.utc)

                    if current_time < expire_time:
                        token = obj.access_token

                    else:
                        token_res = create_token_obj()
                        token = token_res["access_token"]

                        obj = Token.objects.create(
                            access_token=token, token_type='bearer', expires_in=token_res['expires_in'], project_code=token_res['project_code'])
                        obj.save()

                else:
                    token_res = create_token_obj()
                    token = token_res["access_token"]

                    obj = Token.objects.create(access_token=token, token_type='bearer',
                                               expires_in=token_res['expires_in'], project_code=token_res['project_code'])
                    obj.save()

                address = street + " " + city + " " + pincode + " " + state
                custom_headers = {'Authorization': 'bearer ' + token}
                r = requests.get(
                    f'https://atlas.mapmyindia.com/api/places/geocode?address={address}', headers=custom_headers)
                res = r.json()
                latitude = res["copResults"]["latitude"]
                longitude = res["copResults"]["longitude"]

            except KeyError:
                response["status"] = "Failed"
                response["code"] = 400
                response["message"] = "Bad Request"
                response["error"] = res
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            try:
                serializer.save(latitude=latitude, longitude=longitude)
            except ValidationError as err:
                response["status"] = "Failed"
                response["code"] = 400
                response["message"] = "Bad Request"
                response["errors"] = {}
                response["errors"]["mobile_no"] = "Invalid Mobile Number"
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            response["status"] = "Success"
            response["code"] = 201
            response["message"] = "Created"
            response["data"] = serializer.data
            return Response(response, status=status.HTTP_201_CREATED)

        else:
            response["status"] = "Failed"
            response["code"] = 400
            response["message"] = "Bad Request"
            response["errors"] = serializer.errors
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


# view for creating a helper
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def create_helper(request):
    if request.method == "POST":
        response = {}

        mobile = request.data.get('mobile')
        if Helper.objects.filter(mobile=mobile).exists():
            helper = Helper.objects.get(mobile=mobile)
            response["status"] = "Success"
            response["code"] = 200
            response["message"] = "OK"
            response["data"] = {}
            response["data"]["id"] = helper.id
            response["data"]["name"] = helper.name
            response["data"]["mobile"] = helper.mobile

            return Response(response, status=status.HTTP_200_OK)

        else:
            name = request.data.get('name')
            mobile = request.data.get('mobile')
            serializer = HelperSerializer(data=request.data)
            if serializer.is_valid():
                try:
                    serializer.save()
                except ValidationError as err:
                    response["status"] = "Failed"
                    response["code"] = 400
                    response["message"] = "Bad Request"
                    response["errors"] = {}
                    response["errors"]["mobile"] = "Enter a valid mobile number"

                    return Response(response, status=status.HTTP_400_BAD_REQUEST)

                response["status"] = "Success"
                response["code"] = 201
                response["message"] = "Created"
                response["data"] = serializer.data

                return Response(response, status=status.HTTP_201_CREATED)

            else:
                response["status"] = "Failed"
                response["code"] = 400
                response["message"] = "Bad Request"
                response["data"] = serializer.errors

                return Response(response, status=status.HTTP_400_BAD_REQUEST)


# view for geting a helper with given id
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_helper_with_id(request, id):
    response = {}
    try:
        helper = Helper.objects.get(id=id)
        serializer = HelperSerializer(helper)
        response["status"] = "Success"
        response["code"] = 200
        response["message"] = "OK"
        response["data"] = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    except:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["error"] = "Does not exist"
        return Response(response, status=status.HTTP_404_NOT_FOUND)


# view for getting a helper with given mobile no
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_helper_with_mobile(request, mob):
    response = {}
    try:
        helper = Helper.objects.get(mobile=mob)
        serializer = HelperSerializer(helper)
        response["status"] = "Success"
        response["code"] = 200
        response["message"] = "OK"
        response["data"] = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    except:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["error"] = {"Does not exist"}
        return Response(response, status=status.HTTP_404_NOT_FOUND)


# view for gettting details of help done by provided helper id
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def help_done_by_helper(request, helper_id):
    response = {}
    try:
        helper = Helper.objects.get(id=helper_id)
        obj = Help.objects.all().filter(by=helper)

        response["status"] = "Success"
        response["code"] = 200
        response["message"] = "OK"
        response["data"] = {}
        response["data"]["helper"] = {}
        response["data"]["helper"]["id"] = helper.id
        response["data"]["helper"]["name"] = helper.name
        response["data"]["helper"]["mobile"] = helper.mobile

        response["data"]["to"] = []
        for index, each in enumerate(obj):
            each.to.status = "P"
            each.save()
            to = {}
            to["name"] = each.to.name
            to["street"] = each.to.street
            to["city"] = each.to.city
            to["state"] = each.to.state
            to["pincode"] = each.to.pincode
            to["family_members"] = each.to.family_members
            to["mobile_no"] = each.to.mobile_no
            to["status"] = each.status
            to["latitude"] = each.to.latitude
            to["longitude"] = each.to.longitude
            to["occupation"] = each.to.occupation
            to["date"] = each.created_at.date()
            to["time"] = each.created_at.time()
            to["status"] = each.to.status
            response["data"]["to"].append(to)

        return Response(response, status=status.HTTP_200_OK)

    except ObjectDoesNotExist:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["error"] = "Helper matching query does not exists !"
        return Response(response, status=status.HTTP_404_NOT_FOUND)

    except ValidationError:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["error"] = "Helper matching query does not exists !"
        return Response(response, status=status.HTTP_404_NOT_FOUND)


# view for creating a help obj (must provide helper_id and needy_id)
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def create_help(request):
    if request.method == "POST":
        helper_id = request.data.get('helper_id', '-1')
        needy_id = request.data.get('needy_id', '-1')

        response = {}

        try:
            helper = Helper.objects.get(id=helper_id)
            needy = Person.objects.get(id=needy_id)
            needy.status = 'P'
            needy.save(update_fields=["status"])

            help_obj = Help.objects.create(to=needy, by=helper, status='P')
            help_obj.save()

            response["status"] = "Success"
            response["code"] = 201
            response["message"] = "Created"
            response["data"] = {}
            response["data"]["help-status"] = help_obj.status
            response["data"]["date"] = help_obj.created_at.date()
            response["data"]["time"] = help_obj.created_at.time()
            response["data"]["helper"] = {}
            response["data"]["helper"]["id"] = helper.id
            response["data"]["helper"]["name"] = helper.name
            response["data"]["helper"]["mobile"] = helper.mobile

            response["data"]["needy"] = {}
            response["data"]["needy"]["id"] = needy.id
            response["data"]["needy"]["name"] = needy.name
            response["data"]["needy"]["street"] = needy.street
            response["data"]["needy"]["city"] = needy.city
            response["data"]["needy"]["state"] = needy.state
            response["data"]["needy"]["pincode"] = needy.pincode
            response["data"]["needy"]["family_members"] = needy.family_members
            response["data"]["needy"]["mobile_no"] = needy.mobile_no
            response["data"]["needy"]["latitude"] = needy.latitude
            response["data"]["needy"]["longitude"] = needy.longitude
            response["data"]["needy"]["occupation"] = needy.occupation
            response["data"]["needy"]["status"] = needy.status

            return Response(response, status=status.HTTP_201_CREATED)

        except Person.DoesNotExist:
            response["status"] = "Failed"
            response["code"] = 400
            response["message"] = "Bad Request"
            response["errors"] = "Person matching query does not exists "

            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        except Helper.DoesNotExist:
            response["status"] = "Failed"
            response["code"] = 400
            response["message"] = "Bad Request"
            response["errors"] = "Helper matching query does not exists "

            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        except ValidationError as err:
            response["status"] = "Failed"
            response["code"] = 400
            response["message"] = "Bad Request"
            response["errors"] = err

            return Response(response, status=status.HTTP_400_BAD_REQUEST)


# view for getting details of help provided to given needy_id
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def help_provided_to_needy(request, needy_id):
    response = {}
    try:
        person = Person.objects.get(id=needy_id)
        obj = Help.objects.filter(to=person)

        response["status"] = "Success"
        response["code"] = 200
        response["message"] = "OK"
        response["data"] = {}
        response["data"]["needy"] = {}
        response["data"]["needy"]["name"] = person.name
        response["data"]["needy"]["street"] = person.street
        response["data"]["needy"]["city"] = person.city
        response["data"]["needy"]["pincode"] = person.pincode
        response["data"]["needy"]["state"] = person.state
        response["data"]["needy"]["family_members"] = person.family_members
        response["data"]["needy"]["mobile_no"] = person.mobile_no
        response["data"]["needy"]["latitude"] = person.latitude
        response["data"]["needy"]["longitude"] = person.longitude
        response["data"]["needy"]["occupation"] = person.occupation
        response["data"]["needy"]["longitude"] = person.longitude

        response["data"]["by"] = []
        for index, each in enumerate(obj):
            helper_obj = {
                "id": each.by.id,
                "name": each.by.name,
                "mobile": each.by.mobile,
                "date": each.created_at.date(),
                "time": each.created_at.time()
            }

            response["data"]["by"].append(helper_obj)

        return Response(response, status=status.HTTP_200_OK)

    except ObjectDoesNotExist:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["error"] = "Person matching query does not exists !"

        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    except ValidationError:
        response["status"] = "Failed"
        response["code"] = 404
        response["message"] = "Not Found"
        response["error"] = "Person matching query does not exists !"

        return Response(response, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def get_persons_in_radius_5km(request):
    if request.method == "POST":
        try:
            helper_lat = math.radians(float(request.data.get('latitude')))
            helper_long = math.radians(float(request.data.get('longitude')))
            helper_id = request.META['HTTP_AUTHORIZATION'][6:]
    
            try:
                helper = Helper.objects.get(id=helper_id)
            except ObjectDoesNotExist:
                response = {
                    "status": "Failed",
                    "code": 404,
                    "message": "Not Found",
                    "error": "Helper matching query does not exists !!!"
                }

                return Response(response, status=status.HTTP_404_NOT_FOUND)

            helps = Help.objects.filter(by=helper)
            persons = Person.objects.filter(~Q(id__in=Subquery(helps.values('to'))))

            response = {}
            response["status"] = "Success"
            response["code"] = 200
            response["message"] = "OK"
            response["data"] = []

            for obj in persons:
                person_latitude = math.radians(float(obj.latitude))
                person_longitude = math.radians(float(obj.longitude))

                formula = math.acos(math.cos(helper_lat) * math.cos(person_latitude) * math.cos(
                    person_longitude-helper_long) + math.sin(helper_lat) * math.sin(person_latitude)) * 6371

                # if formula <= 10 and obj.status == 'N':
                if formula <= 10:
                    person = {}
                    person["name"] = obj.name
                    person["id"] = obj.id
                    person["city"] = obj.city
                    person["state"] = obj.state
                    person["street"] = obj.street
                    person["pincode"] = obj.pincode
                    person["family_members"] = obj.family_members
                    person["mobile_no"] = obj.mobile_no
                    person["latitude"] = obj.latitude
                    person["longitude"] = obj.longitude
                    person["status"] = obj.status
                    person["occupation"] = obj.occupation
                    person["status"] = obj.status

                    response["data"].append(person)

            return Response(response, status=status.HTTP_200_OK)

        except TypeError:
            response = {}
            response["status"] = "Failed"
            response["code"] = 400
            response["message"] = "Bad Request"
            response["errors"] = "Enter both valid latitude and longitude"

            return Response(response, status=status.HTTP_400_BAD_REQUEST)
