<template>
  <div>关于我们</div>
  <div>{{ route.query }}</div>
</template>
<script setup>
const route = useRoute()

// definePageMeta({
//   middleware:'auth'
// })

// 匿名路由中间件
definePageMeta({
  middleware:defineNuxtRouteMiddleware(() => {
    // 判断用户是否登陆
    let user = false
    if (!user) {
      return navigateTo('/login')
    }
  })
})
</script>
<style scoped>

</style>