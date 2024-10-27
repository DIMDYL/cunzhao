<script setup>
import { ref } from 'vue'
import imgtoolright from '@/components/imgtoolright/index.vue'
const num = ref(200)
const loading = ref(false)
// 开始处理
const handle = () => {
  loading.value = true
}
</script>
<template>
  <imgtoolright :loading="loading" word="压缩到指定kb">
    <template #before>
      <p>
        每张图片均小于：<el-input-number v-model="num" :min="1" :max="1024" />
        kb
      </p>
      <button @click="handle">开始处理</button>
    </template>
  </imgtoolright>
</template>
