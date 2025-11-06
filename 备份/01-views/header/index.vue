<script setup lang="ts">
import {ref} from 'vue'

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
                    <li><a herf="#">首页</a></li>
                    <li><a herf="/personinfo">人物介绍</a></li>
                    <li><a herf="#">特殊事件</a></li>
                    <li><a herf="#">扩展包</a></li>
                </ul>
            </div>
            <div class="search-item">
                <p><label><input placeholder="搜索框"></input></label></p>
                
                
            </div>
            <div class="user-item">
                <ul>
                    <li><a herf="#">登录/注册</a></li>
                    <li><a herf="#">帮助</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
