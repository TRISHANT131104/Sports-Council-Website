# Generated by Django 5.0.7 on 2024-07-28 09:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clubs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Club_Name', models.CharField(max_length=50)),
                ('Club_logo', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Facility',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(default='', max_length=100)),
                ('Description', models.CharField(default='', max_length=2000)),
                ('Img', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Img', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Role', models.CharField(choices=[('staff', 'staff'), ('council_member', 'council_member'), ('council_head', 'council_head')], default='council_member', max_length=20)),
                ('Img', models.ImageField(upload_to='')),
                ('phoneNumber', models.CharField(max_length=10)),
                ('EmailID', models.EmailField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ClubTeams',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Role', models.CharField(choices=[('staff', 'staff'), ('council_member', 'council_member'), ('council_head', 'council_head')], default='club_member', max_length=20)),
                ('Name', models.CharField(max_length=100)),
                ('Img', models.ImageField(upload_to='')),
                ('phoneNumber', models.CharField(max_length=10)),
                ('EmailID', models.EmailField(max_length=50)),
                ('Club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.clubs')),
            ],
        ),
    ]
