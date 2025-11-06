<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// 导入所有图片
import img01 from '@/assets/images/01_ima.png'
import img02 from '@/assets/images/02_ima.png'
import img03 from '@/assets/images/03_ima.png'
import img04 from '@/assets/images/04_ima.png'
import img05 from '@/assets/images/05_ima.png'
import img06 from '@/assets/images/06_ima.png'
import img07 from '@/assets/images/07_ima.png'
import img08 from '@/assets/images/08_ima.png'
import img09 from '@/assets/images/09_ima.png'

const modules = [Autoplay, Pagination]

// 创建图片映射
const imageMap = {
  '01_ima.png': img01,
  '02_ima.png': img02,
  '03_ima.png': img03,
  '04_ima.png': img04,
  '05_ima.png': img05,
  '06_ima.png': img06,
  '07_ima.png': img07,
  '08_ima.png': img08,
  '09_ima.png': img09,
}

import { ref } from 'vue'
let swiperList = ref([
  { id: 1, img_url: "01_ima.png" },
  { id: 2, img_url: "02_ima.png" },
  { id: 3, img_url: "03_ima.png" },
  { id: 4, img_url: "04_ima.png" },
  { id: 5, img_url: "05_ima.png" },
  { id: 6, img_url: "06_ima.png" },
  { id: 7, img_url: "07_ima.png" },
  { id: 8, img_url: "08_ima.png" },
  { id: 9, img_url: "09_ima.png" },
])

// 获取图片URL的函数
const getImageUrl = (imgName: string) => {
  return imageMap[imgName as keyof typeof imageMap]
}
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
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          dynamicBullets: false,
          dynamicMainBullets: 9,
        }"
        :speed="1000"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :loop="true"                        
      >
        <swiper-slide v-for="(v, i) in swiperList" :key="v.id">
          <li class="img-li">
            <img :src="getImageUrl(v.img_url)" :alt="`Slide ${v.id}`">
          </li>          
        </swiper-slide>     
        <!-- 图片指示器 -->
        <div class="swiper-pagination"></div>           
      </swiper>
    </div>
  </div>
</template>

<style scoped>
</style>