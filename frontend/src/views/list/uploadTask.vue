<template>
	<div>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="文本标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="文本初始语言">
    <el-select v-model="form.ori_lang" placeholder="文本语言">
      <el-option label="英语" value="ENG"></el-option>
      <el-option label="中文" value="CN"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="目标语言">
    <el-select v-model="form.ore_lang" placeholder="文本语言">
      <el-option label="英语" value="ENG"></el-option>
      <el-option label="中文" value="CN"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="DDL">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="翻译文本标签">
      <el-checkbox-group v-model="form.tags">
      <el-checkbox-button label="news" name="type"></el-checkbox-button>
      <el-checkbox-button label="tourism" name="type"></el-checkbox-button>
      <el-checkbox-button label="others" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  
  <el-form-item label="翻译内容">
    <el-input type="textarea"
            :autosize="{ minRows: 2, maxRows: 30}"
            placeholder="请输入内容"
            v-model="form.trans_content_txt"></el-input>
    <el-upload
        :auto-upload="false"
        :on-change="elInFile"
        ref="upload"
        class="upload-demo"
        accept="*/*">
    <el-button slot="trigger" size="mini" type="success" plain>选取文件</el-button>
    <i slot="tip" class="el-upload__tip el-icon-info">请选取文本文件</i>
    </el-upload>
        字数: {{form.trans_content_txt.length}}
  </el-form-item>
  <el-form-item label="翻译概要">
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  v-model="form.abstract"></el-input>
  </el-form-item>
  <el-form-item label="费用">
    <el-input  :disabled="true" v-model="form.fee"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
    
		
	</div>
</template>
<script>
	export default {
		name: 'importTxt',
		data() {
			return {
                files: null, //文件列表,
                form: {
                title: '',
                ori_lang: '',
                ore_lang: '',
                date1: '',
                date2:'',
                tags: [],
                trans_content_txt: '',
                abstract: '',
                fee:0,
                }
            
			};
		},
		methods: {
            // how much per 100 words
            cal_fee(num){
                this.form.fee = 0.06 * num
            },
			/**
			 * input-file调用此函数时，默认传入"$event"
			 * @param e {@link Object}：$event事件对象；
			 */
			inFile(e) {
				this.files = (e.target || e.srcElement).files;  //获取"input-file"的FileList对象
				if (!this.files || !this.files.length)
					return;
				for (let i = 0, len = this.files.length; i < len; i++)
					this.read(this.files[i]);
			},
			/**
			 * 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用。
			 * @param f {@link Object}：当前上传的文件；
			 * @param fs {@link Array}：当前文件列表；
			 */
			elInFile(f, fs) {
				this.read(f.raw);
			},
			/**
			 * 解析
			 * @param f {@link File}
			 */
			read(f) {
				let rd = new FileReader();
				rd.onload = e => {  //this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
					let cont = rd.reading({encode: 'UTF-8'});
                    // console.log('文件内容：', cont);
                    this.form.trans_content_txt += '\n'
                    this.form.trans_content_txt += cont;
                    this.cal_fee(this.form.trans_content_txt.length)
				};
				rd.readAsBinaryString(f);
			}
		},
		beforeCreate() {
			/**
			 * 读取文件（自定义函数）
			 * @param pms {@link Object}：参数：
			 *  @param pms.encode {@link String}：编码格式：
			 * @return {@link String}：文本内容；
			 */
			FileReader.prototype.reading = function ({encode} = pms) {
				let bytes = new Uint8Array(this.result);    //无符号整型数组
				let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
				return text;
			};
			/* 重写readAsBinaryString函数 */
			FileReader.prototype.readAsBinaryString = function (f) {
				if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
					this.onload = e => {  //在this.onload函数中，完成公共处理
                        let rs = this.reading();
                        this.trans_content_txt = rs;
						// console.log(rs);
					};
				this.readAsArrayBuffer(f);  //内部会回调this.onload方法
			};
		}
	}
</script>
<style scoped>
	.in-file {
		text-align: center;
	}
</style>
