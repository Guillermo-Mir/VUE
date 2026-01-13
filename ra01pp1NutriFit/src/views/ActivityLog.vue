<script setup>
import { inject } from 'vue'
const activities = inject('activities')
</script>

<template>
  <div>
    <p v-if="activities.length === 0" class="small">Encara no s'han registrat activitats.</p>

    <ul class="log-list" v-else>
      <li v-for="act in activities" :key="act.id">
        <div>
          <strong>{{ act.title }}</strong>
          <div class="small">Calories: {{ act.calories }} — <span class="small">{{ act.time }}</span></div>
        </div>
        <div class="small">{{ act.time.split(',')[1] || act.time }}</div>
      </li>
    </ul>
  </div>
</template>
