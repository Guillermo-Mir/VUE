<script setup>
import Tea from './components/Tea.vue';

const teas = ["Verds", "Negres", "Vermells", "Blancs"];


</script>
<template>
      <div class="content">
        <h1 class="title">Subscripcions disponibles</h1>
        <h2 class="subtitle">
            Disposem dels millor tes del món
        </h2>
        <div class="plans">
            <Tea v-for="tea in teas" :key="tea" :name= "tea"/>    
        </div>
    </div> 
</template>