# Generated by Django 2.2.8 on 2020-05-03 01:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_auto_20200503_0102'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobs',
            name='user',
        ),
    ]