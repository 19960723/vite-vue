<template>
  <el-container>
    <el-aside width="auto">
      <nav-menu :isCollapse="isCollapse"></nav-menu>
    </el-aside>
    <el-container>
      <el-header height="auto">
        <nav-header v-model:isCollapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const isCollapse = ref(true);
  import NavMenu from './NavMenu/index.vue';
  import NavHeader from './NavHeader/index.vue';
</script>

<style></style>
