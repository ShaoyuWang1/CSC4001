<template>
<div>
<el-row>
   <el-row>
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
        <el-button  type="primary">Click to Change</el-button>
      </el-upload>
    </el-row>

    <!-- <el-button type="primary" icon="el-icon-edit" @click.stop="handleEditInfo">Edit</el-button>
    <el-button type="primary" icon="el-icon-setting" @click.stop="handleSaveInfo">Save</el-button> -->
 
  </el-row>
   <el-row>
     <p style="font-size:18px;">Basic Information</p>
   </el-row>
   
   <el-row>


  </el-row>
    <el-row>
        <el-table
            :data="infoData"
            style="width: 100%">
            <el-table-column
        prop="info"
        label="Information"
        width="180">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="Detail"
        width="180">
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEditInfo(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleSaveInfo(scope.$index, scope.row)">Save</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      prop="status"
      label="Status"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operation">
      <template slot-scope="scope">
        <el-button @click="continue_editing(scope.$index, tableData)" type="text" size="small">继续编辑</el-button>
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
      prop="order_completed"
      label="Order Completed?"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Job_completed"
      label="Job Completed?"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operation">
      <template slot-scope="scope">
        <el-button @click="handleCheck(scope.row)" type="text" size="small">Check Translated Text</el-button>
        <el-button @click="completeOrder(scope.$index, orderData)" type="text" size="small">Finish Order</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- <el-button @click="getJobs()" type="text" size="small">测试一下</el-button> -->
   </el-row>
</div>
</template>

<script>
import { getAllJobs, getPostedOrders, completeOneOrder } from '../../api/api';
import Qs from 'qs'
  export default {

    data() {
      return {
        tableData:[],
        orderData:[],
        currentRow: null,
        user:null,
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        imgUrl:null,
        name: null,
        phone: null,
        email: null,
        gender: null,
        job: null,
        university: null,
        infoData: [{info:'Name', detail: 'admin'},
                  {info:'Phone', detail: '13682129982'},
                  {info:'Email', detail: '111010010@link.cuhk.edu.cn'},
                  {info:'Gender', detail: 'male'},
                  {info:'Job', detail: 'student'},
                  {info:'University', detail: 'The Chinese University of Hong Kong, Shenzhen'},],
      }
    },
    
    mounted(){
      this.setUserInfo()
      this.getJobs()
      this.getOrders()
    },
    
    methods: {
      handleClick(row) {
        console.log(row);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      completeOrder(index, data){
        let oid = data[index].oid
        let uid = this.uid
        var Params = {
          oid: oid,
          uid: uid
        }
        Params = Qs.stringify(Params)
        
        completeOneOrder(Params).then(data =>{
          let { msg, code, orders } = data;
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
      continue_editing(index, data){
        let jid = data[index].jid
        // console.log('id', id)
        this.$router.push({ name: 'Panel', params: { id: jid }})
      },
      setUserInfo(){
        var user = sessionStorage.getItem('user');
        user = JSON.parse(user);
        this.imgUrl = user.avatar
        this.uid = user.uid
        this.name = user.user_name
        this.phone = user.phone
        this.email = user.email
        this.gender = user.gender
        this.job = user.job
        this.university = user.university
      },

      handleEditInfo(index, row){
        this.infoData[index] = true;
        this.infoData[index] = true;
        this.$set(this.infoData,row,true)
        this.$set(this.infoData,row,true)
      },

      handleSaveInfo(index, row){
        this.infoData[index] = false;
        this.infoData[index] = false;
      },

      getOrders(){
        var that = this
        var Params = {user_id: this.uid}
        Params = Qs.stringify(Params)
        // console.log(Params)
        getPostedOrders(Params).then(data =>{
          let { msg, code, orders } = data;
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
      getJobs(){
        var that = this
        var Params = {user_id: this.uid}
        Params = Qs.stringify(Params)
        // console.log(Params)
        getAllJobs(Params).then(data =>{
          let { msg, code, jobs } = data;
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
      continue_editing(index, data){
        let jid = data[index].jid
        // console.log('id', id)
        this.$router.push({ name: 'Panel', params: { id: jid }})
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>