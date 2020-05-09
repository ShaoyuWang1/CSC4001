<template>
    <div>
        <el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content" style="margin-top:10px;">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imgUrl" :src="imgUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        </el-upload>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        <el-row>
            <p style="font-size:18px;">Basic Information</p>
        </el-row>

        <el-row>


        </el-row>
        <el-row>
            <el-table
                    :data="edit_info"
                    style="width: 100%">
                <el-table-column
                        prop="info"
                        label="Field"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="detail"
                        label="Detail"
                        width="180">
                        <template slot-scope="scope">
                            <el-input size="small" v-model="scope.row.detail" placeholder="" @change="handleEdit(scope.$index, edit_info)"></el-input>
                        </template>
                </el-table-column>
                <el-table-column
                        label="Operations"
                        >
                    <template>
                        <el-button
                                size="mini"
                                type="success" :disabled="!edited"
                                @click="handleSaveInfo()">Save
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
                    </div>
                </el-col>
                
            </el-row>

        </el-row>
        


        <el-row>
            <p style="font-size:18px;">My Job List</p>
        </el-row>


        <el-row>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    max-height="250"
                    highlight-current-row
                    @current-change="handleCurrentChange">
                <el-table-column
                        prop="date"
                        label="Accept Date"
                        sortable
                        width="180"
                        column-key="date"
                        :filters="[]"
                        :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                        prop="ddl"
                        label="DDL"
                        sortable
                        width="180"
                        column-key="ddl"
                        :filters="[]"
                        :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="Title"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="abstract"
                        label="Abstract"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="fee"
                        label="Fee"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="Status"
                        width="200">
                    <template slot-scope="scope">
                        <el-tag
                                :type="job_status(scope.row.state).type"
                                disable-transitions>{{job_status(scope.row.state).msg}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operation"
                        width="180">
                    <template slot-scope="scope">
                        <el-button @click="continue_editing(scope.$index, tableData)" type="text" size="small">Continue
                            Edition
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-button @click="getJobs()" type="text" size="small">测试一下</el-button> -->
        </el-row>
        <el-row>
            <p style="font-size:18px;">My Order List</p>
            <el-col>

            </el-col>
        </el-row>
        <el-row>
            <el-table
                    :data="orderData"
                    border
                    style="width: 100%"
                    max-height="250"
                    highlight-current-row
                    @current-change="handleCurrentChange">
                <el-table-column
                        prop="ddl"
                        label="DDL"
                        sortable
                        width="180"
                        column-key="ddl"
                        :filters="[]"
                        :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="Title"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="abstract"
                        label="Abstract"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="fee"
                        label="Fee"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="available"
                        label="Order Completed?"
                        width="200">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.available === 1 ? 'warning' : 'success'"
                                disable-transitions>{{scope.row.available === 1 ? 'No Translator Yet' : 'Completed(Canceled)'}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="job_completed"
                        label="Job Completed?"
                        width="200">
                    <template slot-scope="scope">
                        <el-tag
                                :type="job_status(scope.row.job_completed).type"
                                disable-transitions>{{job_status(scope.row.job_completed).msg}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operation"
                        width="200">
                    <template slot-scope="scope">
                        <el-button @click="handleCheck(scope.$index, orderData)" type="text" size="small">Check
                            Translated Text
                        </el-button>
                        <el-button @click="completeOrder(scope.$index, orderData)" type="text" size="small">Finish
                            Order
                        </el-button>
                        <el-button @click="cancelOrder(scope.$index, orderData)" type="text" size="small">Cancel
                            Order
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <el-button @click="getJobs()" type="text" size="small">测试一下</el-button> -->
        </el-row>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>{{translated_text}}</span>
            <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">Confirmed</el-button>
    </span>
        </el-dialog>
    </div>
</template>

<script>
    import {
        getAllJobs,
        getPostedOrders,
        completeOneOrder,
        checkTranslatedText,
        updateUserInfo,
        cancelOneOrder
    } from '../../api/api';
    import Qs from 'qs'

    export default {

        data() {
            return {
                edited:false,
                tableData: [],
                orderData: [],
                currentRow: null,
                user: null,
                percentage: 10,
                colors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                ],
                imgUrl: null,
                dialogVisible: false,
                
            }
        },

        mounted() {
            this.setUserInfo()
            this.getJobs()
            this.getOrders()
        },

        methods: {

            job_status(status){
              let tag_type = null
              let msg = null
              if(status === 1){
                // completed
                msg = "Job Completed"
                tag_type = "success" 
              }else if(status === -1){
                // canceled
                msg = "Job Canceled"
                tag_type = "danger" 
              }else if(status === 0){
                // intranslation
                msg = "In Translation"
                tag_type = "warning" 
              }else{
                msg = "Not Taken"
                tag_type = "info" 
              }
              return {msg:msg, type:tag_type}
            },
            handleClose(done) {
                this.$confirm('Confirm Closed？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            handleCheck(index, data) {
                let oid = data[index].oid
                let uid = this.uid
                let paras = {
                    "uid": uid,
                    "oid": oid
                }
                paras = Qs.stringify(paras)

                checkTranslatedText(paras).then(data => {
                    let {msg, code, status_code, translated_text} = data;
                    // console.log(jobs)
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        if (status_code == 1) {
                            this.$message({
                                message: msg,
                                type: 'error'
                            });
                        } else {
                            this.translated_text = translated_text;
                            this.dialogVisible = true
                        }
                    }
                });
            },
            handleClick(row) {
                console.log(row);
            },
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            completeOrder(index, data) {
                let oid = data[index].oid
                let uid = this.uid
                var Params = {
                    oid: oid,
                    uid: uid
                }
                Params = Qs.stringify(Params)
                var that = this
                completeOneOrder(Params).then(data => {
                    let {msg, status_code, code, orders} = data;
                    // console.log(jobs)
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        if(status_code === 1){
                            this.$message({
                            message: msg,
                            type: 'error'
                            });
                        }else{
                            this.$message({
                            message: msg,
                            type: 'success'
                            });
                            this.$router.go(0)
                        }
                    }
                });
            },
            cancelOrder(index, data){
                let oid = data[index].oid
                let uid = this.uid;
                var Params = {
                    oid: oid,
                    uid: uid
                }
                Params = Qs.stringify(Params);
                console.log(Params);
                var that = this;
                cancelOneOrder(Params).then(data => {
                    let {msg, status_code, code} = data;
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        if(status_code === 1){
                            this.$message({
                            message: msg,
                            type: 'error'
                            });
                        }else{
                            this.$message({
                            message: msg,
                            type: 'success'
                            });
                            this.$router.go(0)
                        }
                    }
                });
            },
            continue_editing(index, data) {
                let jid = data[index].jid
                // console.log('id', id)
                this.$router.push({name: 'Panel', params: {id: jid}})
            },
            setUserInfo() {
                // read info from login
                var user = sessionStorage.getItem('user')
                user = JSON.parse(user)
                this.user = user
                // not editable
                this.imgUrl = user.avatar
                this.uid = user.uid
                this.user_name = user.user_name
                // editable
                let email = user.email
                let sex = user.sex
                let age = user.age

                this.edit_info = [
                    {'info':"email", "detail":email},
                    {'info':"sex", "detail":sex},
                    {'info':"age", "detail":age},
                ]

            },

            handleEdit(index, data) {
                this.edited = true
            },

            handleSaveInfo() {
                this.edited = false
                let i = null
                for(i in this.edit_info){
                    let detail = i.detail
                    let field = i.info
                    // update
                    this.user.field = detail
                }
                let param = {...this.user}
                param = Qs.stringify(param)
                updateUserInfo(param).then(data =>{
                    let {msg, status_code, code} = data;
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        if(status_code === 1){
                            this.$message({
                            message: msg,
                            type: 'error'
                            });
                        }else{
                            this.$message({
                            message: msg,
                            type: 'success'
                            });
                            this.$router.go(0)
                        }
                    }
                })
            },

            getOrders() {
                var that = this
                var Params = {user_id: this.uid}
                Params = Qs.stringify(Params)
                // console.log(Params)
                getPostedOrders(Params).then(data => {
                    let {msg, code, orders} = data;
                    // console.log(jobs)
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        that.orderData = orders
                        // console.log(jobs)
                    }
                });
            },
            getJobs() {
                var that = this
                var Params = {user_id: this.uid}
                Params = Qs.stringify(Params)
                // console.log(Params)
                getAllJobs(Params).then(data => {
                    let {msg, code, jobs} = data;
                    // console.log(jobs)
                    if (code !== 200) {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        that.tableData = jobs
                        // console.log(jobs)
                    }
                });
            },
            continue_editing(index, data) {
                let jid = data[index].jid
                this.$router.push({name: 'Panel', params: {id: jid}})
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            // 头像上传
            handleAvatarSuccess(res, file) {
                this.imgUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }

        },


    }
</script>


<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 250px;
        height: 250px;
        line-height: 250px;
        text-align: center;
    }

    .avatar {
        width: 250px;
        height: 250px;
        display: block;
    }

</style>