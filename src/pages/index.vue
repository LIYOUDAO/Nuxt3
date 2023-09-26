<template>
  <div>这里是首页</div>
  <HelloWorld />

<nuxt-link to="/">首页</nuxt-link>

<nuxt-link to="/users-admin/8">用户</nuxt-link>

<nuxt-link :to="{path:'/about',query:{userInfo:JSON.stringify(userInfo)}}">带参数跳转</nuxt-link>

<a-button @click="toAbout">跳转</a-button>
<h1>{{ $myPlugin('你好') }}</h1>

<a-button @click="success">Success</a-button>

<a-button @click="increment">count</a-button>
<h3>{{ count }}</h3>
<h3>{{ doubleCount }}</h3>


<h1>{{ counter }}</h1>
<a-button @click="add">count</a-button>
</template>
<script setup>
// 引入myStore
import { useMyStore } from '@/store/myStore'
import { storeToRefs } from 'pinia'

const myStore = useMyStore()
const { count, doubleCount } = storeToRefs(myStore)
const { increment } = myStore

const router = useRouter()
const userInfo = ref({
  id:1,
  userName:'张三'
})

const toAbout = ()=>{
  router.push({
    path:'/about',
    query:{userInfo:JSON.stringify(userInfo.value)}
  })
}

const success = () => {
  message.success('This is a success message',2);
};

const counter =useCounter()
const add = () =>{
  counter.value ++
}

// useCookie
const userInfoCookie = useCookie('userInfo',{maxAge:60})

userInfoCookie.value = {
  uid:213,
  username:'张三'
}
// 打印useCookie
const userinfo2 = useCookie('userInfo')
// console.log('userinfo',userinfo2.value);


// useFeth

// const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains',{
//     pick: ['title'],
//     server:false
// })

// 请求api

const {data} = useFetch('/users',{server:false})

// 调用 userInfoFetch
// const {dara:userData} = await userInfoFetch({})
// console.log('userData',userData)


// const param1 = ref('value1')
// const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains',{
//     query: { param1, param2: 'value2' },
//     server:false
// })




</script>

<style scoped>

</style>