<script setup>
import { ref, provide } from 'vue'
import TrainingSelector from './TrainingSelector.vue'
import ActivityLog from './ActivityLog.vue'

const coachName = ref('Marc Ferrer')

const recommended = ref([
  { id: 'cardio20', title: 'Cardio 20 min', calories: 220, img: 'cardio.jpg' },
  { id: 'upperStrength', title: 'Força tren superior', calories: 320, img: 'trensuperior.jpg' },
  { id: 'hiit10', title: 'HIIT 10 min', calories: 180, img: 'hiit.jpg' },
  { id: 'stretch', title: 'Estiraments guiats', calories: 60, img: 'estiraments.jpg' }
])

const activities = ref([])

function addActivity(item){
  activities.value.unshift({
    id: Date.now(),
    title: item.title,
    calories: item.calories,
    time: new Date().toLocaleString()
  })
}

// PROVIDE: dades i funció
provide('coachName', coachName)
provide('recommended', recommended)
provide('activities', activities)
provide('addActivity', addActivity)
</script>

<template>
  <div class="grid">
    <div>
      <h2 class="title">Simulador d'entrenaments</h2>
      <p class="small">Selecciona un entrenament i registra'l per crear un historial.</p>

      <div style="margin-top:12px">
        <TrainingSelector />
      </div>
    </div>

    <aside class="card">
      <h3>Historial d'activitats</h3>
      <ActivityLog />
    </aside>
  </div>
</template>
