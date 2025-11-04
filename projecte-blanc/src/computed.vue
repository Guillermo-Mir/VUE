<script setup>
import {ref, computed} from 'vue' // Importamos funciones de Vue

// Variable reactiva
const nombre = ref('Joan') // 'ref' hace que la variable sea reactiva (Vue controla su valor)

// Propiedad computada — depende de otra variable y se actualiza sola
const nomMajuscules = computed(() => nombre.value.toUpperCase()) 
// Cuando 'nombre' cambie, esta función se ejecuta y devuelve el nombre en mayúsculas
</script>

<template>
  <div>
    <p>Nombre: {{ nombre }}</p> <!-- Muestra la variable original -->
    <p>Nom en majúscules (computed): {{ nomMajuscules }}</p> <!-- Muestra el valor calculado -->
  </div>
</template>
