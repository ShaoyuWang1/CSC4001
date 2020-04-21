# Generated by Django 2.1.3 on 2020-04-21 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('jid', models.IntegerField(default=1, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=20)),
                ('abstract', models.CharField(max_length=128)),
                ('date', models.DateField()),
                ('ddl', models.DateField()),
                ('content', models.TextField(max_length=1024)),
                ('fee', models.DecimalField(decimal_places=2, max_digits=10)),
                ('translate_title', models.TextField(max_length=1024)),
                ('translate_text', models.TextField(max_length=1024)),
            ],
        ),
    ]
