# Generated by Django 2.2.8 on 2020-05-03 01:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0013_remove_jobs_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobs',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.User', verbose_name='User'),
        ),
    ]