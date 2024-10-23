import os
from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver

# Create your models here.
class Facility(models.Model):
    Title = models.CharField(max_length=100, default="")
    Description = models.CharField(max_length=2000, default="")
    Img = models.ImageField(upload_to='images/facilities/', default='')

    def delete(self, *args, **kwargs):
        if self.Img and os.path.isfile(self.Img.path):
            os.remove(self.Img.path)
        super().delete(*args, **kwargs)

@receiver(post_delete, sender=Facility)
def delete_facility_image(sender, instance, **kwargs):
    if instance.Img and os.path.isfile(instance.Img.path):
        os.remove(instance.Img.path)

class Event(models.Model):
    Title = models.CharField(max_length=100, default="")
    Description = models.TextField(max_length=2000, default="")
    Img = models.ImageField(upload_to='images/events/', default='')

    def delete(self, *args, **kwargs):
        if self.Img and os.path.isfile(self.Img.path):
            os.remove(self.Img.path)
        super().delete(*args, **kwargs)

@receiver(post_delete, sender=Event)
def delete_event_image(sender, instance, **kwargs):
    if instance.Img and os.path.isfile(instance.Img.path):
        os.remove(instance.Img.path)

ROLE_CHOICES = (
    ('staff', 'staff'),
    ('council_member', 'council_member'),
    ('council_head', 'council_head'),
    # Add more choices as needed
)

class Team(models.Model):
    Role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='council_member')
    Name = models.CharField(max_length=100, null=True)
    Img = models.ImageField(upload_to='images/Team/')
    phoneNumber = models.CharField(max_length=15)
    EmailID = models.EmailField(max_length=50)

    def delete(self, *args, **kwargs):
        if self.Img and os.path.isfile(self.Img.path):
            os.remove(self.Img.path)
        super().delete(*args, **kwargs)

@receiver(post_delete, sender=Team)
def delete_team_image(sender, instance, **kwargs):
    if instance.Img and os.path.isfile(instance.Img.path):
        os.remove(instance.Img.path)

class Club(models.Model):
    Club_Name = models.CharField(max_length=50)
    Club_logo = models.ImageField(upload_to='images/Clubs/')

    def delete(self, *args, **kwargs):
        if self.Club_logo and os.path.isfile(self.Club_logo.path):
            os.remove(self.Club_logo.path)
        super().delete(*args, **kwargs)

@receiver(post_delete, sender=Club)
def delete_club_logo(sender, instance, **kwargs):
    if instance.Club_logo and os.path.isfile(instance.Club_logo.path):
        os.remove(instance.Club_logo.path)

CLUB_ROLE_CHOICES = (
    ('club_head', 'club_head'),
    ('club_member', 'club_member'),
    ('Coach', 'Coach')
    # Add more choices as needed
)

class ClubTeam(models.Model):
    Club = models.ForeignKey(Club, on_delete=models.CASCADE)
    Role = models.CharField(max_length=20, choices=CLUB_ROLE_CHOICES, default='club_member')
    Name = models.CharField(max_length=100)
    Img = models.ImageField(upload_to='images/ClubTeams/')
    phoneNumber = models.CharField(max_length=15)
    EmailID = models.EmailField(max_length=50)

    def delete(self, *args, **kwargs):
        if self.Img and os.path.isfile(self.Img.path):
            os.remove(self.Img.path)
        super().delete(*args, **kwargs)

@receiver(post_delete, sender=ClubTeam)
def delete_club_team_image(sender, instance, **kwargs):
    if instance.Img and os.path.isfile(instance.Img.path):
        os.remove(instance.Img.path)

class GalleryImage(models.Model):
    Img = models.ImageField(upload_to='images/gallery/')

    def delete(self, *args, **kwargs):
        if self.Img and os.path.isfile(self.Img.path):
            os.remove(self.Img.path)
        super().delete(*args, **kwargs)

@receiver(post_delete, sender=GalleryImage)
def delete_gallery_image(sender, instance, **kwargs):
    if instance.Img and os.path.isfile(instance.Img.path):
        os.remove(instance.Img.path)

class Update(models.Model):
    Title = models.CharField(max_length=100, default="")
    Link = models.URLField()

class Message(models.Model):
    Name = models.CharField(max_length=200, default="")
    Email = models.EmailField()
    Phone_Number = models.CharField(max_length=15)
    Message = models.TextField(max_length=2000, default="")

class Stat(models.Model):
    Stat_name = models.CharField(max_length=100, default="")
    Stat_number = models.CharField(max_length=100, default="")

class HallOfFame(models.Model):
    Img = models.ImageField(upload_to='images/halloffame/')

    def delete(self, *args, **kwargs):
        if self.Img and os.path.isfile(self.Img.path):
            os.remove(self.Img.path)
        super().delete(*args, **kwargs)


