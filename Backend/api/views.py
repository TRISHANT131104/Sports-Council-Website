from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from .models import *
from .serializers import *


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
class GetClubsAndSocietyTeams(ListAPIView):
    serializer_class = ClubTeamSerializer

    def get_queryset(self):
        club_id = self.kwargs.get('club_id')
        return ClubTeam.objects.filter(Club=club_id)
    
class GetGallery(ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer