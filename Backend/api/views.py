from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import ListAPIView,ListCreateAPIView
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
def hello_world(request):
    return HttpResponse("Hello, World!")

class GetFacilities(ListAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer

class GetEvents(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class GetTeam(ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class GetClubsAndSocieties(ListAPIView):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer
    
class GetClubsAndSocietyTeams(APIView):
    def get(self, request, club_id):
        club_teams = ClubTeam.objects.filter(Club=club_id)
        rules = Rule.objects.filter(club=club_id)

        club_teams_serializer = ClubTeamSerializer(club_teams, many=True)
        rules_serializer = RuleSerializer(rules, many=True)

        return Response({
            "club_members": club_teams_serializer.data,
            "rules": rules_serializer.data
        })
    
class GetGallery(ListAPIView):
    serializer_class = GalleryImageSerializer  # default serializer class for this view

    def get(self, request, *args, **kwargs):
        gallery_images = GalleryImage.objects.all()
        hall_of_fame = HallOfFame.objects.all()

        gallery_serializer = GalleryImageSerializer(gallery_images, many=True, context={'request': request})
        hall_of_fame_serializer = HallOfFameSerializer(hall_of_fame, many=True, context={'request': request})

        response_data = {
            'Gallery': gallery_serializer.data,
            'HallOfFame': hall_of_fame_serializer.data
        }

        return Response(response_data, status=status.HTTP_200_OK)

class GetUpdates(ListAPIView):
    queryset = Update.objects.all()
    serializer_class = UpdateSerializer

class GetStats(ListAPIView):
    queryset = Stat.objects.all()
    serializer_class = StatSerializer

class Messages(ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)