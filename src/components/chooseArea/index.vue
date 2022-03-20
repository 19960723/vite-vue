<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-select v-model="province" clearable placeholder="请选择省份" style="width: 100%">
        <el-option
          v-for="item in provinceData"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        />
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-select
        v-model="city"
        clearable
        :disabled="!province"
        placeholder="请选择城市"
        style="width: 100%"
      >
        <el-option
          v-for="item in cityData"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        />
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-select
        v-model="area"
        clearable
        :disabled="!city"
        placeholder="请选择区域"
        style="width: 100%"
      >
        <el-option
          v-for="item in areaInfoData"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        />
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-select
        v-model="street"
        clearable
        :disabled="!area"
        placeholder="请选择街道"
        style="width: 100%"
      >
        <el-option
          v-for="item in streetData"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        />
      </el-select>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { reactive, ref, watch } from 'vue';
  import areaData from '/@/assets/lib/pcas-code.json';
  let province = ref<string>(''); // 选中的省
  let city = ref<string>(''); // 选中的市
  let area = ref<string>(''); // 选中的区
  let street = ref<string>(''); // 选中的街

  interface areaInfo {
    code: string;
    name: string;
    children?: areaInfo[];
  }
  interface Data {
    name: string;
    code: string;
  }

  let emits = defineEmits(['change']);

  let provinceData = reactive<areaInfo[]>(areaData);
  let cityData = ref<areaInfo[]>([]);
  watch(
    () => province.value,
    (val) => {
      const index = areaData.findIndex((v) => v.code === val);
      if (index !== -1) {
        cityData.value = provinceData[index].children!;
      }
      city.value = '';
      area.value = '';
      street.value = '';
    },
  );
  let areaInfoData = ref<areaInfo[]>([]);
  watch(
    () => city.value,
    (val) => {
      const index = cityData.value.findIndex((v) => v.code === val);
      if (index !== -1) {
        areaInfoData.value = cityData.value[index].children!;
      }
      area.value = '';
      street.value = '';
    },
  );
  let streetData = ref<areaInfo[]>([]);
  watch(
    () => area.value,
    (val) => {
      const index = areaInfoData.value.findIndex((v) => v.code === val);
      if (index !== -1) {
        streetData.value = areaInfoData.value[index].children!;
      }
      street.value = '';
    },
  );

  watch(
    () => street.value,
    (val) => {
      if (val) {
        let provinceInfo: Data = {
          code: province.value,
          name: province.value && areaData.find((item) => item.code === province.value)!.name,
        };
        let cityInfo: Data = {
          code: city.value,
          name: city.value && cityData.value.find((item) => item.code === city.value)!.name,
        };
        let areaInfo: Data = {
          code: area.value,
          name: area.value && areaInfoData.value.find((item) => item.code === area.value)!.name,
        };
        let streetInfo: Data = {
          code: val,
          name: val && streetData.value.find((item) => item.code === val)!.name,
        };
        emits('change', {
          province: provinceInfo,
          city: cityInfo,
          area: areaInfo,
          street: streetInfo,
        });
      }
    },
  );
</script>

<style></style>
