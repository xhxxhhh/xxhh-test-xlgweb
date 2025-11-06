<script setup lang="ts">
import "@/assets/login.css"
import {ref} from 'vue'
import Header from "@/01-views/header/index.vue"
import Rooter from "@/01-views/rooter/index.vue"
      
</script>

<template>
    <Header/>
    <div class="home-login">
        <div class="home-myform">
            <form class="infoform">
                <div class="in-form">
                    <p class="title">用户登录</p>
                    <ul class="myul">
                    
                        <li class="myli user-account-info">
                            <label for="user-account" class="mylabel">用户名：</label>
                            <input id="user-account" type="text"/>
                            
                        </li>
                        <li class="myli user-password-info">
                            <label for="user-password" class="mylabel">密码：</label>
                            <input id="user-password" type="password"/>
                            
                        </li>
                        <li class="myli-btn">
                           <!-- <label for="user-password" class="mylabel"></label> -->
                            <button type="submit" class="btn-sub">登录</button>
                             
                        </li>
                        <li class="myli-link">
                           <!-- <label for="user-password" class="mylabel"></label> -->
                            <p><router-link class="routerlink" to="/register">还没有账号？点击注册账号</router-link></p>
                             
                        </li>
                </ul>
                </div>
            </form>
        </div>
    </div>
    

    
</template>

<style scoped>

</style>
