from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

#
from .models import Jobs
# Create your views here.
# API = URL + inner function
@csrf_exempt
def getOneJob(request):
    job_id = request.POST.get('job_id')
    job_list = Jobs.objects.filter(jid__icontains=job_id)
    one_job = job_list.values_list()[0]
    if one_job:
        return JsonResponse({"code": 200, "msg": '请求成功', "one_job":one_job})
    else:
        return JsonResponse({"code": 400, "msg": '未查询到记录', "one_job":one_job})

@csrf_exempt
def postOneJob(request):
    uid = request.POST.get('uid')
    title = request.POST.get('title')
    abstract = request.POST.get('abstract')
    date = request.POST.get('date')
    ddl = request.POST.get('ddl')
    content = request.POST.get('content')
    fee = request.POST.get('fee')
    # judge hasn't mentioned
    Jobs.objects.create(title=title,abstract=abstract,date=date,ddl=ddl,content=content,fee=fee)
    return JsonResponse({"code": 200, "msg": 'SUC'})