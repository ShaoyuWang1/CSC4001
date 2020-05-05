<template>
    <div>
    <el-row>
        <el-col :span="8">
            <el-input
            type="input"
            placeholder="输入搜索内容"
            v-model="text"
            maxlength="10"
            style = "width: 100%"
            show-word-limit
        ></el-input>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
        </el-col>
        <el-col :span="8">
            <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left" @click="lastPage()">上一页</el-button>
            <el-button type="primary" @click="nextPage()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            <el-button type="primary" icon="el-icon-refresh-left" @click="change()">换一批</el-button>
            </el-button-group>
        </el-col> 
    </el-row>

    <el-row>
        <el-col :span="8" v-for="card in cards" :key="card">
          <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
              <span>{{card.title}}</span>
              <el-popconfirm title="确定接单？" @onConfirm = "onConfirm(card.oid)">
                <el-button slot="reference" style="float: right; padding: 3px 0" type="text">接单!</el-button>
              </el-popconfirm>
          </div>
          <div>
              {{card.abstract}}
          </div>
          <div>
              报酬:{{card.fee}}元
          </div>
          <div>
              DDL:{{card.ddl}}
          </div>
            <el-tag v-for="label in card.tags" :key="label">
              {{label}}
            </el-tag>
          </el-card>
      </el-col>
    
    </el-row>
    
    </div>
</template>


<script>
import { getAllOrders } from '../../api/api';
import { takeOneOrder } from '../../api/api';
import Qs from 'qs';
export default {
    data() {
      return {
        text: '',
        allCards: [],
        cards: [],
        ptr: 0
        }
  },
  mounted(){
    this.getAllOrders()
  },
  methods:{
    getAllOrders(){
      let Params = null;
      getAllOrders(Params).then(data=>{
        this.allCards = data['orders'];
        this.cards = this.allCards.slice(this.ptr, this.ptr+12);
        this.ptr = 0;
      });
    },
    nextPage(){
      if(this.ptr+12 < this.allCards.length){
        this.ptr = this.ptr+12;
        this.cards = this.allCards.slice(this.ptr, this.ptr+12);
      }
    },
    lastPage(){
      if(this.ptr-12 >= 0){
        this.ptr = this.ptr-12;
        this.cards = this.allCards.slice(this.ptr, this.ptr+12);
      }
    },
    change(){
      this.ptr = (this.ptr+12*5)%this.allCards.length;
      this.cards = this.allCards.slice(this.ptr, this.ptr+12);
    },
    search(){
      if(this.text == ''){
        this.getAllOrders();
        console.log('Empty Search');
        return
      };
      getAllOrders(null).then(data=>{
        this.allCards = data['orders'];
        this.allCards = this.allCards.filter(u=>u.abstract.match(this.text));
        this.ptr = 0;
        this.cards = this.allCards.slice(this.ptr,this.ptr+12);
        return
      });
    },
    onConfirm(oid){
      let user = sessionStorage.getItem('user');
      user = JSON.parse(user);
      let uid = user.uid;
      let param = {oid:oid, uid:uid};
      console.log(param);
      param = Qs.stringify(param);
      console.log('flag1');
      takeOneOrder(param).then(data=>{
        console.log('flag1.5');
        let {code, msg, jid, status_code} = data;
        console.log('flag2');
        if (code !== 200) {
          this.$message.error(`Server Error`);
          console.log('flag3');
        }
        else {
          if(status_code === 0){
            this.$message(msg);
            console.log('flag3.0');
            this.$router.push({ name: 'HomePage'});
            console.log('flag3.1');
          }else{
            this.$message.error(msg);
            console.log('flag3.2');
          }
        }
      });
    }
  }
}
</script>




<style>
  

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 220px;
  }
</style>
