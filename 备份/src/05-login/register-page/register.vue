<script setup lang="ts">
import "@/assets/login.css"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authAPI } from '@/services/api'
import Header from "@/01-views/header/index.vue"

const router = useRouter()

const registerForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const handleRegister = async () => {
  if (!registerForm.value.username || !registerForm.value.email || 
      !registerForm.value.password || !registerForm.value.confirmPassword) {
    errorMessage.value = '所有字段都是必填的'
    return
  }

  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    errorMessage.value = '两次输入的密码不一致'
    return
  }

  if (registerForm.value.password.length < 6) {
    errorMessage.value = '密码长度至少6位'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const { confirmPassword, ...submitData } = registerForm.value
    const response = await authAPI.register(submitData)
    
    successMessage.value = '注册成功！正在跳转到登录页面...'
    
    // 2秒后跳转到登录页
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (error: any) {
    errorMessage.value = error.response?.data?.error || '注册失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <Header />
  <div class="home-login">
    <div class="home-myform">
      <form class="infoform" @submit.prevent="handleRegister">
        <div class="in-form">
          <p class="title">用户注册</p>
          <ul class="myul">
            <li class="myli user-account-info">
              <label for="user-name" class="mylabel">用户名：</label>
              <input 
                id="user-name" 
                type="text" 
                v-model="registerForm.username"
              />
            </li>
            <li class="myli user-email-info">
              <label for="user-email" class="mylabel">邮箱：</label>
              <input 
                id="user-email" 
                type="email" 
                v-model="registerForm.email"
              />
            </li>
            <li class="myli user-password-info">
              <label for="user-password" class="mylabel">密码：</label>
              <input 
                id="user-password" 
                type="password" 
                v-model="registerForm.password"
              />
            </li>
            <li class="myli user-confirm-password">
              <label for="confirm-password" class="mylabel">确认密码：</label>
              <input 
                id="confirm-password" 
                type="password" 
                v-model="registerForm.confirmPassword"
              />
            </li>
            
            <!-- 错误消息 -->
            <li v-if="errorMessage" class="myli-error">
              <p class="error-message">{{ errorMessage }}</p>
            </li>
            
            <!-- 成功消息 -->
            <li v-if="successMessage" class="myli-success">
              <p class="success-message">{{ successMessage }}</p>
            </li>
            
            <li class="myli-btn">
              <button 
                type="submit" 
                class="btn-sub"
                :disabled="isLoading"
              >
                {{ isLoading ? '注册中...' : '注册' }}
              </button>
            </li>
            <li class="myli-link">
              <p>
                <router-link class="routerlink" to="/login">
                  已有账号？点击登录
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

.success-message {
  color: #27ae60;
  text-align: center;
  font-size: 0.9rem;
  margin: 0;
}

.myli-error, .myli-success {
  margin: 10px 0;
}

.btn-sub:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>