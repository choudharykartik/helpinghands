# Generated by Django 3.0.5 on 2020-04-26 14:06

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Helper',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('mobile', models.CharField(max_length=10, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('street', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=30)),
                ('state', models.CharField(max_length=30)),
                ('family_members', models.IntegerField(default=0)),
                ('latitude', models.CharField(max_length=30, null=True)),
                ('longitude', models.CharField(max_length=30, null=True)),
                ('mobile_no', models.CharField(max_length=10, unique=True)),
                ('status', models.CharField(choices=[('P', 'Pending'), ('S', 'Success'), ('N', 'None')], default='N', max_length=1)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('occupation', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Help',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('P', 'Pending'), ('S', 'Success'), ('N', 'None')], default='N', max_length=1)),
                ('by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.Helper')),
                ('to', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.Person')),
            ],
        ),
    ]