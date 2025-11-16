<script setup lang="ts">

    import {ref} from 'vue'

    import conversation01 from '@/assets/images/conversation_01.png'
    import conversation02 from '@/assets/images/conversation_02.png'
    import conversation03 from '@/assets/images/conversation_03.png'
    import conversation04 from '@/assets/images/conversation_04.png'

    // 创建图片映射对象
    const imageMap = {
      'conversation_01.png': conversation01,
      'conversation_02.png': conversation02,
      'conversation_03.png': conversation03,
      'conversation_04.png': conversation04
    }

    let conversationList = ref([
      {id:1,img_url:"conversation_01.png"},
      {id:2,img_url:"conversation_02.png"},
      {id:3,img_url:"conversation_03.png"},
      {id:4,img_url:"conversation_04.png"}
    ])

    // 获取图片 URL 的方法
    const getImageUrl = (imgName: string) => {
      return imageMap[imgName as keyof typeof imageMap]
    }


</script>

<template>
  <div>
    <div class="first-personinfo">
      <div class="block">
        <el-carousel
          :interval="2000" 
          type="card"
          height="100%"
          indicator-position="outside" 
          duration="500"
          >
          <el-carousel-item v-for="(v,i) in conversationList" :key="v.id">
            <ul class="first-ul">
              <li><img class="carousel-image" 
                    :src="getImageUrl(v.img_url)" 
                    :alt="`Conversation ${v.id}`"></img></li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
      
    </div>
  </div>
  
</template>

<style scoped>
/* 修改轮播图容器高度为视口单位 */
:deep(.el-carousel) {
  height: 30vw; /* 视口高度的30% */
  min-height: 50px; /* 设置最小高度 */
  max-height: 380px; /* 设置最大高度（可选） */
}

:deep(.el-carousel__container) {
  height: 30vw ;
}

</style>
