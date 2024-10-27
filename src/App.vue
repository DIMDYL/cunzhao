<template>
  <RouterView />
</template>

<style lang="less">
::-webkit-scrollbar-thumb {
  background-color: rgb(17, 108, 255);
  height: 50px;
  outline-offset: -2px;
  // outline: 2px solid #3d3b3b;
  -webkit-border-radius: 4px;
  /* border: 2px solid #fff; */
}
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}
/*滚动框背景样式*/
::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
  -webkit-border-radius: 0;
}
</style>
