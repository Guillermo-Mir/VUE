<template>
  <div>
    <h2 class="title">Benvingut/da a NutriFit Coach</h2>
    <p class="small">Examen: implementa els mòduls de recomanació d'aliments i registre d'entrenaments. Utilitza el menú per obrir cada secció.</p>

    <div style="margin-top:18px; display:flex; gap:12px;">
      <RouterLink to="/foods" class="btn">Obrir Recomanador d'aliments</RouterLink>
      <RouterLink to="/training" class="btn ghost">Obrir Simulador d'entrenaments</RouterLink>
    </div>
  </div>
</template>
