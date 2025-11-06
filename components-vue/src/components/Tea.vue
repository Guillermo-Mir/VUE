<script setup>
defineProps({
    name:String /*recoge la propiedades para vincular el dom con los datos*/
});
</script>

<template>
    <div class="plan">
        <div class="description">
            <span class="title"> {{name}} </span>
        </div>
    </div>
</template>