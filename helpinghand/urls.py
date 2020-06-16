from django.contrib import admin
from django.urls import path, include
import home.views
admin.autodiscover()

urlpatterns = [
    # path for getting list of all persons in need (GET request is allowed only)
    path('api/person/all', home.views.get_person, name="person-all"),


    # path for creating a new person in need (POST request is allowed only)
    path('create/person', home.views.create_person, name="person-create"),


    # path for creating a help object (POST request is allowed only)
    path('api/person/help', home.views.create_help, name="create-help"),


    # path for getting a person in need having given id (GET request is allowed only)
    path('api/person/<id>', home.views.get_person_with_id, name="get-person-id"),


    # path for getting a persons in need with given mobile no (GET request is allowed only)
    path('api/person/m/<mob>', home.views.get_person_with_mobile,
         name="get-person-mobile"),


    # path for getting all helpers present
    path('api/helper/all', home.views.get_helper, name="helper-all"),


    # path for creating a helper(POST request)
    path('create/helper', home.views.create_helper, name="create-helper"),


    # path for getting a helper with given id
    path('api/helper/<id>', home.views.get_helper_with_id, name="get-helper-id"),


    # path for getting a helper with mobile no
    path('api/helper/m/<mob>', home.views.get_helper_with_mobile,
         name="get-helper-mobile"),


    # path for getting details of help done by provided helper-id (GET request is allowed only)
    path('api/person/helper/<helper_id>',
         home.views.help_done_by_helper, name="help-done-by-helper"),


    # path for getting needy persons near a helper (POST request is allows only) (params: latitude and longitude of helper)
    path('api/person/needy/near', home.views.get_persons_in_radius_5km,
         name="get-persons-in-radius-5km"),


    # path for getting details of help provided to this needy-id person (GET request is allowed only)
    path('api/person/needy/<needy_id>',
         home.views.help_provided_to_needy, name="help-provided-to-needy"),


    path("admin/", admin.site.urls),
    path("<path:resource>", home.views.index, name="index"),
    path("", home.views.index, name="index"),
]
