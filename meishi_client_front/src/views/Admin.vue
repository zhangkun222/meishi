<template>
  <div>
    <div class="container">
      <!-- 顶部 -->
      <div class="header" style="background-color: rgb(206, 163, 184)">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">信息管理</el-menu-item>
        </el-menu>

        <div
          userinfo
          style="
            display: flex;
            align-items: center;
            color: #fff;
            margin-right: 40px;
            justify-content: space-evenly;
            width: 150px;
          "
        >
          <el-avatar
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=678610634,1146522750&fm=11&gp=0.jpg"
          ></el-avatar>
          <span>梁龙春</span>
        </div>
      </div>
      <!-- 左侧导航 -->
      <div class="leftnav">
        <el-col>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1" id="el-menu-item">
              <span slot="title">食谱</span>
            </el-menu-item>

            <el-menu-item index="2" id="el-menu-item1">
              <span slot="title">动漫食谱</span>
            </el-menu-item>

            <el-menu-item index="3" id="el-menu-item2">
              <span slot="title">商品列表</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <!-- 右侧 -->
      <div class="right-container">
        <div class="bread">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>信息管理</el-breadcrumb-item>
            <el-breadcrumb-item>食谱列表</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
          </el-breadcrumb>
        </div>
        <div class="table">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])"
              >切换第二、第三行的选中状态</el-button
            >
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang=scss>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-col-12 {
  width: 8% !important;
}
.el-menu-item {
  background-color: transparent;
  border-bottom: 1px solid grey;
}
#el-menu-item:hover,
#el-menu-item:active {
  background-color: transparent;
  color: transparent;
}
#el-menu-item1:hover,
#el-menu-item1:active {
  background-color: transparent;
  color: transparent;
}
#el-menu-item2:hover,
#el-menu-item2:active {
  background-color: transparent;
  color: transparent;
}
.el-menu-item.is-active {
  background-color: transparent;
  color: transparent;
}
.leftnav {
  width: 10%;
  height: 650px;
  background-color: rgb(206, 163, 184);
}
.right-container {
  position: absolute;
  width: 100%;
  height: 650px;
  margin-top: -650px;
  margin-left: 134px;
  /* background-color: yellowgreen; */
  & > .bread {
    padding-top: 20px;
    padding-left: 50px;
  }
  & > .table {
    /* background-color: pink; */
    margin-top: 15px;
    padding-left: 100px;
  }
}
</style>