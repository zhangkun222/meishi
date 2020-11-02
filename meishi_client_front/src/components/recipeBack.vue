<template>
  <div class="recipemain">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>后台管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 主体部分 -->
    <div class="con">
      <el-divider></el-divider>
      <el-table :data="tableData" height="470" border size="small" align="center">
          <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column prop="uid" label="ID" width="60"> </el-table-column>
        <el-table-column prop="nickname" label="昵称" width="115"></el-table-column>
        <el-table-column prop="username" label="登录账号" width="130"></el-table-column>
        <el-table-column prop="recipe" width="150" label="发布菜谱"> </el-table-column>
        <!-- <el-table-column prop="ip" width="70" label="IP地址"> </el-table-column> -->
        <el-table-column prop="addtimes" width="145" label="注册时间"> </el-table-column>
        <el-table-column prop="lastimes" width="145" label="最近登录"> </el-table-column>
        <el-table-column prop="nums"  width="80" label="登录次数"> </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          uid: "1",
          nickname: "王小虎",
          username: "上海市",
          recipe:'',
          ip: "11465",
          addtimes:'',
          lastimes:'',
          nums:'',
        },
        {
          uid: "2",
          nickname: "王小虎",
          username: "上海市普陀区金沙江路 1518 弄",
          recipe:'',
          ip: "11465",
          addtimes:'',
          lastimes:'',
          nums:'',
        },
        {
          uid: "3",
          nickname: "王小虎",
          username: "上海市普陀区金沙江路 1518 弄",
          recipe:'',
          ip: "11465",
          addtimes:'',
          lastimes:'',
          nums:'',
        },{
          uid: "2",
          nickname: "王小虎",
          username: "上海市普陀区金沙江路 1518 弄",
          recipe:'',
          ip: "11465",
          addtimes:'',
          lastimes:'',
          nums:'',
        },
        {
          uid: "3",
          nickname: "王小虎",
          username: "上海市普陀区金沙江路 1518 弄",
          recipe:'',
          ip: "11465",
          addtimes:'',
          lastimes:'',
          nums:'',
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }



    
  },



};
</script>

<style>
.con {
  width: 1090px;
  margin: -590px 0px 0px 0px;
}
</style>