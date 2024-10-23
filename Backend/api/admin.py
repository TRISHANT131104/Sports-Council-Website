from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(GalleryImage)
admin.site.register(HallOfFame)
# admin.site.register(Stat)


@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ['Title']

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['Title']

@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    list_display = ['Club_Name']

@admin.register(ClubTeam)
class ClubTeam(admin.ModelAdmin):
    list_display = ['Name', 'Role', 'EmailID']

@admin.register(Message)
class Message(admin.ModelAdmin):
    list_display = ['Name', 'Email', 'Phone_Number']

@admin.register(Team)
class Team(admin.ModelAdmin):
    list_display = ['Name', 'Role', 'EmailID']

@admin.register(Update)
class Update(admin.ModelAdmin):
    list_display = ['Title']

@admin.register(Stat)
class Stat(admin.ModelAdmin):
    list_display = ['Stat_name']

