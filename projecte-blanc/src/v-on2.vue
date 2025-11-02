<template>
  <button @click="salutacio">Fes clic per saludar</button>
</template>

<script setup>
const salutacio = () => {
  alert('Hola, benvingut!') // Mensaje emergente
}
</script>
