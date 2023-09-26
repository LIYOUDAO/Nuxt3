<script setup>
const route = useRoute()
</script>

<template>
  <div>用户：{{ route.params.group }} - {{ route.params.id }}</div>
</template>

<style scoped>

</style>