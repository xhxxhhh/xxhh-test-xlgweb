<script setup lang="ts">
import {ref} from 'vue'
let placeList =ref([
    {
        img:"01_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"02_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"03_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"04_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"05_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"06_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"07_ima.png",
        title:"场地名称",
        des:"简单介绍"
    },
    {
        img:"08_ima.png",
        title:"场地名称",
        des:"简单介绍"
    }
])
</script>

<template>
    <div class="place">
        <div class="text-content gradient-text-rainbow">
            <div class="title gradient-text-rainbow"> 场景介绍 </div>
            <div class="text gradient-text-rainbow">The introduction of scenario </div>
        </div>
        <div class="place-content">
            <ul>
                <li v-for="(v,i) in placeList" :key="i">
                    <div>
                        <img :src="`/src/assets/images/${v.img}`">
                    </div>
                    <div>
                        <h4>{{ v.title }}</h4>
                        <p>{{ v.des }}</p>
                    </div>
                </li>
                         
            </ul>
        </div>
           
    </div>
</template>

<style scoped>

</style>
