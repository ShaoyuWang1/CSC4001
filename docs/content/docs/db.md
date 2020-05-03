---
bookCollapseSection: true
weight: 20
---

# Table

## User
Description: The user account table. Record the user's related information.

Field Name | Meaning |  DataType
-|-|-
uid | The unique id for the user account, to mark the user | int, primary key, increasing |
sex | The sex of the user | emunator, one of "男",'male', "女", "female" |
age | The age of the user | int |
user_name | The name of the user | char |
password | Passward of this user account | char |
email | Email of this user account | char |
avatar | The avatar of the user | char, the img url |
balance | The remaining amount of money in this user account | Decimal, 2|

## Order
Description: The order table. Order is the translation content and requirement that a customer posted.

Field Name | Meaning |  DataType
-|-|-
oid | The unique identifier for the order |int, primary key, increasing |
uid | Denote which user submit this order |int|
available | Denote whether the order is already assiged to a job| bit, 0 for already assigned, 1 for not assigned|
completed | Denote whether the order is already completed| bit, 0 for already completed, 1 for not completed|
jid | Denote the job that the order assigned to| int |
title | The translation title of the content| text |
content | The translation content | text |
abstract | The abstract of the translation content | char |
date | The post date of the translation content | Date |
ddl | The dead line of the order| Date |
fee | The payment of the translation order| Decimal |
tags | The tag of the translation order| char, using ';' to divide the tags |

## Job
Description: The jobs table. Job is a translation order that already assigned to one user.

Field Name | Meaning |  DataType
-|-|-
jid | The unique id for the job | int, primary key, increasing |
uid | The translator's id(the one who select the job) | int, foreign key, cascade(when the user remove, jobs remove) |
title | inherit from corresponding order | text |
content | ... | text |
abstract | ... | Date |
date | ... | Date |
fee | ...| Decimal |
translated_title | The on-going translated title | char |
translated_content | The on-going translated content | char |




