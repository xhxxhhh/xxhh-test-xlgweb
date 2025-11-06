<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authAPI } from '@/services/api'

const router = useRouter()
const user = ref<any>(null)
const isLoading = ref(true)

onMounted(async () => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  }

  try {
    const response = await authAPI.getUser()
    user.value = response.data.user
    localStorage.setItem('user', JSON.stringify(response.data.user))
  } catch (error) {
    console.error('获取用户信息失败:', error)
    // 如果token无效，跳转到登录页
    router.push('/login')
  } finally {
    isLoading.value = false
  }
})

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<template>
  <div class="user-page">
    <div class="user-container">
      <div class="user-card">
        <h1 class="user-title">用户信息</h1>
        
        <div v-if="isLoading" class="loading">
          加载中...
        </div>
        
        <div v-else-if="user" class="user-info">
          <div class="info-item">
            <label>用户名：</label>
            <span>{{ user.username }}</span>
          </div>
          <div class="info-item">
            <label>邮箱：</label>
            <span>{{ user.email }}</span>
          </div>
          <div class="info-item">
            <label>注册时间：</label>
            <span>{{ new Date(user.created_at).toLocaleDateString() }}</span>
          </div>
          
          <button @click="handleLogout" class="logout-btn">
            退出登录
          </button>
        </div>
        
        <div v-else class="error-message">
          无法加载用户信息
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>