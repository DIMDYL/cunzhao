<script setup>
import { ref } from 'vue'
import { compress } from '@/api/api.js'
import imgtoolright from '@/components/imgtoolright/index.vue'
const num = ref(1)
const loading = ref(false)
const filelist = ref(null)
const zip = ref(null)
// 开始处理
const handle = async () => {
  loading.value = true
  let fd = new FormData()
  filelist.value.forEach((file) => {
    fd.append('files', file.raw)
  })
  num.value = Number(num.value)
  // 添加图片
  fd.append('targetSize', num.value * 1024)
  const { data } = await compress(fd)
  console.log(data)
  loading.value = false
  zip.value = data.zip
}
const updateFileList = (value) => {
  filelist.value = value
}
const clearpath = (value) => {
  zip.value = value
}
</script>
<template>
  <imgtoolright
    :loading="loading"
    word="压缩到指定mb"
    :zippath="zip"
    @update-filelist="updateFileList"
    @clearpath="clearpath"
  >
    <template #before>
      <p>
        每张图片均小于：<el-input-number v-model="num" :min="1" :max="1024" />
        mb
      </p>
      <button @click="handle" v-preventReClick>开始处理</button>
    </template>
  </imgtoolright>
</template>
