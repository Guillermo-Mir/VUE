<script setup>
import { useFetch } from '@/composable/useFetch';
import ProductItem from './ProductItem.vue';

const url = 'https://dummyjson.com/products'

const {data, error, loading, fetchData} = useFetch(url);


</script>

<template>

    <div v-if="loading">
        Carregant...
    </div>
    <div v-else-if="error">
        {{ error }}
    </div>
    <div v-else>
    <ProductItem v-for="p in data.products" :key="p.id" 
                :title="p.title" 
                :description="p.decroption"
                :price="p.price"
                :thumbnail="p.thumbnail"/>
    </div>
</template>