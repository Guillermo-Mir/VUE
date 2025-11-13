<script setup>
import { useRoute } from 'vue-router';

const frameworks = ([
    { id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
    { id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d’usuari interactives.' },
    { id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])

const route = useRoute();
const frameworkID = parseInt(route.params.id) //tiene que concidir con el que envias desde el index.js (router)
const framework = frameworks.find(f => f.id == frameworkID)

</script>


<template>
    <!--
    __________/framework/1
    -->
    <h1>Framework Detail</h1>
    <div>
        <h2>Nom - {{framework.name}}</h2>
        <p><b>Descripcio - </b>{{framework.desc}}</p>
    </div>

</template>
