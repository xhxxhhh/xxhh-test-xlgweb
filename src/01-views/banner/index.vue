<script setup lang="ts">
    import { onMounted, ref } from 'vue'

    const showText = ref(false);

    onMounted(() => {
        setTimeout(() => {
            showText.value = true
        }, 800)
    })


</script>

<template>
    <div class="banner">       
        <div class="content">
            <p class="text1">Welcome to</p>
            <p class="text" :class="{ 'show': showText }">My Stardew Valley</p>
            <!-- <p class="text" :class="{ 'show': showText }">Stardew Valley</p> -->
            <!-- <img src="@/assets/images/banner.png"> -->
            <video autoplay muted playsinline id="myv">
                <source src="@/assets/images/banner_01.mp4" type="video/mp4"/>
            </video>
            
        </div>
    </div>
</template>

<style scoped>

</style>
