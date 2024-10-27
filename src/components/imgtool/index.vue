<script setup></script>
<template>
  <div class="cotent">
    <div class="left background">
      <div class="logo">
        <img src="@/assets/imgs/qn.png" />
      </div>
      <ul>
        <slot name="link"></slot>
      </ul>
    </div>
    <div class="right background">
      <RouterView />
    </div>
  </div>
</template>
<style lang="less" scoped>
.cotent {
  width: 100%;
  height: calc(100vh - 150px);
  max-height: 666px;
  min-height: 400px;
  display: flex;
  .left,
  .right {
    border-radius: 10px;
  }
  .left {
    width: 168px;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    .logo {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        cursor: pointer;
        transition: all 0.5s;
        border-radius: 20px;
        &:hover {
          // width: 00px;
          border-radius: 20px 20px 90px 90px;
        }
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    margin-left: 20px;
    padding: 10px;
    box-sizing: border-box;
  }
}
.click {
  color: rgb(17, 108, 255);
  background-color: rgba(0, 98, 255, 0.164);
  font-weight: 888;
}
/deep/.el-dialog__body {
  img {
    width: 100% !important;
  }
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
