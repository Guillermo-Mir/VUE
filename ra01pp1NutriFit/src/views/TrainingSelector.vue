<script setup>
import { inject } from 'vue'

const recommended = inject('recommended')
const addActivity = inject('addActivity')
const coachName = inject('coachName')
</script>

<template>
  <div>
    <h3 class="small">Entrenaments recomanats (Coach: {{ coachName }})</h3>
    <div style="display:grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap:12px; margin-top:10px;">
      <div v-for="item in recommended" :key="item.id" class="card">
        <img :src="`/img/${item.img}`" alt="" class="food-img" style="height:120px" />
        <h4 style="margin:8px 0 4px 0">{{ item.title }}</h4>
        <p class="small">Est. calories: {{ item.calories }} kcal</p>
        <div style="margin-top:10px; display:flex; gap:8px;">
          <button class="btn" @click="addActivity(item)">Registrar activitat</button>
        </div>
      </div>
    </div>
  </div>
</template>
