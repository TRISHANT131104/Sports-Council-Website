from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = ('id','Title', 'Description','Img')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','Title', 'Description','Img')

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id','Role', 'Name', 'Img','phoneNumber', 'EmailID')

class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ('id','Club_Name', 'Club_logo')

class ClubTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClubTeam
        fields = ('id', 'Club', 'Role', 'Name', 'Img','phoneNumber', 'EmailID')

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ('id', 'Img')

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = ('Title','Link')

class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stat
        fields = ('Stat_name', 'Stat_number')

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('Name', 'Email', 'Phone_Number', 'Message')