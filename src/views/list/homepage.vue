<template>
<div>
<el-row>
   <el-row><el-avatar :size="200" :src="circleUrl"></el-avatar></el-row>
   <el-row>
      基础信息
      <el-col>
         
      </el-col>
   </el-row>
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
      label="提交/接单日期"
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
      label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="abstract"
      label="内容简略"
      width="200">
    </el-table-column>
    <el-table-column
      prop="fee"
      label="费用"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">继续编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-row>
</div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          ddl:"2017-05-02",
          title: '翻译任务',
          abstract:'这个任务是要做些blabla',
          fee:6,
          status: '进行中',
        },{
          date: '2016-05-02',
          ddl:"2017-05-02",
          title: '翻译任务',
          abstract:'这个任务是要做些blabla',
          fee:6,
          status: '进行中',
        },{
          date: '2016-05-04',
          ddl:"2017-05-04",
          title: '翻译任务',
          abstract:'这个任务是要做些blabla',
          fee:6,
          status: '进行中',
        },{
          date: '2016-05-03',
          ddl:"2017-05-03",
          title: '翻译任务',
          abstract:'这个任务是要做些blabla',
          fee:6,
          status: '进行中',
        }],
        currentRow: null,
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      }
    }
  }
</script>