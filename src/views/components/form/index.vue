<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="日期" prop="date">
      <el-time-picker v-model="ruleForm.date" placeholder="" style="width: 100%"></el-time-picker>
    </el-form-item>
    <el-form-item label="区域" prop="zone">
      <el-select v-model="ruleForm.zone" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
  import type { ElForm } from 'element-plus';
  interface listObj {
    value: string | number;
    label: string;
  }

  type FormInstance = InstanceType<typeof ElForm>;
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    username: '',
    password: '',
    date: new Date(),
    zone: '',
  });
  const rules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
    zone: [{ required: true, message: '请选择区域', trigger: 'change' }],
  });
  const selectOptions: Array<listObj> = [
    { value: '1', label: '1111' },
    { value: '2', label: '2222' },
    { value: '3', label: '3333' },
    { value: '4', label: '4444' },
  ];

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!');
      } else {
        console.log('error submit!');
        return false;
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };
</script>
<style scoped></style>
