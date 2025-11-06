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
            <p class="text" :class="{ 'show': showText }">Welcome!</p>
            <!-- <img src="@/assets/images/banner.png"> -->
            <video autoplay muted playsinline>
                <source src="@/assets/images/banner_01.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
</template>

<style scoped>

</style>
