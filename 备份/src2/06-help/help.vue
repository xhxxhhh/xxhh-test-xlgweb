<!-- src/06-help/help.vue -->
<script setup lang="ts">

//定义一些响应式数据
import { ref } from 'vue'

const helpSections = ref([
  { title: '如何使用网站', content: '这里是使用网站的说明...' },
  { title: '常见问题', content: '这里是常见问题的解答...' },
  { title: '联系我们', content: '如有问题请联系我们...' }
])

const activeSection = ref(0)
</script>

<template>
  <div class="help-document">
    <h1>帮助文档</h1>
    
    <div class="help-nav">
      <button 
        v-for="(section, index) in helpSections" 
        :key="index"
        :class="{ active: activeSection === index }"
        @click="activeSection = index"
      >
        {{ section.title }}
      </button>
    </div>

    <div class="help-content">
      <div 
        v-for="(section, index) in helpSections" 
        :key="index"
        v-show="activeSection === index"
        class="section"
      >
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>
    </div>

    <div class="help-footer">
      <p>如果这里没有解决您的问题，请通过以下方式联系我们：</p>
      <ul>
        <li>邮箱：support@example.com</li>
        <li>电话：400-123-4567</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.help-document {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.help-document h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 10px;
}

.help-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.help-nav button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.help-nav button:hover {
  background: #e9e9e9;
}

.help-nav button.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.help-content {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  min-height: 200px;
}

.section h2 {
  color: #333;
  margin-bottom: 15px;
}

.section p {
  line-height: 1.6;
  color: #666;
}

.help-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}

.help-footer p {
  font-weight: bold;
  margin-bottom: 10px;
}

.help-footer ul {
  list-style: none;
  padding: 0;
}

.help-footer li {
  padding: 5px 0;
  color: #555;
}
</style>