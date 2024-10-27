<script setup>
const click = () => {
  props.uploadbtn.$el.querySelector('input[type="file"]').click()
}
const props = defineProps({
  format: String,
  word: String,
  uploadbtn: Object
})
</script>
<template>
  <!-- 介绍 -->
  <div class="introduce">
    <!-- <img src="@/assets/imgs/qn.png" /> -->
    <h1>{{ word }}</h1>
    <p>温馨提示：一次最多处理50张图片</p>
    <p>支持格式：{{ format }}</p>
    <button @click="click">上传图片</button>
  </div>
</template>
<style lang="less" scoped>
.introduce {
  border: 2px dashed rgba(73, 73, 73, 0.171);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: all 0.5s;
  &:hover {
    border: 2px dashed rgb(17, 108, 255);
  }
  img {
    width: 100px;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  p {
    padding: 7px;
    color: #00000089;
  }
  button {
    width: 268px;
    height: 50px;
    background-color: rgb(17, 108, 255);
    color: white;
    font-size: 20px;
    font-weight: 888;
    border: 2px dashed rgb(202, 197, 197);
    cursor: pointer;
    outline: none;
    border-radius: 10px;
    transition: all 0.5s;
    margin-top: 20px;
    &:hover {
      background-color: rgb(12, 66, 152);
    }
  }
}
</style>
