<script setup>
import FoodItem from '@/views/FoodItem.vue'
/*import FoodItem from './FoodItem.vue -> tambien funciona'*/ 
import {ref} from 'vue'

const foods = ref([
  {
    name: 'Salmó Atlàntic',
    type: 'Proteïna',
    properties: ['Alt Omega-3', 'Ajuda a la recuperació', 'Vitamina D'],
    img: 'salmo.jpeg'
  },
  {
    name: 'Civada integral',
    type: 'Hidrat de carboni',
    properties: ['Alliberament energètic sostingut', 'Rica en ferro', 'Fibra soluble'],
    img: 'civada.jpeg'
  },
  {
    name: 'Alvocat',
    type: 'Greix saludable',
    properties: ['Greixos monoinsaturats', 'Alt en fibra', 'Conté potassi'],
    img: 'alvocat.jpeg'
  },
  {
    name: 'Ou de gallina',
    type: 'Proteïna',
    properties: ['Alto valor biològic', 'Rics en aminoàcids essencials', 'Vitamina B12'],
    img: 'ou.jpeg'
  }
])

const elementSeleccionat = ref([null])

function agafarSeleccionat(food) {
    elementSeleccionat.value = food
}

</script>

<template>
   <h1>Food List</h1>
   <FoodItem v-for="food in foods " :key="food.name" :food="food" @selected="agafarSeleccionat"/> 
    <div v-if="elementSeleccionat"></div>

</template>

<styles scoped>
</styles>