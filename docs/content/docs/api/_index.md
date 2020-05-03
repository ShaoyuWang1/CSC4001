---
bookCollapseSection: true
weight: 20
---

# Defined APIs here

## login/
{{< columns >}} <!-- begin columns block -->
# Method
POST
<---> <!-- magic sparator, between columns -->
# Input
In: 
- acc: account
- psw: password
<---> <!-- magic sparator, between columns -->
# Output
- {code: 200, msg: 'login success', status_code:0}
- {code: 200, msg: 'login failed', status_code:1}
- Example: {code: 200, msg: 'login success', 0}
{{< /columns >}}

## register/
{{< columns >}} <!-- begin columns block -->
# Method
POST
<---> <!-- magic sparator, between columns -->
# Input
In: 
- acc: account
- psw: password
<---> <!-- magic sparator, between columns -->
# Output
Out: {code: 200, msg: response, one_job:job_info}
Example: {code: 200, msg: '请求成功', one_job}
{{< /columns >}}

## getOneJob/
{{< columns >}} <!-- begin columns block -->
# Method
POST
<---> <!-- magic sparator, between columns -->
# Input
In: job_id: ID of the jobs
<---> <!-- magic sparator, between columns -->
# Output
Out: {code: 200, msg: response, one_job:job_info}
Example: {code: 200, msg: '请求成功', one_job}
{{< /columns >}}


## postOneJob/
{{< columns >}} <!-- begin columns block -->
# Method
POST
<---> <!-- magic sparator, between columns -->
# Input
In: 
- job_id: ID of the jobs
- ...
- fee: price, number
<---> <!-- magic sparator, between columns -->
# Output
Out: {code: 200, msg: response, one_job:job_info}
Example: {code: 200, msg: '请求成功', one_job}
{{< /columns >}}


## takeOrder/


