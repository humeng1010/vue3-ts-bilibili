<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'
const active = ref(0);
// 指定ref的泛型
const list = ref<{ id: string, text: string }[]>([])
axios({
    url: '/navList',
    method: 'get'
}).then(res => {
    list.value = res.data.result
})
</script>

<template>
    <van-tabs v-model:active="active">
        <van-tab v-for="l in list" :key="l.id" :title="l.text"></van-tab>
    </van-tabs>
</template>

<style scoped>

</style>