webpackJsonp([1],{"7xtl":function(e,t){},C1dp:function(e,t){},"D19/":function(e,t){},EMa8:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};a.d(r,"increment",function(){return H}),a.d(r,"decrement",function(){return q});var s={};a.d(s,"getCount",function(){return G});var n=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("keep-alive",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App",components:{}},o,!1,function(e){a("swbr")},null,null).exports,l=a("/ocq"),c=a("mvHQ"),u=a.n(c),d=a("mtWM"),p=a.n(d),m=function(e){return p.a.post("/getAllOrders/",e).then(function(e){return e.data})},f=a("mw3O"),h=a.n(f),v={data:function(){return{logining:!1,ruleForm2:{},rules2:{account:[{required:!0,message:"Username can't be empty",trigger:"blur"}],checkPass:[{required:!0,message:"Password can't be empty",trigger:"blur"}]},checked:!0}},methods:{handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit:function(e){var t=this;this.$refs.ruleForm2.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.logining=!0;var a,r={user_name:t.ruleForm2.username,password:t.ruleForm2.password,identifycode:t.ruleForm2.identifycode};r=h.a.stringify(r),(a=r,p.a.post("/login/",a).then(function(e){return e.data})).then(function(e){t.logining=!1;var a=e.msg,r=e.code,s=e.status_code,n=e.user;console.log(n),200!==r?t.$message.error("Server Error"):0===s?(sessionStorage.setItem("user",u()(n)),t.$router.push({path:"/homepage"})):t.$message.error(a)})})},refreshcode:function(){var e=this;this.uuid=this.getuuid();var t,a={code:this.ruleForm2.identifycode};(t=a,p.a.post("/refreshcode",t).then(function(e){return e.data})).then(function(t){e.imgUrl=serverUrl+""+e.uuid}).catch(function(t){e.$message({message:"Error while requesting server，please retry！",type:"error"})})},forgetpassword:function(){this.$alert("Please contact website administrator to retrieve password","Message",{confirmButtonText:"OK",type:"warning"})},register:function(){this.$router.push("/register")}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("br"),e._v(" "),a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-page",attrs:{model:e.ruleForm2,rules:e.rules2,"status-icon":"","label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"title"},[e._v("Login Page")]),e._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"Username"},model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",t)},expression:"ruleForm2.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"Password"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("Login\n            ")])],1),e._v(" "),a("el-form-item",[a("el-checkbox",{staticClass:"rememberme",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Remember Password\n            ")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.forgetpassword}},[e._v("Forget Password")]),e._v(" "),a("div",{attrs:{id:"register"}},[a("div",{staticClass:"align"},[a("p",[e._v("No Account？")])]),e._v(" "),a("div",{staticClass:"align"},[a("el-button",{attrs:{type:"text"},on:{click:e.register}},[e._v("Register")])],1)])],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(v,g,!1,function(e){a("C1dp")},"data-v-6eca9977",null).exports,b={data:function(){return{sysName:"Welcome, ",sysUserName:"",sysUserAvatar:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})},handleSelect:function(e,t){console.log(e,t)}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.sysUserName=e.user_name||"",this.sysUserAvatar=e.avatar||"")}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",attrs:{span:18}},[e._v("\n                "+e._s(e.sysName+e.sysUserName)+"\n\t\t\t")]),e._v(" "),a("el-col",{staticClass:"userinfo",attrs:{span:4}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link userinfo-inner"},[a("img",{attrs:{src:this.sysUserAvatar}}),e._v(" "+e._s(e.sysUserName))]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("我的消息")]),e._v(" "),a("el-dropdown-item",[e._v("设置")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("aside",[a("el-menu",{staticClass:"el-menu el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""}},[e._l(e.$router.options.routes,function(t,r){return[t.hidden?e._e():[t.leaf?e._e():a("el-submenu",{key:r,attrs:{index:r+""}},[a("template",{slot:"title"},[a("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return a("el-menu-item",{key:t.path,attrs:{index:t.path}},[t.hidden?e._e():[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t\t\t\t")]],2)})],2),e._v(" "),t.leaf&&t.children.length>0?[a("el-menu-item",{key:r,attrs:{index:t.children[0].path}},[a("i",{class:t.iconCls}),e._v(e._s(t.children[0].name))])]:e._e()]]})],2)],1),e._v(" "),a("section",{staticClass:"content-container"},[a("div",{staticClass:" bg-purple-light"},[a("el-col",{staticClass:"grid-content",attrs:{span:24}}),e._v(" "),a("el-col",{staticClass:"grid-content",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]};var C=a("VU/8")(b,y,!1,function(e){a("dsL0")},"data-v-04b5f17e",null).exports,w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("div",{attrs:{id:"upper"}},[a("el-header",{attrs:{id:"header1"}},[a("el-row",{attrs:{type:"flex",id:"Navigator"}},[a("el-col",{attrs:{span:3}},[a("div",[a("span",{attrs:{id:"We"}},[e._v("We")]),a("span",{attrs:{id:"Trans"}},[e._v("Trans")])])]),e._v(" "),a("el-col",{attrs:{span:2,push:"10"}},[a("el-button",{attrs:{type:"text"},on:{click:e.goHome}},[e._v("Home")])],1),e._v(" "),a("el-col",{attrs:{span:2,push:"10"}},[a("el-button",{attrs:{type:"text"},on:{click:e.goMarket}},[e._v("Market")])],1),e._v(" "),a("el-col",{attrs:{span:2,push:"10"}},[a("el-button",{attrs:{type:"text"},on:{click:e.goPanel}},[e._v("Panel")])],1),e._v(" "),a("el-col",{attrs:{span:2,push:"10"}},[a("el-button",{attrs:{type:"text"},on:{click:e.goUpload}},[e._v("Upload")])],1)],1)],1),e._v(" "),a("div",{attrs:{id:"mask"}},[a("el-container",{attrs:{id:"container1"}},[a("el-header",[a("el-container",{attrs:{id:"intro"}},[a("div",{staticClass:"intro-text"},[a("el-header",[a("div",{attrs:{id:"intro2"}},[a("div",{attrs:{id:"intro1"}},[e._v("Get together, translate together")]),e._v(" "),a("h2",[e._v("BEST ONLINE PLATFORM"),a("br"),e._v("FOR TRANSLATION COLLABORATION")])]),e._v(" "),a("div",{attrs:{id:"intro3"}},[a("p",[e._v("Experience the most convenient and economic solution of translation with our\n                                        amazing online platform WeTrans")])]),e._v(" "),a("el-button",{attrs:{type:"success",round:"true"},on:{click:e.goLogin}},[e._v("Go Explore more")])],1)],1)])],1),e._v(" "),a("el-footer")],1)],1)],1),e._v(" "),a("el-footer",{attrs:{id:"page_footer"}},[a("el-row",{attrs:{gutter:"40",id:"bottom"}},[a("el-col",{staticClass:"grid-content",attrs:{span:8}},[a("div",[a("div",{staticClass:"function"},[a("i",{staticClass:"el-icon-user-solid"}),e._v(" "),a("h3",[e._v("Personal Center")]),e._v(" "),a("p",{staticClass:"icon-intro"},[e._v("Go to your personal center and check orders you've uploaded or undertaken")]),e._v(" "),a("el-link",{attrs:{href:"/#/homepage"}},[e._v("Go Now"),a("i",{staticClass:"el-icon-position el-icon--right"})])],1)])]),e._v(" "),a("el-col",{staticClass:"grid-content",attrs:{span:8}},[a("div",{attrs:{id:"border"}},[a("div",{staticClass:"function"},[a("i",{staticClass:"el-icon-s-order"}),e._v(" "),a("h3",[e._v("Market")]),e._v(" "),a("p",{staticClass:"icon-intro"},[e._v("Browse available translation orders and check out what's new on our market")]),e._v(" "),a("el-link",{attrs:{href:"/#/market"}},[e._v("Go Now"),a("i",{staticClass:"el-icon-position el-icon--right"})])],1)])]),e._v(" "),a("el-col",{staticClass:"grid-content",attrs:{span:8}},[a("div",[a("div",{staticClass:"function"},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("h3",[e._v("Create Order")]),e._v(" "),a("p",{staticClass:"icon-intro"},[e._v("Create your own translation request and submit it to our market")]),e._v(" "),a("el-link",{attrs:{href:"/#/upload_task"}},[e._v("Go Now"),a("i",{staticClass:"el-icon-position el-icon--right"})])],1)])])],1)],1)],1)},staticRenderFns:[]};var x,k=a("VU/8")({name:"temp",methods:{goLogin:function(){this.$router.push({path:"/login"})},goHome:function(){this.$router.push({path:"/homepage"})},goMarket:function(){this.$router.push({path:"/market"})},goPanel:function(){this.$router.push({path:"/panel"})},goUpload:function(){this.$router.push({path:"/upload_task"})}}},w,!1,function(e){a("7xtl")},"data-v-100c7ad6",null).exports,$=a("bOdI"),F=a.n($),S=a("Dd8w"),O=a.n(S),E={data:function(){return{edited:!1,tableData:[],orderData:[],currentRow:null,user:null,percentage:10,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],edit_info:[{info:"email",detail:""},{info:"sex",detail:""},{info:"age",detail:""}],imgUrl:null,dialogVisible:!1}},mounted:function(){this.setUserInfo(),this.getJobs(),this.getOrders()},methods:(x={job_status:function(e){var t=null,a=null;return 1===e?(a="Job Completed",t="success"):-1===e?(a="Job Canceled",t="danger"):0===e?(a="In Translation",t="warning"):(a="Not Taken",t="info"),{msg:a,type:t}},handleClose:function(e){this.$confirm("Confirm Closed？").then(function(t){e()}).catch(function(e){})},handleCheck:function(e,t){var a,r=this,s=t[e].oid,n={uid:this.uid,oid:s};n=h.a.stringify(n),(a=n,p.a.post("/checkTranslatedText/",a).then(function(e){return e.data})).then(function(e){var t=e.msg,a=e.code,s=e.status_code,n=e.translated_text;200!==a?r.$message({message:t,type:"error"}):1==s?r.$message({message:t,type:"error"}):(r.translated_text=n,r.dialogVisible=!0)})},handleClick:function(e){console.log(e)},setCurrent:function(e){this.$refs.singleTable.setCurrentRow(e)},handleCurrentChange:function(e){this.currentRow=e},completeOrder:function(e,t){var a=this,r={oid:t[e].oid,uid:this.uid};r=h.a.stringify(r);var s;(s=r,p.a.post("/completeOneOrder/",s).then(function(e){return e.data})).then(function(e){var t=e.msg,r=e.status_code,s=e.code;e.orders;200!==s?a.$message({message:t,type:"error"}):1===r?a.$message({message:t,type:"error"}):(a.$message({message:t,type:"success"}),a.$router.go(0))})},cancelOrder:function(e,t){var a=this,r={oid:t[e].oid,uid:this.uid};r=h.a.stringify(r),console.log(r);var s;(s=r,p.a.post("/cancelOneOrder/",s).then(function(e){return e.data})).then(function(e){var t=e.msg,r=e.status_code;200!==e.code?a.$message({message:t,type:"error"}):1===r?a.$message({message:t,type:"error"}):(a.$message({message:t,type:"success"}),a.$router.go(0))})},continue_editing:function(e,t){var a=t[e].jid;this.$router.push({name:"Panel",params:{id:a}})},setUserInfo:function(){var e=sessionStorage.getItem("user");e=JSON.parse(e),this.user=e,this.imgUrl=e.avatar,this.uid=e.uid,this.user_name=e.user_name;var t=e.email,a=e.sex,r=e.age;this.edit_info[0].detail=t,this.edit_info[1].detail=a,this.edit_info[2].detail=r},handleEdit:function(e,t){this.edited=!0},handleSaveInfo:function(){var e=this;this.edited=!1,this.user.email=this.edit_info[0].detail,this.user.sex=this.edit_info[1].detail,this.user.age=this.edit_info[2].detail;var t,a=O()({},this.user);sessionStorage.setItem("user",u()(this.user)),a=h.a.stringify(a),(t=a,p.a.post("/updateUserInfo/",t).then(function(e){return e.data})).then(function(t){var a=t.msg,r=t.status_code;200!==t.code?e.$message({message:a,type:"error"}):1===r?e.$message({message:a,type:"error"}):e.$message({message:a,type:"success"})})},getOrders:function(){var e,t=this,a=this,r={user_id:this.uid};r=h.a.stringify(r),(e=r,p.a.post("/getPostedOrders/",e).then(function(e){return e.data})).then(function(e){var r=e.msg,s=e.code,n=e.orders;200!==s?t.$message({message:r,type:"error"}):a.orderData=n})},getJobs:function(){var e,t=this,a=this,r={user_id:this.uid};r=h.a.stringify(r),(e=r,p.a.post("/getAllJobs/",e).then(function(e){return e.data})).then(function(e){var r=e.msg,s=e.code,n=e.jobs;200!==s?t.$message({message:r,type:"error"}):a.tableData=n})}},F()(x,"continue_editing",function(e,t){var a=t[e].jid;this.$router.push({name:"Panel",params:{id:a}})}),F()(x,"filterHandler",function(e,t,a){return t[a.property]===e}),F()(x,"handleAvatarSuccess",function(e,t){this.imgUrl=URL.createObjectURL(t.raw)}),F()(x,"beforeAvatarUpload",function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}),x)},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content",staticStyle:{"margin-top":"10px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imgUrl?a("img",{staticClass:"avatar",attrs:{src:e.imgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}})],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content"},[a("el-row",[a("p",{staticStyle:{"font-size":"18px"}},[e._v("Basic Information")])]),e._v(" "),a("el-row"),e._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.edit_info}},[a("el-table-column",{attrs:{prop:"info",label:"Field",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"detail",label:"Detail",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"small",placeholder:""},on:{input:function(a){return e.handleEdit(t.$index,e.edit_info)}},model:{value:t.row.detail,callback:function(a){e.$set(t.row,"detail",a)},expression:"scope.row.detail"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Operations"}},[[a("el-button",{attrs:{size:"mini",type:"success",disabled:!e.edited},on:{click:function(t){return e.handleSaveInfo()}}},[e._v("Save\n                    ")])]],2)],1)],1)],1)])],1)],1),e._v(" "),a("el-row",[a("p",{staticStyle:{"font-size":"18px"}},[e._v("My Job List")])]),e._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"250","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{prop:"date",label:"Accept Date",sortable:"",width:"180","column-key":"date",filters:[],"filter-method":e.filterHandler}}),e._v(" "),a("el-table-column",{attrs:{prop:"ddl",label:"DDL",sortable:"",width:"180","column-key":"ddl",filters:[],"filter-method":e.filterHandler}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"Title",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"abstract",label:"Abstract",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fee",label:"Fee",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"Status",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.job_status(t.row.state).type,"disable-transitions":""}},[e._v(e._s(e.job_status(t.row.state).msg)+"\n                    ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"Operation",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.continue_editing(t.$index,e.tableData)}}},[e._v("Continue\n                        Edition\n                    ")])]}}])})],1)],1),e._v(" "),a("el-row",[a("p",{staticStyle:{"font-size":"18px"}},[e._v("My Order List")]),e._v(" "),a("el-col")],1),e._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderData,border:"","max-height":"250","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{prop:"ddl",label:"DDL",sortable:"",width:"180","column-key":"ddl",filters:[],"filter-method":e.filterHandler}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"Title",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"abstract",label:"Abstract",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fee",label:"Fee",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"available",label:"Order Completed?",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1===t.row.available?"warning":"success","disable-transitions":""}},[e._v(e._s(1===t.row.available?"No Translator Yet":"Completed(Canceled)")+"\n                    ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"job_completed",label:"Job Completed?",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.job_status(t.row.job_completed).type,"disable-transitions":""}},[e._v(e._s(e.job_status(t.row.job_completed).msg)+"\n                    ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"Operation",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleCheck(t.$index,e.orderData)}}},[e._v("Check\n                        Translated Text\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.completeOrder(t.$index,e.orderData)}}},[e._v("Finish\n                        Order\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.cancelOrder(t.$index,e.orderData)}}},[e._v("Cancel\n                        Order\n                    ")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v(e._s(e.translated_text))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Confirmed")])],1)])],1)},staticRenderFns:[]};var T=a("VU/8")(E,P,!1,function(e){a("PK+p")},"data-v-8dc4158e",null).exports,N={data:function(){return{text:"",allCards:[],cards:[],ptr:0}},mounted:function(){this.getAllOrders()},methods:{getAllOrders:function(){var e=this;m(null).then(function(t){e.allCards=t.orders,e.cards=e.allCards.slice(e.ptr,e.ptr+12),e.ptr=0})},nextPage:function(){this.ptr+12<this.allCards.length&&(this.ptr=this.ptr+12,this.cards=this.allCards.slice(this.ptr,this.ptr+12))},lastPage:function(){this.ptr-12>=0&&(this.ptr=this.ptr-12,this.cards=this.allCards.slice(this.ptr,this.ptr+12))},change:function(){this.ptr=(this.ptr+60)%this.allCards.length,this.cards=this.allCards.slice(this.ptr,this.ptr+12)},search:function(){var e=this;if(""==this.text)return this.getAllOrders(),void console.log("Empty Search");m(null).then(function(t){e.allCards=t.orders,e.allCards=e.allCards.filter(function(t){return t.abstract.match(e.text)||t.title.match(e.text)}),e.ptr=0,e.cards=e.allCards.slice(e.ptr,e.ptr+12)})},onConfirm:function(e){var t,a=this,r=sessionStorage.getItem("user"),s={oid:e,uid:(r=JSON.parse(r)).uid};console.log(s),s=h.a.stringify(s),console.log("flag1"),(t=s,p.a.post("/takeOneOrder/",t).then(function(e){return e.data})).then(function(e){console.log("flag1.5");var t=e.code,r=e.msg,s=(e.jid,e.status_code);console.log("flag2"),200!==t?(a.$message.error("Server Error"),console.log("flag3")):0===s?(a.$message(r),console.log("flag3.0"),a.$router.push({name:"HomePage"}),console.log("flag3.1")):(a.$message.error(r),console.log("flag3.2"))})}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"input",placeholder:"Enter search content",maxlength:"10","show-word-limit":""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.search()}}},[e._v("Search")])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-button-group",[a("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:function(t){return e.lastPage()}}},[e._v("Previous")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.nextPage()}}},[e._v("Next"),a("i",{staticClass:"el-icon-arrow-right el-icon--right"})]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh-left"},on:{click:function(t){return e.change()}}},[e._v("AnotherBatch")])],1)],1)],1)],1),e._v(" "),a("el-row",e._l(e.cards,function(t){return a("el-col",{key:t,attrs:{span:8}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"class01"},[e._v(e._s(t.title))]),e._v(" "),a("el-popconfirm",{attrs:{title:"Sure to take the order？",confirmButtonText:"Yes!",cancelButtonText:"Cancel"},on:{onConfirm:function(a){return e.onConfirm(t.oid)}}},[a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("TakeIt!")])],1)],1),e._v(" "),a("div",[a("span",[a("span",{staticClass:"class06"},[e._v("Abstract:")]),e._v(" "),a("span",{staticClass:"class05"},[e._v(e._s(t.abstract))])])]),e._v(" "),a("div",{staticClass:"line_01"}),e._v(" "),a("div",[a("span",[a("span",{staticClass:"class02"},[e._v("Pay(￥): ")]),a("el-tag",{attrs:{effect:"plain",type:"warning"}},[e._v(e._s(t.fee))]),a("span",{staticClass:"class02"})],1),e._v(" "),a("div",{staticClass:"line_01"}),e._v(" "),a("span",[a("span",{staticClass:"class03"},[e._v("DDL:  ")]),a("el-tag",{attrs:{effect:"plain",type:"danger"}},[e._v(e._s(t.ddl))])],1)]),e._v(" "),a("div",{staticClass:"line_01"}),e._v(" "),a("span",{staticClass:"class06"},[e._v("Category：")]),e._v(" "),e._l(t.tags,function(t){return a("el-tag",{key:t,staticClass:"class04"},[e._v("\n          "+e._s(t)+"\n        ")])})],2)],1)}),1)],1)},staticRenderFns:[]};var R=a("VU/8")(N,U,!1,function(e){a("EMa8")},null,null).exports,A={data:function(){return{fee:"",ddl:null,date:null,ori_lang:"EN",ore_lang:"",title:"",content:"",translated_content:"",translated_title:"",font_size:30,langs:["auto","eu","zh-cn"]}},mounted:function(){this.getOneJob()},methods:{save:function(){var e,t=this,a={job_id:this.id,translated_title:this.translated_title,translated_content:this.translated_content};a=h.a.stringify(a),(e=a,p.a.post("/postOneJob/",e).then(function(e){return e.data})).then(function(e){var a=e.code,r=e.msg;e.status_code;200!==a?t.$message({message:r,type:"error"}):t.$message({message:r,type:"success"})})},complete:function(){var e,t=this,a={user_id:this.uid,job_id:this.jid};a=h.a.stringify(a),(e=a,p.a.post("/completeOneJob/",e).then(function(e){return e.data})).then(function(e){var a=e.code,r=e.msg,s=e.status_code;200!==a?t.$message({message:r,type:"error"}):1==s?t.$message({message:r,type:"error"}):(t.$message({message:r,type:"success"}),t.$router.push({name:"HomePage"}))})},handleClick:function(e){console.log(e)},mc_trans:function(){translate(this.content,{to:"en"}).then(function(e){console.log(e.text),console.log(e.from.language.iso)}).catch(function(e){console.error(e)})},clear:function(){this.translated_content=""},getOneJob:function(){var e=this;this.id=this.$route.params.id,console.log(this.$route);var t,a={job_id:this.id};a=h.a.stringify(a),(t=a,p.a.post("/getOneJob/",t).then(function(e){return e.data})).then(function(t){var a=t.msg,r=t.code,s=t.one_job;if(200!==r)e.$message({message:a,type:"error"});else{var n=s.jid,o=s.uid,i=s.ori_lang,l=s.ore_lang,c=(s.abstract,s.content),u=s.date,d=s.ddl,p=s.fee,m=s.title,f=s.translated_title,h=s.translated_content;e.title=m,e.content=c,e.translated_title=f,e.translated_content=h,e.fee=p,e.ddl=d,e.date=u,e.ori_lang=i,e.ore_lang=l,e.jid=n,e.uid=o}})}}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("span",[e._v(e._s(e.ori_lang)+"   ")]),e._v("To"),a("span",[e._v("  "+e._s(e.ore_lang))]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("span",[e._v("fee:"+e._s(e.fee))]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("span",{staticStyle:{color:"#FF0000"}},[e._v("DDL:"+e._s(e.ddl))])],1),e._v(" "),a("el-divider",[a("i",{staticClass:"el-icon-edit"})]),e._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{"font-size":"30px"}},[e._v("\n            Title:\n          ")]),e._v(" "),a("div",{staticClass:"tx-title",style:{"font-size":e.font_size+"px"}},[e._v("\n              "+e._s(e.title)+"\n            ")]),e._v(" "),a("div",{staticStyle:{"font-size":"30px"}},[e._v("\n            Content:\n          ")]),e._v(" "),a("div",{staticClass:"tx-back wrap",style:{"font-size":e.font_size+"px"}},[e._v("\n              "+e._s(e.content)+"\n            ")]),e._v(" "),a("div",{staticClass:"block"},[a("div",[e._v("Font Size")]),e._v(" "),a("el-slider",{attrs:{"show-input":""},model:{value:e.font_size,callback:function(t){e.font_size=t},expression:"font_size"}})],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content"},[a("div",{staticStyle:{"font-size":"30px"}},[e._v("\n                Translated Title:\n              ")]),e._v(" "),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"标题内容"},model:{value:e.translated_title,callback:function(t){e.translated_title=t},expression:"translated_title"}}),e._v(" "),a("div",{staticStyle:{"font-size":"30px"}},[e._v("\n                Translated Content:\n              ")]),e._v(" "),a("div",{staticStyle:{margin:"20px 0"}}),e._v(" "),a("el-input",{attrs:{type:"textarea",autosize:{minRows:20,maxRows:27},placeholder:"文本内容"},model:{value:e.translated_content,callback:function(t){e.translated_content=t},expression:"translated_content"}}),e._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){return e.save()}}},[e._v("Save")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){return e.complete()}}},[e._v("Complete Translation")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.clear()}}},[e._v("Clear")])],1)],1)])],1)],1)},staticRenderFns:[]};var D=a("VU/8")(A,z,!1,function(e){a("D19/")},"data-v-2a509996",null).exports,I={name:"importTxt",data:function(){return{files:null,form_o:{title:"",ori_lang:"",ore_lang:"",ddl:"",tags:[],content:"",abstract:"",fee:0},form:{title:"",ori_lang:"",ore_lang:"",ddl:"",tags:[],content:"",abstract:"",fee:0},dynamicTags:["news","tourism","en"],inputVisible:!1,inputValue:""}},methods:{resetPage:function(){var e=O()({},this.form_o);this.form=e},onSubmit:function(){var e,t=this,a=sessionStorage.getItem("user"),r=(a=JSON.parse(a)).uid,s=this.form;s.uid=r,s.tags=this.dynamicTags.join(";"),s=h.a.stringify(s),(e=s,p.a.post("/createAnOrder/",e).then(function(e){return e.data})).then(function(e){var a=e.msg,r=e.code,s=e.status_code,n=e.oid;200!==r?t.$message.error("Server Error"):0===s?(t.$message({message:a+", oid:"+n,type:"success"}),t.$router.push({name:"HomePage"})):t.$message.error(a)})},handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue=""},cal_fee:function(){var e=this.form.content.length;this.form.fee=.6*e},inFile:function(e){if(this.files=(e.target||e.srcElement).files,this.files&&this.files.length)for(var t=0,a=this.files.length;t<a;t++)this.read(this.files[t])},elInFile:function(e,t){this.read(e.raw)},read:function(e){var t=this,a=new FileReader;a.onload=function(e){var r=a.reading({encode:"UTF-8"});t.form.content+="\n",t.form.content+=r,t.cal_fee()},a.readAsBinaryString(e)}},beforeCreate:function(){FileReader.prototype.reading=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:pms).encode,t=new Uint8Array(this.result);return new TextDecoder(e||"UTF-8").decode(t)},FileReader.prototype.readAsBinaryString=function(e){var t=this;this.onload||(this.onload=function(e){var a=t.reading();t.content=a}),this.readAsArrayBuffer(e)}}},j={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Original Language"}},[a("el-select",{attrs:{placeholder:"Original Language"},model:{value:e.form.ori_lang,callback:function(t){e.$set(e.form,"ori_lang",t)},expression:"form.ori_lang"}},[a("el-option",{attrs:{label:"EN",value:"EN"}}),e._v(" "),a("el-option",{attrs:{label:"CN",value:"CN"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Oriented Language"}},[a("el-select",{attrs:{placeholder:"Oriented Language"},model:{value:e.form.ore_lang,callback:function(t){e.$set(e.form,"ore_lang",t)},expression:"form.ore_lang"}},[a("el-option",{attrs:{label:"EN",value:"EN"}}),e._v(" "),a("el-option",{attrs:{label:"CN",value:"CN"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"DDL"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Choose Suitable DDl"},model:{value:e.form.ddl,callback:function(t){e.$set(e.form,"ddl",t)},expression:"form.ddl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Customized Tags"}},[e._l(e.dynamicTags,function(t){return a("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return e.handleClose(t)}}},[e._v("\n  "+e._s(t)+"\n")])}),e._v(" "),e.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")])],2),e._v(" "),a("el-form-item",{attrs:{label:"Title"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Content"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:30},placeholder:"Place Content here, using txt file or type."},on:{input:function(t){return e.cal_fee()}},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}}),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"auto-upload":!1,"on-change":e.elInFile,accept:"*/*"}},[a("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:""},slot:"trigger"},[e._v("Choose File")]),e._v(" "),a("i",{staticClass:"el-upload__tip el-icon-info",attrs:{slot:"tip"},slot:"tip"},[e._v("Please Choose .txt file")])],1),e._v("\n        Number of words: "+e._s(e.form.content.length)+"\n  ")],1),e._v(" "),a("el-form-item",{attrs:{label:"Abstract"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.form.abstract,callback:function(t){e.$set(e.form,"abstract",t)},expression:"form.abstract"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Fee"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"6 dollars per 10 words",placement:"top-start"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.form.fee,callback:function(t){e.$set(e.form,"fee",t)},expression:"form.fee"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create An Order!")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetPage()}}},[e._v("Reset")])],1)],1)],1)])},staticRenderFns:[]};var L=a("VU/8")(I,j,!1,function(e){a("jetv")},"data-v-42b52095",null).exports,V={data:function(){var e=this;return{registering:!1,ruleForm:{name:"",sex:"",birthday:"",pass:"",checkPass:"",email:""},rules:{name:[{required:!0,message:"Username can't be empty",trigger:"blur"},{min:1,max:15,message:"The length should be less than 15 characters",trigger:"blur"}],sex:[{required:!0,message:"Please select sex",trigger:"change"}],birthday:[{type:"date",message:"Please select birthday",trigger:"change"}],pass:[{required:!0,message:"Password can't be empty",trigger:"blur"},{validator:function(t,a,r){""===a?r(new Error("Please enter password")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{required:!0,message:"Password can't be empty",trigger:"blur"},{validator:function(t,a,r){""===a?r(new Error("Please re-enter password")):a!==e.ruleForm.pass?r(new Error("Two passwords are different!")):r()},trigger:"blur"}],email:[{required:!0,message:"Email address can't be empty",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!");var a,r={user_name:t.ruleForm.name,password:t.ruleForm.pass,email:t.ruleForm.email};r=h.a.stringify(r),(a=r,p.a.post("/registerUser/",a).then(function(e){return e.data})).then(function(e){t.registering=!1;e.msg;var a=e.code;e.status_code;console.log(e),200!==a?t.$message.error("Server Error"):(t.$message.success("Register successful"),t.$router.push({path:"/login"}))})})},resetForm:function(e){this.$refs[e].resetFields()}}},J={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("br"),e._v(" "),a("div",{attrs:{id:"innerLayer"}},[a("br"),e._v(" "),a("h2",{staticStyle:{"text-align":"center"}},[e._v("Enter Personal Information")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"Username",prop:"name"}},[a("el-input",{attrs:{placeholder:"Enter Username"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Password",prop:"pass"}},[a("el-input",{attrs:{type:"password",placeholder:"Enter Password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Confirm",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",placeholder:"Repeat Password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Sex",prop:"Sex"}},[a("el-select",{attrs:{placeholder:"Select sex"},model:{value:e.ruleForm.sex,callback:function(t){e.$set(e.ruleForm,"sex",t)},expression:"ruleForm.sex"}},[a("el-option",{attrs:{label:"Male",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"Female",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Birthday",prop:"Birthday"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Select date"},model:{value:e.ruleForm.birthday,callback:function(t){e.$set(e.ruleForm,"birthday",t)},expression:"ruleForm.birthday"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Email",prop:"Email"}},[a("el-input",{attrs:{placeholder:"Enter Mail Address"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("Submit")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("Reset")])],1)],1)],1)])},staticRenderFns:[]};var M=[{path:"/",name:"mainpage",redirect:"/index",hidden:!0},{path:"/index",component:k,name:"mainpage_index",hidden:!0},{path:"/register",component:a("VU/8")(V,J,!1,function(e){a("vKDA")},"data-v-574aa478",null).exports,name:"register",hidden:!0},{path:"/login",component:_,name:"",hidden:!0},{path:"/",component:C,name:"",leaf:!0,iconCls:"el-icon-menu",children:[{path:"/homepage",component:T,name:"HomePage",meta:{keepAlive:!0}}]},{path:"/",component:C,name:"",leaf:!0,iconCls:"el-icon-shopping-bag-2",children:[{path:"/market",component:R,name:"Market"}]},{path:"/",component:C,name:"工作台",leaf:!0,iconCls:"el-icon-s-platform",children:[{path:"/panel",component:D,name:"Panel"}]},{path:"/",component:C,name:"SubmitOrder",leaf:!0,iconCls:"el-icon-upload2",children:[{path:"/submit_order",component:L,name:"SubmitOrder"}]}],B=a("NYxO"),H=function(e){(0,e.commit)("INCREMENT")},q=function(e){(0,e.commit)("DECREMENT")},G=function(e){return e.count};n.default.use(B.a);var W=new B.a.Store({actions:r,getters:s,state:{count:10},mutations:{INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}}}),K=a("zL8q"),Q=a.n(K);a("tvR6"),a("QlJ9");n.default.use(Q.a),n.default.use(l.a),n.default.use(B.a),n.default.config.productionTip=!1;var Y=new l.a({routes:M});new n.default({router:Y,store:W,render:function(e){return e(i)}}).$mount("#app")},"PK+p":function(e,t){},QlJ9:function(e,t){},dsL0:function(e,t){},jetv:function(e,t){},swbr:function(e,t){},tvR6:function(e,t){},vKDA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5452ed6576d4c1066762.js.map