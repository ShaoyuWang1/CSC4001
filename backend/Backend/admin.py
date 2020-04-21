from django.contrib import admin
from .models import Jobs
import xadmin
# Register your models here.
xadmin.site.register(Jobs)