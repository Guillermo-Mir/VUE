<script setup>
import { ref } from "vue";
//definim variable reactiva
const contador = ref(0) //reactivitat (ref()) cualquier cosa que modifique lo que se ve por pantalla (renderizar)
//Funció que modifica el valor
const incrementar = () => {
  contador.value++
}

const missatge = ref('hola, món')
const canviarMissatge = () => {
  missatge.value = 'Hola, Vue'
 }

</script>

<template>
  <div>
    <p>El comptaor és: {{contador}}</p>
    <button @click="incrementar">Incrementar</button>
  </div>  
  <div>
    <h1> {{missatge}}</h1>
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
