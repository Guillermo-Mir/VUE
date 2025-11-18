<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

    const frameworks = ref([
{ id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
{ id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d’usuari interactives.' },
{ id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])


</script>

<template>
    <!--
    __________/framework
    -->
    <h1>Frameworks</h1>
    <ul>
        <li v-for="frame in frameworks" :key="frame.id">
            <RouterLink :to="`/frameworks/${frame.id}`"> {{ frame.name }}</RouterLink>
        </li>
    </ul>
    <RouterView :key="$route.fullPath" />
    
</template>