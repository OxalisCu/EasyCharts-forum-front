<script setup>
import Logo from '../logo/Logo.vue'
import LogoSimple from '../logo/LogoSimple.vue'
import SearchBox from "../searchbox/SearchBox.vue"
import SearchBoxSimple from "../searchbox/SearchBoxSimple.vue"
import UserPre from "./UserPre.vue"
import MsgBox from "./MsgBox.vue"

</script>

<template>
  <el-row class="menu" justify="center" align="middle">
    <el-col class="menu-content" :span="22">
      <div class="left">
        <Logo class="logo" />
        <LogoSimple class="logo-simple" />
      </div>
      <div class="search-box">
        <SearchBox />
      </div>
      <div  class="search-box-simple">
        <SearchBoxSimple />
      </div>
      <div class="right">
        <MsgBox class="msg-box" />
        <UserPre />
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.menu-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.msg-box {
  margin-bottom: 2px;
}

.logo {
  display: flex;
}

.logo-simple {
  display: none;
}

.search-box {
  display: flex;
  width: 40%;
  max-width: 500px;
}

.search-box-simple {
  display: none;
}

@media screen and (max-width: 650px) {
  .search-box {
    display: none;
  }
  .search-box-simple {
    display: flex;
    position: absolute;
    right: 180px;
  }
}

@media screen and (max-width: 400px) {
  .logo {
    display: none;
  }
  .logo-simple {
    display: flex;
  }
  .right {
    width: 100px;
  }
  .search-box-simple {
    right: 150px;
  }
}
</style>