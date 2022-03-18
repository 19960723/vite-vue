<template>
  <div>
    <el-icon :size="20">
      <edit />
    </el-icon>
    <el-icon :size="23" class="is-loading">
      <loading />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
  import { Edit, Loading } from '@element-plus/icons-vue';
</script>
<style scoped></style>
