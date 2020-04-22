# Generated by Django 2.1.3 on 2020-04-22 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobs',
            name='jid',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='translate_text',
            field=models.TextField(default='', max_length=1024),
        ),
        migrations.AlterField(
            model_name='jobs',
            name='translate_title',
            field=models.TextField(default='', max_length=1024),
        ),
    ]
