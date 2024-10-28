<script setup>
import { ref } from 'vue'
import { imgsize } from '@/api/api.js'
import imgtoolright from '@/components/imgtoolright/index.vue'
const width = ref(200)
const height = ref(200)
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
  width.value = Number(width.value)
  height.value = Number(height.value)
  fd.append('width', width.value)
  fd.append('height', height.value)
  const { data } = await imgsize(fd)
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
    word="自定义尺寸"
    :zippath="zip"
    @update-filelist="updateFileList"
    @clearpath="clearpath"
  >
    <template #before>
      <p>
        宽度：<el-input-number v-model="width" :min="1" :max="1024" /> 像素 - 高度：<el-input-number
          v-model="height"
          :min="1"
          :max="1024"
        />
        像素
      </p>
      <button @click="handle" v-preventReClick>开始处理</button>
    </template>
  </imgtoolright>
</template>
