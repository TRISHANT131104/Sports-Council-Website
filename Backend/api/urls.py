from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', hello_world),
    path('facilities/', GetFacilities.as_view()),
    path('events/', GetEvents.as_view()),
    path('teams/', GetTeam.as_view()),
    path('clubs/', GetClubsAndSocieties.as_view()),
    path('clubs/<int:club_id>/', GetClubsAndSocietyTeams.as_view()),
    path('gallery/', GetGallery.as_view()),
    path('updates/', GetUpdates.as_view()),
    path('stats/', GetStats.as_view()),
    path('messages/', Messages.as_view()),
]


