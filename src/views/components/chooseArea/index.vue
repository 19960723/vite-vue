<template>
  <div>
    <m-choose-area @change="changeHandler" />
  </div>
</template>

<script lang="ts" setup>
  let changeHandler = (val: any) => {
    console.log(val);
  };
</script>

<style></style>
