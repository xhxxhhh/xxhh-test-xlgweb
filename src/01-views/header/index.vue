<script setup lang="ts">
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import HelpModal from '@/06-help/help.vue' // 导入帮助组件
const showHelp = ref(false) // 控制帮助模态框显示

const openHelp = () => {
  showHelp.value = true
}

const closeHelp = () => {
  showHelp.value = false
}

const router = useRouter()
const navigateTo = (path: string) => {
  router.push(path)
}

</script>

<template>
    <div class="header">
        <!-- bg:背景内容 -->
        <div class="bg">

        </div>
        <!-- w:文字内容 -->
        <div class="w">
            <a href="#" class="logo">
                <img src="@/assets/images/logo.png" alt="">
            </a>
            <div class="header-item">
                <ul>
                    <li><a class="a" href="#" @click.prevent="navigateTo('/index')">首页</a></li>
                    <li><a class="a" href="#" @click.prevent="navigateTo('/personinfo')">人物介绍</a></li>
                    <li><a class="a" href="#" @click.prevent="navigateTo('/specialevent')">特殊事件</a></li>
                    <li><a class="a" href="#" @click.prevent="navigateTo('/extension')">扩展包</a></li>
                </ul>
            </div>
            <div class="search-item">
                <p><label><input placeholder="搜索框"></input></label></p>
                
                
            </div>
            <div class="user-item">
                <ul>
                    <li><a href="#" @click.prevent="navigateTo('/login')">登录/注册</a></li>
                    <li><a href="#" @click.prevent="openHelp">帮助</a></li>
                </ul>
            </div>
        </div>

        <!-- 帮助模态框 -->
        <div v-if="showHelp" class="modal-overlay" @click="closeHelp">
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="closeHelp"> × </button>
            <HelpModal />
        </div>
        </div>


    </div>
</template>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.close-btn:hover {
  color: #000;
}

</style>
