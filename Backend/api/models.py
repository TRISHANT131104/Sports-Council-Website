from django.db import models

# Create your models here.
class Facility(models.Model):
    Title = models.CharField(max_length=100, default="")
    Description = models.CharField(max_length=2000, default="")
    Img = models.ImageField(upload_to='images/')

class Event(models.Model):
    pass

ROLE_CHOICES = (
    ('staff','staff'),
    ('council_member', 'council_member'),
    ('council_head', 'council_head'),
    # Add more choices as needed
)
class Team(models.Model):
    Role = models.CharField(max_length=20, choices=ROLE_CHOICES,default='council_member')
    Name = models.CharField(max_length=100, null=True)
    Img = models.ImageField(upload_to='images/')
    phoneNumber = models.CharField(max_length=10)
    EmailID = models.EmailField(max_length=50)

class Club(models.Model):
    Club_Name = models.CharField(max_length=50)
    Club_logo = models.ImageField(upload_to='images/')

CLUB_ROLE_CHOICES = (
    ('club_head','club_head'),
    ('club_member', 'club_member'),
    # Add more choices as needed
)
class ClubTeam(models.Model):
    Club = models.ForeignKey(Club, on_delete=models.CASCADE)
    Role = models.CharField(max_length=20, choices=CLUB_ROLE_CHOICES,default='club_member')
    Name = models.CharField(max_length=100)
    Img = models.ImageField(upload_to='images/')
    phoneNumber = models.CharField(max_length=10)
    EmailID = models.EmailField(max_length=50)

class GalleryImage(models.Model):
    Img = models.ImageField(upload_to='images/')