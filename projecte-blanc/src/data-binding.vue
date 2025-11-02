<script setup>
const titol ='Hola, aquest títol és dinàmic!' // Texto dinámico
const imatgeURL="https://...imagen.jpg" // URL de una imagen
</script>

<template>
  <article>
      <h1>Binding</h1>
      
      <!-- v-bind:title = asigna dinámicamente el valor de 'titol' al atributo title -->
      <h2 v-bind:title="titol">Passa el ratolí per aquest text</h2>

      <!-- :src es un atajo para v-bind:src | conecta la URL con el atributo src -->
      <img :src="imatgeURL" alt="imatge dinàmica"/>
  </article>
</template>
