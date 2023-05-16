<template>
    <h1>Index</h1>
    <p>{{ data }}</p>
</template>
<script setup>
const data = await $fetch('/api/hello')
</script>