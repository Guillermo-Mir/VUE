<script setup>
/*
Camps per agafar
title, description, price ,thumbnail
*/

const props = defineProps({
    title: String,
    description: String,
    price: Number,
    thumbnail:String
})


</script>

<template>
<div>
    <img :src="thumbnail" :alt="title">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>{{ price }}</p>
</div>

</template>