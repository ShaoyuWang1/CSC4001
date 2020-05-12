---
title: Introduction
type: docs
---

# WeTrans Documentation

## Project Structure

-------
### FrontEnd
- Frontend use Vue-Cli webpack + Element UI

### BackEnd
- Backend use Django

### Documentation
The documentation of WeTrans use Hugo.
- Installation in Mac( cuz all of us using Mac:)...): 
  - brew install hugo
- Run:
  - cd to the root
  - hugo server --minify --theme book
  
## Frontend Build Setup

> The frontend of the WeTrans Platform

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Backend Build Setup

### Install xadmin: 
master branch xadmin does not support Django > 2.0, so we need to
```bash
pip/pip3 install https://codeload.github.com/sshwsfc/xadmin/zip/django2
```

### Run
```bash
python3 manage.py runserver
```

### Create Super User (if needed)
python3 manage.py createsuperuser

### visit
http://127.0.0.1:8000/xadmin
Account
- name: admin_back
- psw: back123456

### Data Base migrations
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Structure
Django is a MVT framework. 
- M: model, operations on data. (The data manager)
  - Define all types of data here. Each model actually a table in the database.
- V: operation controller. (The middle between the M and T)
- T: template. The view and the data binder.


### Notice
Note that when using this xadmin, an error would occur

> TypeError: render() got an unexpected keyword argument 'renderer'

You need to find "site-packages/django/forms/boundfield.py" and comment line 93 

{{< columns >}}
## API

In this documentation, the sound API information and detail will be provided.

<--->



## Testing Strategy

The testing strategy will be provided, too

{{< /columns >}}


## How to Run the Demo

The built file of our frontend is already integrated into the Django. As well as the xadmin visualization tool. Thus you can run our project with all package installed.

    var panel = ram_design;
    if (backup + system) {
        file.readPoint = network_native;
        sidebar_engine_device(cell_tftp_raster,
                dual_login_paper.adf_vci.application_reader_design(
                graphicsNvramCdma, lpi_footer_snmp, integer_model));
    }

## If you have any other question:

Contact out team as soon as possible.


