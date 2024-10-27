<script setup>
import imgtool from '@/components/imgtool/index.vue'
</script>
<template>
  <imgtool>
    <template #link>
      <ul>
        <li>
          <RouterLink to="/" :class="{ leftclick: $route.path === '/' }">压缩到指定kb</RouterLink>
        </li>
        <li>
          <RouterLink to="/compressmb" :class="{ leftclick: $route.path === '/compressmb' }"
            >压缩到指定mb</RouterLink
          >
        </li>
      </ul>
    </template>
  </imgtool>
</template>
<style lang="less" scoped>
ul {
  width: 100%;
  // padding: 10px;
  box-sizing: border-box;
  li {
    list-style: none;
    a {
      display: block;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      padding: 12px 0;
      text-align: center;
      &:hover {
        font-weight: 888;
        background-color: rgba(0, 98, 255, 0.164);
        color: rgb(17, 108, 255) !important;
      }
    }
  }
}
</style>
