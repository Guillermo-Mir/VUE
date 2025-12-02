<script setup>

const props = defineProps({
    food: {
        type: Object, 
    },
})

const emit = defineEmits(['selected'])
function selected (){
    emit('selected', props.food)
}

 </script>

<template>
   <h1>Food Item</h1>
    <img :src="`./img/${food.img}`"/>
    <h2>{{food.name}}</h2>
    <p>Type - {{food.type}}</p>
    <ul>
        <li v-for="f in food.properties">{{f}}</li>
    </ul>  
    
    <button @click="selected">Veure Detall</button>
</template>

<style scoped>
    img{
        width:100px;
        height:100px
    }

</style>