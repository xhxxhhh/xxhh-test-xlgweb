<script setup lang="ts">
    import Header from "../01-views/header/index.vue"
    import Rooter from "../01-views/rooter/index.vue"
    import '@/assets/index.css'
</script>

<template>
    <div class="banner">       
        <div class="content">
            <Header/>
            <video autoplay loop playsinline>
                <source src="@/assets/images/extension_01.mp4" type="video/mp4"/>
            </video>
            <Rooter/>
        </div>
    </div>
</template>

<style scoped>

</style>
