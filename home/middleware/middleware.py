from django.http import HttpResponse
from rest_framework.response import Response
from django.core.exceptions import ValidationError

from home.models import Helper
import json
import os

class CheckTokenMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response

    def process_view(self, request, *func_args, **func_kwargs):
        if request.META['PATH_INFO'][0:5] == '/api/':
            try:
                get_token = request.META['HTTP_AUTHORIZATION']
                token = get_token[6:]
                # print(token)

                if Helper.objects.filter(id=token).exists():
                    return None
                    
                else:
                    data = {
                        'status': 'Failed',
                        'message': "Unauthorized",
                        "code": 401,
                        "error": "Invalid Authorization details"
                    }
                    dump = json.dumps(data)
                    return HttpResponse(dump, content_type="application/json")

            except ValidationError:
                data = {
                    'status': 'Failed',
                    'message': "Permission Denied",
                    "code": 401,
                    "error": "Invalid Authorization details"
                }
                dump = json.dumps(data)
                return HttpResponse(dump, content_type="application/json")

            except KeyError:
                data = {
                'status': 'Failed',
                'message': "Unauthorized",
                "code": 403,
                "error": "Authorization Credentials were not provided"
                }
                dump = json.dumps(data)
                return HttpResponse(dump, content_type="application/json")

        else:
            return None
