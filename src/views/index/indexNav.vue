<script setup></script>
<template>
  <div class="header background">
    <a href="/" class="logo">EditIamge<span>.cn</span></a>
    <div class="nav">
      <ul>
        <li>
          <RouterLink to="/" :class="{ click: $route.matched[1].path === '/' }"
            >压缩图片</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/2" :class="{ click: $route.matched[1].path === '/2' }"
            >修改尺寸</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/2" :class="{ click: $route.matched[1].path === '/2' }"
            >图片水印</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/2" :class="{ click: $route.matched[1].path === '/2' }"
            >在线帮助</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  height: 88px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 5px dashed rgb(17, 108, 255);
  font-size: 20px;
  .show {
    position: relative;
    &:hover {
      .wechatimg {
        display: block;
      }
    }
  }
  .logo {
    color: rgb(17, 108, 255);
    position: relative;
    font-family: Georgia, 'Times New Roman', Times, serif;
    transition: all 0.5s;
    cursor: pointer;
    text-decoration: none;
    font-weight: 888;
    font-size: 27px;
    &::before {
      content: '免费在线编辑图片';
      position: absolute;
      left: 0;
      font-size: 11px;
      bottom: -10px;
      color: rgb(17, 59, 123);
    }
    &:hover {
      font-size: 30px;
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
          padding: 10px 0;
          box-sizing: border-box;
          text-align: center;
          &:hover {
            color: rgb(17, 108, 255);
            font-weight: 777;
          }
        }
      }
    }
  }
  .click {
    font-weight: 777;
    color: rgb(17, 108, 255) !important;
    border-bottom: 2px solid rgb(17, 108, 255);
  }
}
</style>
