<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Navigation, Pagination } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/pagination';

    const modules=[Autoplay,Pagination]


    import {ref} from 'vue'
    let swiperList = ref([
        {id:1,img_url:"01_ima.png"},
        {id:2,img_url:"02_ima.png"},
        {id:3,img_url:"03_ima.png"},
        {id:4,img_url:"04_ima.png"},
        {id:5,img_url:"05_ima.png"},
        {id:6,img_url:"06_ima.png"},
        {id:7,img_url:"07_ima.png"},
        {id:8,img_url:"08_ima.png"},
        {id:9,img_url:"09_ima.png"},
    ])

</script>

<template>
    <div id="swiper">
        <div class="swiper-content">
            <swiper 
                :modules="modules"
                :slides-per-view="4"
                :space-between="5"  
                :pagination="{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                    bulletClass : 'my-bullet',//需设置.my-bullet样式
                    bulletActiveClass: 'my-bullet-active',
                    dynamicBullets: false,          // 禁用动态指示器
                    dynamicMainBullets: 9,          // 显示所有9个点
                }"
                :speed="1000"
                :autoplay="{
                    delay: 2000,                    // 3秒切换
                    disableOnInteraction: false,    // 用户操作后继续自动播放
                }"
                :loop="true"                        
            >
                <swiper-slide v-for="(v,i) in swiperList" :key="v.id">
                    <li class="img-li"><img :src="`/src/assets/images/${v.img_url}`"></img></li>          
                </swiper-slide>     
                <!-- 图片指示器 -->
                <div class="swiper-pagination"></div>           
            </swiper>
            
        </div>
    </div>
</template>

<style scoped>


</style>
