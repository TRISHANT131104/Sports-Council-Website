# Generated by Django 5.1 on 2025-03-27 12:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rule'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacilityRule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rule', models.TextField()),
                ('facility', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.facility')),
            ],
        ),
    ]
