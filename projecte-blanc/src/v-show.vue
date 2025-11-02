<template>
  <!-- Cambia el valor de mostrar (true / false) -->
  <button @click="mostrar = !mostrar">Alternar visibilitat</button>

  <!-- v-show oculta visualmente pero NO elimina del DOM -->
  <p v-show="mostrar">Aquest text es mostra o amaga sense eliminar-lo del DOM</p>
</template>

<script setup>
import {ref} from 'vue'
const mostrar = ref(true) // true = visible, false = oculto
</script>
