<script lang="ts" setup>
const name = "v-on"

// Función que recibe un mensaje y lo muestra en consola
const handleClick = (missatge: string): void => {
  console.log(missatge)
}
</script>

<template>
<<<<<<< HEAD
    <h1>Hola {{ name }}!</h1>
    <button v-on:click="handleClick('Botó 1')">Click aquí</button>
    <button @click="handleClick('Botó 2')">Click aquí</button>
</template>
=======
  <h1>Hola {{ name }}!</h1>

  <!-- v-on:click llama la función -->
  <button v-on:click="handleClick('Botó 1')">Click aquí</button>

  <!-- @click es lo mismo pero abreviado -->
  <button @click="handleClick('Boto2')">Click aquí</button>
</template>
>>>>>>> refs/remotes/origin/main
