---
bookCollapseSection: true
weight: 20
---

# Defined APIs here

## login/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{username, password, identifycode}
- username: char
- password: char
- identifycode: hasn't used yet
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'login success', status_code:0, user: user}
- {code: 200, msg: 'login failed', status_code:1}
<--->
#### Description
login to the system, compare the password in the DB to check whether it is matched.
{{< /columns >}}

## register/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{username, password, email}
- username: char
- password: char
- email: char
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'register success', status_code:0}
- {code: 200, msg: 'register, the account already exists', status_code:1}
<---> 
#### Description
register a new user account, the user account should not be in the db, as well as the email address.
{{< /columns >}}


## updateUserInfo/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{uid, sex, age, email, avatar}
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'update info success', status_code:0, user: user}
- {code: 200, msg: 'update info failed', status_code:1}
<--->
#### Description
update the user's info
{{< /columns >}}


## getAllJobs/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{user_id}
- user_id: the uid
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'suc', jobs, status_code:0}
- {code: 200, msg: 'fail', status_code:1}
<---> 
#### Description
Search table Job, get all jobs under one user account.
{{< /columns >}}


## getOneJob/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{job_id}
- job_id: jid in the Job table
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'suc', one_job:job_info, status_code:0}
- {code: 200, msg: 'fail', one_job, status_code:1}
<---> 
#### Description
Get one job's information from table Job, using the jid.
{{< /columns >}}


## postOneJob/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{job_id}
- job_id: jid in the job table
- translated_title: new updated translated_title
- translated_content: new updated translated_content
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'update suc', status_code:0}
- {code: 200, msg: 'update fail', status_code:1}
<---> 
#### Description
Update one job's information.
{{< /columns >}}


## createAnOrder/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{uid, title, content, abstract, date, ddl, fee, tags}
- see order table
<---> <!-- magic sparator, between columns -->
#### Output
- Out: {code: 200, msg: 'successfully created order', oid:oid, status_code:0}
- Out: {code: 200, msg: 'create order failed', status_code:1}
<---> 
#### Description
Create new order by uid, and return the oid if successfully created
{{< /columns >}}


## getAllOrders/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'suc', orders, status_code:0}
- {code: 200, msg: 'fail', status_code:1}
<---> 
#### Description
Search the table Order, and get all available order(available = 1) and return
{{< /columns >}}

## getPostedOrders/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{user_id}
- user_id: the uid
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'suc', orders, status_code:0}
- {code: 200, msg: 'fail', status_code:1}
<---> 
#### Description
Search table Order, get all submitted orders under one user account.(the user posted)
{{< /columns >}}

## takeOneOrder/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{oid, uid}
- oid: the order identifier oid
- uid: the user identifier uid
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'take order suc', jid:jid, status_code:0}
- {code: 200, msg: 'take order fail', status_code:1}
- jid is the newly created job id that assigned to uid
<---> 
#### Description
Create a job accroding to the order. make the corresponding order available to 0(not available), And send back the jid if the job is successfully created.
{{< /columns >}}



## completeOneOrder/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{oid, uid}
- oid: the order identifier oid
- uid: the user identifier uid
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'complete order suc', status_code:0}
- {code: 200, msg: 'complete order fail', status_code:1}
<---> 
#### Description
Complete an order, which means denote the order to be completed. And the corresponding jid'owner will get the reward.
{{< /columns >}}



## getOneOrder/
{{< columns >}} <!-- begin columns block -->
#### Method
POST
<---> <!-- magic sparator, between columns -->
#### Input
{oid}
- oid: the order identifier oid
<---> <!-- magic sparator, between columns -->
#### Output
- {code: 200, msg: 'suc', order_info:order_info, status_code:0}
  - - the order_info contains the order's basic infos
- {code: 200, msg: 'fail', status_code:1}

<---> 
#### Description
Using the oid to get an order's info from Order Table
{{< /columns >}}



