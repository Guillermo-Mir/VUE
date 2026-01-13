<script setup>
import { ref } from 'vue'
import FoodItem from './FoodItem.vue'

/* Dades d'exemple: incloem una imatge pública (unsplash) per cada aliment */
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

const selected = ref(null)

function handleSelect(food){
  selected.value = food
}
</script>

<template>
  <div class="grid">
    <div>
      <h2 class="title">Recomanador d'aliments</h2>
      <p class="small">Selecciona un aliment per veure'n la fitxa. Utilitza aquestes dades per fer recomanacions a l'esportista.</p>

      <div class="food-grid" style="margin-top:14px">
        <FoodItem
          v-for="(f, idx) in foods"
          :key="f.name"
          :food="f"
          @select="handleSelect"
        />
      </div>
    </div>

    <aside class="card">
      <h3>Aliment seleccionat</h3>
      <div v-if="selected">
        <img :src="`/img/${selected.img}`" class="food-img" alt="imatge aliment" />
        <h4 style="margin:8px 0 4px 0">{{ selected.name }}</h4>
        <p class="small"><strong>Tipus:</strong> {{ selected.type }}</p>
        <ul>
          <li v-for="(p,i) in selected.properties" :key="i">{{ p }}</li>
        </ul>
        <!--div style="margin-top:10px">
          <button class="btn">Afegir a proposta de dieta</button>
        </div-->
      </div>
      <p v-else class="small">Encara no has seleccionat cap aliment.</p>
    </aside>
  </div>
</template>
