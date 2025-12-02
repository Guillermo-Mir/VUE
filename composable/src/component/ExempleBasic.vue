<script setup>
import { useCounter } from '@/composable/useCounter';

const {count, increment, decrement} = useCounter()
</script>

<template>
    <div>
        <p>Compte:{{ count }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">+</button>
    </div>
</template>