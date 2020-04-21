from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

#
from .models import Jobs
# Create your views here.
@csrf_exempt
def getOneJob(request):
    job_id = request.POST.get('job_id')
    print(job_id)
    job_list = Jobs.objects.filter(jid__icontains=job_id)
    one_job = job_list.values_list()[0]
    print(one_job)
    return JsonResponse({"code": 200, "msg": '请求成功', "one_job":one_job})