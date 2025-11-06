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
                    <p class="title">用户注册</p>
                    <ul class="myul">
                        <li class="myli user-account-info">
                            <label for="user-name" class="mylabel">用户名：</label>
                            <input id="user-name user-account" type="text"/>
                        </li>
                        <li class="myli user-email-info">
                            <label for="user-email" class="mylabel">邮箱：</label>
                            <input id="user-email" type="email"/>
                        </li>
                        <li class="myli user-password-info">
                            <label for="user-password" class="mylabel">密码：</label>
                            <input id="user-password" type="password"/>
                        </li>
                        <li class="myli user-confirm-password">
                            <label for="confirm-password" class="mylabel">确认密码：</label>
                            <input id="confirm-password" type="password"/>
                        </li>
                        <li class="myli-btn">
                            <button type="submit" class="btn-sub">注册</button>
                        </li>
                        <li class="myli-link">
                            <p><router-link class="routerlink" to="/login">已有账号？点击登录</router-link></p>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</template>