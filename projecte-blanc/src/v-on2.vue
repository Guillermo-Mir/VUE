<template>
    <button @click="salutacio">Fes clic per saldudar</button>
</template>

<script setup>
const salutacio = () => {
    alert('Hola, benvingut!')
}
</script>