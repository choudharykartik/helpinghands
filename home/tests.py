import json

from django.test import TestCase
from django.urls import reverse

from rest_framework.test import APIClient
from rest_framework import status

from .models import Person
from .serializers import PersonSerializer


# Tests
class PersonTestCase(TestCase):
    """ Test suite for Model """

    def setUp(self):
        """ Defining the the test client and other test variables."""
        self.data = {
            "name" : "Tester",
            "city" : "Testing Yard",
            "state" : "Testingtron",
            "family_members" : 4,
            "latitude" : "25.6",
            "longitude" : "77.3",
            "mobile_no" : "309493494394",
            "ishelped" : False
        }

        self.person = Person(**self.data)

    def test_model_can_create_a_person(self):
        """ Test the Person model can create a Person object. """
        old_count = Person.objects.count()
        self.person.save()
        new_count = Person.objects.count()
        self.assertNotEqual(old_count, new_count)



class ViewTestCase(TestCase):
    """ Test suite for views """

    def setUp(self):
        self.client = APIClient()
        self.data = {
            "name" : "Tester",
            "city" : "Testing Yard",
            "state" : "Testingtron",
            "family_members" : 4,
            "latitude" : "25.6",
            "longitude" : "77.3",
            "mobile_no" : "309493494",
            "ishelped" : False
        }

        self.needy = Person.objects.create(**self.data)


    def test_api_can_create_a_person(self):
        """ Test for api can create a person in need. """

        response = self.client.post(reverse('person-create'), json.dumps(self.data), content_type="application/json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_api_can_get_all_needy_person(self):
        """ Test for api can get all persons in need. """

        response = self.client.get(reverse('person-all'), format="json")

        person_serializer_data =    json.dumps(PersonSerializer(instance=self.needy).data)
        person_serializer_data = [json.loads(person_serializer_data)]

        response_data = json.loads(response.content)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(person_serializer_data, response_data)
