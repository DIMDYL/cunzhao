<script setup>
import { ref, watch } from 'vue'
import imgtoolIntroduce from './imgtoolIntroduce.vue'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
const props = defineProps({
  loading: Boolean
})
// 是否展示
const show = ref(false)
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
// 所有的img
const fileList = ref([])

// 上传按钮
const uploadbtn = ref(null)
const prompt = '图片正在处理中，请稍候，请勿刷新页面，若有多张或大尺寸图片，处理可能需较长时间。'
const handleRemove = (file) => {
  console.log(file)
  fileList.value = fileList.value.filter((item) => {
    return item.uid !== file.uid
  })
}
watch(fileList, (newValue) => {
  console.log(newValue.length)
  if (newValue.length > 0) {
    show.value = true
  } else {
    show.value = false
  }
})
const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
  console.log(file.url)
}
// 上传超出限制
const handleExceed = () => {
  ElMessage.error(`上传总限制为50张图片`)
}
const clearimglist = () => {
  fileList.value = []
}
</script>
<template>
  <div class="cotent">
    <div class="left background">
      <div class="logo">
        <img src="@/assets/imgs/qn.png" />
      </div>
      <ul>
        <li><RouterLink>压缩到指定kb</RouterLink></li>
        <li><RouterLink>压缩到指定mb</RouterLink></li>
      </ul>
    </div>
    <div class="right background" v-loading="loading" :element-loading-text="prompt">
      <div class="operate">
        <!-- 介绍 -->
        <imgtoolIntroduce v-if="!show" format=".jpg、.jpeg、.png" :uploadbtn="uploadbtn" />
        <!-- 处理操作 -->
        <div class="handle" v-show="show">
          <div class="top">
            <span style="font-weight: 888">上传剩余：</span>{{ 50 - fileList.length }}张
          </div>
          <div class="imgs">
            <el-upload
              ref="uploadbtn"
              v-model:file-list="fileList"
              action="#"
              :limit="50"
              :on-exceed="handleExceed"
              list-type="picture-card"
              :auto-upload="false"
              :multiple="true"
            >
              <el-icon><Plus /></el-icon>
              <template #file="{ file }">
                <div>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <el-icon><Delete /></el-icon>
                    </span>
                  </span>
                </div>
              </template>
            </el-upload>
            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </div>
          <div class="bottom">
            <!-- <div class="beforedit">
              <slot name="before"></slot>
            </div> -->
            <div class="afteredit">
              <button @click="clearimglist">再次处理</button>
              <button>下载图片</button>
            </div>
          </div>
        </div>
      </div>
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
            background-color: rgba(0, 98, 255, 0.164);
            font-weight: 888;
          }
        }
      }
    }
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
    .operate {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      .handle {
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .top,
        .bottom {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
        }
        .top {
          border-bottom: 1px solid rgba(73, 73, 73, 0.171);
        }
        .imgs {
          flex: 1;
          width: 100%;
          padding: 10px 0;
          overflow: auto;
        }
        .bottom {
          border-top: 1px solid rgba(73, 73, 73, 0.171);
          width: 100%;
          display: flex;
          flex-direction: column;
          padding-top: 10px;
          .beforedit,
          .afteredit {
            width: 100%;
            display: flex;
            button {
              width: 100px;
              height: 100%;
              background-color: rgb(17, 108, 255);
              color: white;
              font-size: 15px;
              font-weight: 888;
              padding: 10px;
              // border: 2px dashed rgb(202, 197, 197);
              border: none;
              cursor: pointer;
              outline: none;
              border-radius: 10px;
              transition: all 0.5s;
              &:hover {
                background-color: rgb(12, 66, 152);
              }
            }
          }
          .beforedit {
            align-items: center;
            justify-content: space-between;
          }
          .afteredit {
            align-items: center;
            justify-content: space-around;
          }
        }
      }
    }
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
