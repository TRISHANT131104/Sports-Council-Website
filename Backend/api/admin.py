from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Facility)
admin.site.register(Event)
admin.site.register(Team)
admin.site.register(Club)
admin.site.register(ClubTeam)
admin.site.register(GalleryImage)

# @admin.register(Facility)
# class FacilityAdmin(admin.ModelAdmin):
#     list_display = ['Title']
