<script setup>
const click = () => {
  console.log(location.hostname)
}
</script>
<template>
  <div class="header">
    <div class="logo">EditIamge<span>.cn</span></div>
    <div class="nav">
      <ul @click="click">
        <li>
          <RouterLink to="/" :class="{ click: $route.path === '/' }">压缩图片</RouterLink>
        </li>
        <li>
          <RouterLink to="/2" :class="{ click: $route.path === '/2' }">修改尺寸</RouterLink>
        </li>
        <li>
          <RouterLink to="/2" :class="{ click: $route.path === '/2' }">图片水印</RouterLink>
        </li>
      </ul>
    </div>
    <div class="show"></div>
  </div>
</template>
<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  .logo,
  .show {
    width: 200px;
  }
  .logo {
    // text-shadow: 8px 3px 6px rgb(17, 108, 255);
    font-size: 30px;
    font-weight: 777;
    color: rgb(17, 108, 255);
    // padding: 0 20px;
    position: relative;
    font-family: Georgia, 'Times New Roman', Times, serif;
    &::before {
      content: '免费图片处理';
      position: absolute;
      left: 0;
      font-size: 10px;
      bottom: -10px;
    }
    span {
      font-size: 10px;
    }
  }
  .nav {
    height: 100%;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      height: 100%;
      li {
        list-style: none;
        padding: 10px 40px;
        box-sizing: border-box;
        height: 100%;
        a {
          transition: all 0.1s;
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          font-size: 20px;
          //   font-weight: 777;
          color: black;
          text-align: center;
          &:hover {
            color: rgb(17, 108, 255);
          }
        }
      }
    }
  }
  .click {
    color: rgb(17, 108, 255) !important;
    border-bottom: 2px solid rgb(17, 108, 255);
  }
}
</style>
