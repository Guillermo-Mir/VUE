<script setup>
import { ref } from "vue";

// Variable reactiva inicializada en 0
const contador = ref(0)

// Función que suma 1 a contador
const incrementar = () => {
  contador.value++ // usamos .value para modificar refs
}

// Mensaje reactivo
const missatge = ref('hola, món')

// Función para cambiar el mensaje
const canviarMissatge = () => {
  missatge.value = 'Hola, Vue'
}
</script>

<template>
  <div>
    <!-- Mostramos el contador -->
    <p>El comptaor és: {{contador}}</p>
    
    <!-- Al hacer click ejecutamos la función -->
    <button @click="incrementar">Incrementar</button>
  </div>  

  <div>
    <!-- Mostramos el mensaje -->
    <h1>{{missatge}}</h1>

    <!-- Cambia el mensaje al hacer click -->
    <button @click="canviarMissatge">Canvia el missatge</button>
  </div>
</template>

<style scoped>
div{
  text-align: center;
}
button{
  margin-top: 10px
}
</style>
