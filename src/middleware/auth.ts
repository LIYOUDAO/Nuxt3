export default defineNuxtRouteMiddleware((to, from) => {
  // 判断用户是否登陆
  let user = false
  if (!user) {
    return navigateTo('/login')
  }
})
