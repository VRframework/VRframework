<template>
  <div>
    <v-header></v-header>
    <el-row class="tac">
      <el-col :span="6" class="left-tab">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <router-link to="/model">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              模型资源库
            </el-menu-item>
          </router-link>
          <router-link to="/effect">
            <el-menu-item index="2">
              <i class="el-icon-setting"></i>
              特效资源库
            </el-menu-item>
          </router-link>
          <router-link to="/applique">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              贴花资源库
            </el-menu-item>
          </router-link>
          <router-link to="/voice">
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              声音资源库
            </el-menu-item>
          </router-link>
          <router-link to="/common">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              公共资源库
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="18" class="right-tab">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import header from "components/header/header.vue"

export default {
  name: 'app',
  components:{
    'v-header':header
  }
}
</script>

<style>
  .left-tab{
    height: 700px;
  }
  .right-tab{
    width: 100%;
    height: 798px;
    background: #ccc;
  }

</style>
