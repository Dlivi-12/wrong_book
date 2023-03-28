<template>
  <el-container>
    <el-header height="60px">
      <div class="header-left">错题本管理系统</div>
      <div class="header-right">登录 | 注册</div>
    </el-header>
    <el-container>
      <el-aside
        ><el-row class="tac">
          <el-col :span="24">
            <el-menu
              router
              default-active="0"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#3d5f81"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="/index/">
                <i class="el-icon-house"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/index/addquestions">
                <i class="el-icon-circle-plus-outline"></i>
                <span slot="title">添加错题</span>
              </el-menu-item>
              <el-menu-item index="/index/viewQuestions">
                <i class="el-icon-reading"></i>
                <span slot="title">查看错题</span>
              </el-menu-item>
              <el-menu-item index="/index/loveQuestions">
                <i class="el-icon-star-off"></i>
                <span slot="title">收藏夹</span>
              </el-menu-item>

              <el-menu-item index="/index/removeQuestions">
                <i class="el-icon-delete"></i>
                <span slot="title">回收站</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row></el-aside
      >
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
}
.el-container {
  height: 100%;
  /* margin-bottom: 40px; */
}
.el-aside {
  background-color: #3d5f81;
  height: 100%;
}

/* header */
.el-header {
  background-color: bisque;
  line-height: 60px;
}
.header-left {
  float: left;
  font-size: 28px;
  font-style: italic;
  height: 100%;
}
.header-right {
  float: right;
}
</style>