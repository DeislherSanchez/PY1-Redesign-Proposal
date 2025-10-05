
<script setup>
import HeaderNavigation from '@/components/header_aux.vue';
</script>

<template>
  <HeaderNavigation/>
  <div class="page-container">

    
    <div class="content-wrapper">

    </div>
  </div>
</template>

<style scoped>
.page-container {
  margin: 0;
}

.content-wrapper {
  margin-top: 155px; 
  padding: 20px;
  min-height: calc(100vh - 155px);
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

