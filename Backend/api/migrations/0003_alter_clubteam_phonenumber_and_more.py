# Generated by Django 5.1 on 2024-08-15 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_message_stat_update"),
    ]

    operations = [
        migrations.AlterField(
            model_name="clubteam",
            name="phoneNumber",
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name="message",
            name="Phone_Number",
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name="team",
            name="phoneNumber",
            field=models.CharField(max_length=15),
        ),
    ]
