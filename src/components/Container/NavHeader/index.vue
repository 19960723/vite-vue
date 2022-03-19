<template>
  <div class="header">
    <el-icon :size="20" @click="toggle" class="pointer">
      <component :is="isCollapse ? 'el-Expand' : 'el-Fold'"></component>
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    isCollapse: {
      type: Boolean,
      default: true,
    },
  });
  const emits = defineEmits(['update:isCollapse']);
  const toggle = () => {
    emits('update:isCollapse', !props.isCollapse);
  };
</script>

<style>
  .header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
</style>
