<template>
  <div class="app-shell">
    <header class="header">
      <div class="brand">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="#2b8a78" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h1>NutriFit Coach</h1>
      </div>

      <nav class="nav">
        <RouterLink to="/">Inici</RouterLink>
        <RouterLink to="/foods">Recomanador d'aliments</RouterLink>
        <RouterLink to="/training">Simulador d'entrenaments</RouterLink>
      </nav>
    </header>

    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

