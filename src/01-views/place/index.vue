<script setup lang="ts">
import { ref } from 'vue'

// 导入所有图片
import img01 from '@/assets/images/01_ima.png'
import img02 from '@/assets/images/02_ima.png'
import img03 from '@/assets/images/03_ima.png'
import img04 from '@/assets/images/04_ima.png'
import img05 from '@/assets/images/05_ima.png'
import img06 from '@/assets/images/06_ima.png'
import img07 from '@/assets/images/07_ima.png'
import img08 from '@/assets/images/08_ima.png'

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
}

let placeList = ref([
  {
    img: "01_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "02_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "03_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "04_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "05_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "06_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "07_ima.png",
    title: "场地名称",
    des: "简单介绍"
  },
  {
    img: "08_ima.png",
    title: "场地名称",
    des: "简单介绍"
  }
])

// 获取图片URL的函数
const getImageUrl = (imgName: string) => {
  return imageMap[imgName as keyof typeof imageMap]
}
</script>

<template>
  <div class="place">
    <div class="text-content gradient-text-rainbow">
      <div class="title gradient-text-rainbow"> 场景介绍 </div>
      <div class="placetext gradient-text-rainbow">The introduction of scenario </div>
    </div>
    <div class="place-content">
      <ul>
        <li v-for="(v, i) in placeList" :key="i">
          <div>
            <img :src="getImageUrl(v.img)" :alt="v.title">
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