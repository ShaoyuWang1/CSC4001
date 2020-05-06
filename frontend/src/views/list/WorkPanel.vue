<template>
 <div>
    <el-row :gutter="40">
        <el-col :span="8">
          <div style="font-size:30px">
            文本标题:
          </div>
           <div class="tx-title" :style="{'font-size':`${font_size}px`}">
              {{title}}
            </div>
          <div style="font-size:30px">
            正文:
          </div>
            <div class="tx-back" :style="{'font-size':`${font_size}px`}">
              {{content}}
            </div>
            <div class="block">
              <div>字体大小</div>
                  <el-slider
                    v-model="font_size"
                    show-input>
                  </el-slider>
            </div>
        </el-col>
        <el-col :span="12">
            
            <div class="grid-content">
              <div style="font-size:30px">
                译后标题:
              </div>
                <el-input
                    type="textarea"
                    autosize
                    placeholder="标题内容"
                    v-model="translated_title">
                </el-input>
              <div style="font-size:30px">
                译后正文:
              </div>
                    <div style="margin: 20px 0; wk-back"></div>
                        <el-input
                        type="textarea"
                        :autosize="{ minRows: 20, maxRows: 27}"
                        placeholder="文本内容"
                        v-model="translated_content">
                    </el-input>
            <el-row>
                <el-button @click="save()" type="primary" icon="el-icon-upload">保存</el-button>
                <el-button @click="complete()" type="primary" icon="el-icon-upload">完成翻译</el-button>
                <el-button @click="clear()" type="primary" icon="el-icon-search">清屏</el-button>
                <!-- <el-dropdown split-button type="primary" @click="handleClick">
                      机器翻译
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :v-for="(item, i) in langs">{{item}}</el-dropdown-item>
                        <el-dropdown-item @click.native="mc_trans()">黄金糕</el-dropdown-item>
                        <el-dropdown-item @click.native="mc_trans()">狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                <el-button  type="primary" icon="el-icon-search">机器翻译</el-button> -->
            </el-row>
            </div>
        </el-col>
    </el-row>
    </div>
</div>
</template>



<script>
import { getOneJob, postOneJob } from '../../api/api';
// import translate from 'google-translate-api'
import Qs from 'qs'
export default {
  data() {
    return {
      title:'',
      content:'',
      translated_content: '',
      translated_title:'',
      font_size:30,
      langs: [
        'auto', 'eu', 'zh-cn'
      ],
    }
  },
  mounted(){
    this.getOneJob()
  },
  methods:{
    save(){
      var Params = {
        job_id: this.id,
        translated_title:this.translated_title,
        translated_content:this.translated_content
      }
        // console.log(Params)
      Params = Qs.stringify(Params)
      postOneJob(Params).then(data =>{
        let {code,msg, status_code} = data;
          if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
                this.$message(msg);
            }
          });
    },
    complete(){

    },
    handleClick(a){
      console.log(a)
    },
    mc_trans(){
      translate(this.content, {to: 'en'}).then(res => {
          console.log(res.text);
          //=> I speak English
          console.log(res.from.language.iso);
          //=> nl
      }).catch(err => {
          console.error(err);
      });
    },
    clear(){
      this.translated_content = ''
    },
    getOneJob(){
        this.id = this.$route.params.id
        console.log(this.$route)
        var that = this
        var Params = {job_id: this.id}
        Params = Qs.stringify(Params)
        getOneJob(Params).then(data =>{
          let { msg, code, one_job } = data;
          if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              let {abstract,content,date,ddl,title,translated_title,translated_content} = one_job
              this.title = title
              this.content = content
              this.translated_title = translated_title
              this.translated_content = translated_content
            }
          });
      },
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.tx-title{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  text-align:center;
}
.tx-back{
    height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.wk-back{
    height: 400px;
    
}
</style>