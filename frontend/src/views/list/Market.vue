<template>
    <div>
    <el-row>
        <el-col :span="8">
            <el-autocomplete
            type="input"
            placeholder="输入搜索内容"
            v-model="text"
            maxlength="10"
            show-word-limit
        ></el-autocomplete>
        </el-col>
        <el-col :span="8">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
        <el-col :span="8">
            <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            <el-button type="primary" icon="el-icon-refresh-left">换一批</el-button>
            </el-button-group>
        </el-col> 
    </el-row>

    
    <el-row>
      
        <el-col :span="8" v-for="card in cards" :key="card">
          <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
              <span>{{card.title}}</span>
              <el-popconfirm title="确定接单？" >
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
            <el-tag v-for="label in card.labels" :key="label">
              {{label}}
            </el-tag>
          </el-card>
      </el-col>
    
    </el-row>
    
    </div>
</template>


<script>
import { getAllOrders } from '../../api/api';
export default {
    data() {
      return {
        text: '',
        cards: []
        }
  },
  mounted(){
    this.getAllOrders()
  },
  methods:{
    getAllOrders(){
      let Params = null;
      getAllOrders(Params).then(data=>{
        this.cards = data['orders'];
      })
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
