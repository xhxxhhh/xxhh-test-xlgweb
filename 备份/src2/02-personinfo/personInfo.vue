<script setup lang="ts">
  import Header from "../01-views/header/index.vue"
  import Rooter from "../01-views/rooter/index.vue"
      
  import FisrtBlock from "./firstblock/index.vue"
  import SecondBlock from "./scondblock/index.vue"

  import "@/assets/personinfo.css"
    
</script>

<template>
  <div class="personbody">
    <Header/>
    <FisrtBlock/>
    <SecondBlock/>
    <Rooter/>
  </div>
  
</template>

<style scoped>


</style>
