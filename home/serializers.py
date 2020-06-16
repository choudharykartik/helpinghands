from rest_framework import serializers
from .models import Person, Helper, Help

# Serializer for Person Model
class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = (
            'id',
            'name',
            'street',
            'city',
            'state',
            'family_members',
            'longitude',
            'latitude',
            'mobile_no',
            'status',
            'timestamp',
            'occupation',
            'pincode'
        )


# Serializer for Helper Model
class HelperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Helper
        fields = ('id', 'name', 'mobile')
