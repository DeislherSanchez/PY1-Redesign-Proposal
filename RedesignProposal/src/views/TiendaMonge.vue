<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Benefits from '@/components/benefits.vue';
import Catalog from '@/components/catalog.vue';
</script>

<template>
  <div class="page-container">
    <Header/>
    
    <main class="content-wrapper">
      <Catalog/>
    </main>
    <Benefits/>
    <Footer/>
  </div>
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  #app {
    height: 100%;
  }
</style>



<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content-wrapper {
  flex: 1; 
  margin-top: 155px; 
  padding: 20px;
  box-sizing: border-box; 
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
</style>