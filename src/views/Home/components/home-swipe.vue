<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
const swipes = ref<{ link: string, imgSrc: string }[]>([])
axios({
    url: '/swiperList',
    method: 'get'
}).then(res => {
    swipes.value = res.data.result
})
</script>

<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
        <van-swipe-item v-for="swipe in swipes" :key="swipe.imgSrc">
            <img :src="swipe.imgSrc" :alt="swipe.link">
        </van-swipe-item>
    </van-swipe>
</template>

<style scoped lang="less">
.my-swipe .van-swipe-item {
    text-align: center;

    img {
        width: 100%;
    }
}
</style>