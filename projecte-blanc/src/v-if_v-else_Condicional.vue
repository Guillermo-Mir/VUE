<template>
  <div>
    <!-- Si isLoggedIn es true, muestra esto -->
    <p v-if="isLoggedIn">Benvingut, usuari!</p>

    <!-- Si isLoggedIn es false, muestra esto -->
    <p v-else>Si us plau, inicia sessió</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// false por defecto, así que mostrará "Si us plau, inicia sessió"
const isLoggedIn = ref(false)
</script>
