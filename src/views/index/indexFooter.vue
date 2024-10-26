<template>
  <div class="footer background">
    <div class="qnzz">青柠制造</div>
    <div class="logo">
      <img src="@/assets/imgs/qn.png" />
    </div>
    <div class="domain">EditImage.cn</div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  width: 100%;
  padding: 27px;
  height: 277px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    padding: 10px;
    box-sizing: border-box;
  }
  .logo {
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    img {
      width: 100%;
      border-radius: 20px;
      border: 5px dashed rgb(202, 197, 197);
    }
    &:hover {
      width: 118px;
    }
  }
  .qnzz {
    font-size: 27px;
    font-weight: 777;
  }
}
</style>
