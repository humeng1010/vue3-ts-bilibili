<template>
  <router-view #default="{ Component }">
    <keep-alive include="Home">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>

</template>

<style lang="less">

</style>
