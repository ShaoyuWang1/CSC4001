# Generated by Django 2.1.3 on 2020-04-22 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20200422_0350'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobs',
            name='uid',
            field=models.IntegerField(default=0),
        ),
    ]
