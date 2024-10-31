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
/*当页面大于 1200px 时，大屏幕，主要是 PC 端*/
@media (min-width: 1200px) {
}

/*在 992 和 1199 像素之间的屏幕里，中等屏幕，分辨率低的 PC*/
@media (min-width: 992px) and (max-width: 1199px) {
}

/*在 768 和 991 像素之间的屏幕里，小屏幕，主要是 PAD*/
@media (min-width: 768px) and (max-width: 991px) {
}

/*在 480 和 767 像素之间的屏幕里，超小屏幕，主要是手机*/
@media (min-width: 480px) and (max-width: 767px) {
  .header {
    display: flex;
    flex-direction: column;
    height: auto !important;
    .li {
      padding: 10px;
    }
  }
  .cotent {
    height: auto !important;
    flex-direction: column !important;
    .bottom {
      height: auto !important;
      font-size: 13px !important;
      .beforedit {
        display: flex;
        flex-direction: column;
      }
    }
    .left {
      width: 100% !important;
      margin-bottom: 20px;
    }
    .right {
      margin-left: 0 !important;
    }
  }
}

/*在小于 480 像素的屏幕，微小屏幕，更低分辨率的手机*/
@media (max-width: 479px) {
  .header {
    display: flex;
    flex-direction: column;
    height: auto !important;
    li {
      padding: 10px !important;
    }
  }
  .cotent {
    height: auto !important;
    flex-direction: column !important;
    .bottom {
      height: auto !important;
      font-size: 13px !important;
      .beforedit {
        display: flex;
        flex-direction: column;
      }
    }
    .left {
      width: 100% !important;
      margin-bottom: 20px;
    }
    .right {
      margin-left: 0 !important;
    }
  }
}
</style>
