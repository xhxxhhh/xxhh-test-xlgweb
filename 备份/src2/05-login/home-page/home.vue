<script setup lang="ts">
import "@/assets/login.css"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authAPI } from '@/services/api'
import Header from "@/01-views/header/index.vue"

const router = useRouter()

const loginForm = ref({
  username: '',
  password: ''
})

const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    errorMessage.value = '请输入用户名和密码'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await authAPI.login(loginForm.value)
    
    // 保存token和用户信息
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    
    // 跳转到用户页面
    router.push('/login/user')
  } catch (error: any) {
    errorMessage.value = error.response?.data?.error || '登录失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <Header />
  <div class="home-login">
    <div class="home-myform">
      <form class="infoform" @submit.prevent="handleLogin">
        <div class="in-form">
          <p class="title">用户登录</p>
          <ul class="myul">
            <li class="myli user-account-info">
              <label for="user-account" class="mylabel">用户名：</label>
              <input 
                id="user-account" 
                type="text" 
                v-model="loginForm.username"
              />
            </li>
            <li class="myli user-password-info">
              <label for="user-password" class="mylabel">密码：</label>
              <input 
                id="user-password" 
                type="password" 
                v-model="loginForm.password"
              />
            </li>
            
            <!-- 错误消息 -->
            <li v-if="errorMessage" class="myli-error">
              <p class="error-message">{{ errorMessage }}</p>
            </li>
            
            <li class="myli-btn">
              <button 
                type="submit" 
                class="btn-sub"
                :disabled="isLoading"
              >
                {{ isLoading ? '登录中...' : '登录' }}
              </button>
            </li>
            <li class="myli-link">
              <p>
                <router-link class="routerlink" to="/register">
                  还没有账号？点击注册账号
                </router-link>
              </p>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.error-message {
  color: #e74c3c;
  text-align: center;
  font-size: 0.9rem;
  margin: 0;
}

.myli-error {
  margin: 10px 0;
}

.btn-sub:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>