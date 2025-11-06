<script setup lang="ts">

</script>

<template>
  <div class="first-specialEvent">
    <div class="maincontent">
        <div class="left-column">
        <ul>
           <p class="xiaobiaoti">简介</p>
            <li class="content">
                <RouterLink class="router-link" to="/specialevent/1">注意事项</RouterLink>
            </li>
        </ul>
        <ul>
            <p class="xiaobiaoti">鹈鹕镇</p>
            <li class="content">
                <RouterLink class="router-link" to="/specialevent/2">法师</RouterLink>
            </li>
            <li class="content">
                <RouterLink class="router-link" to="/specialevent/3">齐先生</RouterLink>
            </li>
            <li class="content">
                <RouterLink class="router-link" to="/specialevent/4">科罗布斯</RouterLink>
            </li>
        </ul>
        <ul>
            <p class="xiaobiaoti">沙漠</p>
            <li class="content">
                <RouterLink class="router-link" to="/specialevent/5">桑迪</RouterLink>
            </li>
        </ul>
        <ul>
            <p class="xiaobiaoti">姜岛</p>
            <li class="content">
                <RouterLink class="router-link" to="/specialevent/6">雷欧</RouterLink>
            </li>
        </ul>
        
    </div>
    <div class="middle-column">
        <ul>
            <li>
                <RouterView/>
            </li>
        </ul>
    </div>
    </div>
    


    <div class="right-column">
        <ul>
            <li>
                你好
            </li>
        </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
