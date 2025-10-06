<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <RouterView/>
</template>

<style>
/* Prevenir scroll horizontal en toda la aplicación */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 100%;
}

#app {
  overflow-x: hidden;
  max-width: 100vw;
}

* {
  box-sizing: border-box;
}
</style>

