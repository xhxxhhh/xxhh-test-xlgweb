<script setup lang="ts">
    import "@/assets/personinfo.css"
    import Header from "./header/index.vue"
    import Rooter from "./rooter/index.vue"
    import {ref} from 'vue'

    let conversationList = ref([
      {id:1,img_url:"conversation_01.png"},
      {id:2,img_url:"conversation_02.png"},
      {id:3,img_url:"conversation_03.png"},
      {id:4,img_url:"conversation_04.png"}
    ])
</script>

<template>
  <div>
    <Header/>
    <div class="personinfo">
      <div class="block text-center">
        <span class="demonstration">Motion blur the switch (default)</span>
        <el-carousel
          height="500px"
            
          >
          <el-carousel-item v-for="(v,i) in conversationList" :key="v.id">
            <ul>
              <li><img :src="`/src/assets/images/${v.img_url}`"></img></li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
      
    </div>
    
    <Rooter/>
  </div>
  
</template>

<style scoped>


</style>
