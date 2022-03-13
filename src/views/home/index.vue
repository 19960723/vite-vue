<template>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
      <el-icon :size="20">
        <edit />
      </el-icon>
      
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import * as Icons from '@element-plus/icons-vue' 
Object.keys(Icons).forEach(v => {
  console.log(v, "==", (Icons as any)[v])
})

import {useRoute, useRouter } from 'vue-router'
console.log(useRoute())
</script>
<style scoped>
</style>
