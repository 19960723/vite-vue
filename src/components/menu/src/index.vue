<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical"
    :collapse="isCollapse"
    :router="router"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item v-for="item in data" :key="item.path" :index="item.index">
      <el-icon><component :is="`el-${item.icon}`"></component></el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  defineProps({
    isCollapse: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
    defaultActive: {
      type: String,
      default: '',
    },
    router: {
      type: Boolean,
      default: false,
    },
  });
  function handleOpen() {}
  function handleClose() {}
</script>

<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
