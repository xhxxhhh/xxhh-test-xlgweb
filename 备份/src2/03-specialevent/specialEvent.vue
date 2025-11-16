<script setup lang="ts">
import Header from "@/01-views/header/index.vue"
import Rooter from "@/01-views/rooter/index.vue"

import FirstBlock from "@/03-specialevent/firstblock/index.vue"
import SpecialeventHead from "./page-head-foot/specialevent-head.vue"
import SpecialeventFoot from "./page-head-foot/specialevent-foot.vue"

import "@/assets/specialevent.css"

</script>

<template>
  <div class="specialeventbody">
    
    <Header/>
    <SpecialeventHead/>
    <FirstBlock/>
    <SpecialeventFoot/>
    <Rooter/>
  
  </div>
  
</template>

<style scoped>

</style>
