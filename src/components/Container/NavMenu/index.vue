<template>
  <m-menu :data="data" :isCollapse="isCollapse" router :defaultActive="$route.path"></m-menu>
</template>

<script lang="ts" setup>
  const props = defineProps({
    isCollapse: {
      type: Boolean,
      default: true,
    },
  });
  const data = [
    {
      icon: 'HomeFilled',
      name: '首页',
      index: '/',
    },
    {
      icon: 'Location',
      name: '省市区选择',
      index: '/chooseArea',
      children: [],
    },
    {
      icon: 'Setting',
      name: '表单',
      index: '/formCom',
      children: [],
    },
    {
      icon: 'ShoppingBag',
      name: '表格',
      index: '/tableCom',
      children: [],
    },
  ];
</script>

<style></style>
