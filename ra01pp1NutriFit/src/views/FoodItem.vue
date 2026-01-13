<script setup>
const props = defineProps({
  food: { type: Object, required: true }
})

const emit = defineEmits(['select'])

function onSelect(){
  emit('select', props.food)
}
</script>

<template>
  <div class="card">
    <img :src="`/img/${food.img}`" alt="imatge" class="food-img" />
    <h3 style="margin:6px 0">{{ food.name }}</h3>
    <p class="small"><strong>Tipus:</strong> {{ food.type }}</p>
    <!--ul>
      <li v-for="(p,i) in food.properties" :key="i" class="small">{{ p }}</li>
    </ul-->
    <div style="margin-top:10px; display:flex; gap:8px;">
      <button class="btn" @click="onSelect">Veure detall</button>
      
    </div>
  </div>
</template>
