from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=64)
    password = models.CharField(max_length=64)

class Jobs(models.Model):
    jid = models.IntegerField(primary_key=True)
    uid = models.IntegerField(default=0)
    title = models.CharField(max_length=20)
    abstract = models.CharField(max_length=128)
    date = models.DateField()
    ddl = models.DateField()
    content = models.TextField(max_length=1024)
    fee = models.DecimalField(decimal_places=2, max_digits=10)
    translate_title = models.TextField(max_length=1024, default="")
    translate_text = models.TextField(max_length=1024, default="")