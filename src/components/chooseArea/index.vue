<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-select v-model="value1" multiple placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-select v-model="value2" multiple placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-select v-model="value3" multiple placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-select v-model="value4" multiple placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import areaData from '/@/assets/lib/pcas-code.json';
  const value1 = ref([]);
  const value2 = ref([]);
  const value3 = ref([]);
  const value4 = ref([]);
  console.log(areaData);
</script>

<style></style>
