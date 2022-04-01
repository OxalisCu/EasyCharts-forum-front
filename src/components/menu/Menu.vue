<script setup>
import Logo from '../logo/Logo.vue'
import SearchBox from "../searchbox/SearchBox.vue"
import UserPre from "../userpre/UserPre.vue"
import MsgBox from "../msgbox/MsgBox.vue"

const isLogin = true;
</script>

<template>
  <el-row class="menu" justify="center" align="middle">
    <el-col :span="22">
      <el-row justify="space-between" align="middle">
        <el-col :span="3">
          <Logo />
        </el-col>
        <el-col :span="8">
          <SearchBox />
        </el-col>
        <el-col :span="3">
          <el-row justify="space-evenly" align="bottom">
            <el-col :span="10">
              <el-row justify="center">
                <MsgBox />
              </el-row>
            </el-col>
            <el-col :span="10">
              <el-row justify="center">
                <UserPre />
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>