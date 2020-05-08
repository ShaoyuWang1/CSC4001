<template>
    <div>
    <div>
    <el-row>
        <el-col :span="8">
            <el-input
            type="input"
            placeholder="Enter search content"
            v-model="text"
            maxlength="10"
            style = "width: 100%"
            show-word-limit
        ></el-input>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" icon="el-icon-search" @click="search()">Search</el-button>
        </el-col>
        <el-col :span="8">
            <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left" @click="lastPage()">Previous</el-button>
            <el-button type="primary" @click="nextPage()">Next<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            <el-button type="primary" icon="el-icon-refresh-left" @click="change()">AnotherBatch</el-button>
            </el-button-group>
        </el-col> 
    </el-row>
    </div>
    <el-row>
        <el-col :span="8" v-for="card in cards" :key="card">
          <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
              <span class="class01">{{card.title}}</span>
              <el-popconfirm title="Sure to take the order？" @onConfirm = "onConfirm(card.oid)">
                <el-button slot="reference" style="float: right; padding: 3px 0" type="text">TakeIt!</el-button>
              </el-popconfirm>
          </div>
          <div>
              <span><span class="class06">Abstract:</span> <span class="class05">{{card.abstract}}</span></span>
          </div>
          <div class="line_01"></div>
          <div>
          <span>
              <span class="class02">Pay(￥): </span><el-tag effect="plain" type='warning'>{{card.fee}}</el-tag><span class="class02"></span>
          </span>
          <div class="line_01"></div>
          <span>
              <span  class="class03">DDL:  </span><el-tag effect="plain" type='danger'>{{card.ddl}}</el-tag>
          </span>
          </div>
          <div class="line_01"></div>
          <span class="class06">Category：</span>
            <el-tag v-for="label in card.tags" :key="label" class="class04">
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
        this.allCards = this.allCards.filter(u=>u.abstract.match(this.text)||u.title.match(this.text));
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

  .title {
    font-size: 20px;
  }
  

  .item {
    margin-bottom: 18px;
  }

  .line_01{
    color: #ddd;
    padding: 0 20px 0;
    margin: 8px 0;
    line-height: 10px;
    border-left: 10% solid #ddd;
    border-right: 10% solid #ddd;
    text-align: center;
  }

  .class01{
    font-weight:bold;
    font-family:'Times New Roman', Times, serif;
    font-size: 115%;
    color: rgb(70, 46, 177);
  }

  .class02{
    font-weight:bold;
    color:rgb(224, 162, 67);
  }

  .class03{
    font-weight:bold;
    color:#F56C6C;
  }

  .class04{
    color:rgb(55, 135, 255);
  }

  .class05{
    color: #000f52be;
    font-family:Arial, Helvetica, sans-serif;
  }

  .class06{
    color:rgb(81, 142, 255);
    font-weight:bold;
  }

  .el-card__header {
    background-color:rgba(64, 160, 255, 0.13);
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
    height: 300px;
    border-color: rgb(138, 162, 197)
  }

  .calss07{
    margin: 6px 0;
    background: 0 0;
    border-top: 1px dashed #e8eaec;
  }

  .el-divider--horizontal{
    margin: 6px 0;
    background: 0 0;
    border-top: 1px dashed #e8eaec;
 } 
  
</style>
