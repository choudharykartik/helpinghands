from django.db import models
import uuid
from django.core.exceptions import ValidationError


""" Model for a Needy Person """
class Person(models.Model):
    STATUS_CODES = [
        ('P', 'Pending'),
        ('S', 'Success'),
        ('N', 'None')
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    pincode = models.CharField(max_length=10)
    family_members = models.IntegerField(default=0)
    latitude = models.CharField(max_length=30, null=True)
    longitude = models.CharField(max_length=30, null=True)
    mobile_no = models.CharField(max_length=10, unique=True)
    status = models.CharField(max_length=1, choices=STATUS_CODES, default='N')
    timestamp = models.DateTimeField(auto_now_add=True)
    occupation = models.CharField(max_length=30)

    def __str__(self):
        return self.name + '-' + self.city + '-' + self.state

    def save(self, *args, **kwargs):
        if len(self.mobile_no) < 10:
            raise ValidationError({'mobile_no': 'Invalid Mobile Number'})

        super().save(*args, **kwargs)



""" Model for a helper person """
class Helper(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    mobile = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if len(self.mobile) < 10:
            raise ValidationError({'mobile': 'Invalid Mobile Number'})

        super().save(*args, **kwargs)




""" Model for helps done by helper """
class Help(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    STATUS_CODES = [
        ('P', 'Pending'),
        ('S', 'Success'),
        ('N', 'None')
    ]

    to = models.ForeignKey(Person, to_field='id', on_delete=models.CASCADE)
    by = models.ForeignKey(Helper, to_field='id', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=1, choices=STATUS_CODES, default='N')

    def __str__(self):
        return "Helped By {}, helped To {}".format(self.by.name, self.to.name)


class Token(models.Model):
    access_token = models.CharField(max_length=100)
    token_type = models.CharField(max_length=50)
    expires_in = models.IntegerField(default=0)
    project_code = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
