<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Benefits from '@/components/benefits.vue';
import Catalog from '@/components/catalog.vue';
import Categories from '@/components/categories.vue';
</script>

<template>
  <div class="page-container">
    <Header/>
    
    <main class="content-wrapper">
      <Categories/>
      <Catalog/>
    </main>
    <Benefits/>
    <Footer/>
  </div>
</template>



<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content-wrapper {
  flex: 1; 
  margin-top: 155px; /* Margen para la versión de escritorio grande */
  padding: 0;
  box-sizing: border-box; 
  transition: margin-top 0.2s ease-in-out; /* Opcional: añade una transición suave */
}

h1 {
  color: #333;
  font-family: 'Open Sans', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 16px;
}

p {
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* --- SOLUCIÓN AÑADIDA --- */
/* Media query para escritorios más pequeños y tablets en horizontal */
@media (max-width: 1100px) {
  .content-wrapper {
    /* Ajusta este valor para que coincida con la altura del header en esta resolución */
    margin-top: 135px; 
  }
}

/* Media query para tablets en vertical y móviles */
@media (max-width: 768px) {
  .content-wrapper {
    /* Ajusta este valor para la altura del header en móviles */
    margin-top: 80px; 
  }
}
</style>