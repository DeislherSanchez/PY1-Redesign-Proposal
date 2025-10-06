<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Benefits from '@/components/benefits.vue';

const router = useRouter();

const redirectToSolicitar = () => {
  router.push('/SolicitarTarjetaMonge');
};
</script>

<template>
  <div class="page-container">
    <Header/>
    
    <main class="content-wrapper">

      <!-- SECCIÓN PREGUNTA TARJETA -->
      <div class="question-section">
        <h1 class="question-title">Traslada tus compras hasta 12 meses sin intereses y sin comisión</h1>
        <div class="question-box">
          <p class="question-text">¿Ya cuentas con Tarjeta Monge?</p>
          <div class="question-buttons">
            <button class="btn-no" @click="redirectToSolicitar">NO</button>
          </div>
        </div>
      </div>

      <div class="form-wrapper">
        <div class="form-container">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="nombre-completo">Nombre completo Tarjeta Habiente <span class="required">*</span></label>
              <input type="text" id="nombre-completo" name="nombre-completo" required>
            </div>
            
            <div class="form-group">
              <label for="tipo-identificacion">Tipo de Identificación <span class="required">*</span></label>
              <input type="text" id="tipo-identificacion" name="tipo-identificacion" placeholder="Cédula" required>
            </div>
            
            <div class="form-group">
              <label for="cedula">Cédula <span class="required">*</span></label>
              <input type="text" id="cedula" name="cedula" placeholder="09-9999-9999" required>
            </div>
            
            <div class="form-group">
              <label for="fecha-compra">Fecha de compra <span class="required">*</span></label>
              <input type="text" id="fecha-compra" name="fecha-compra" placeholder="mm/dd/yyyy" required>
            </div>
            
            <div class="form-group">
              <label for="monto-compra">Monto de compra <span class="required">*</span></label>
              <input type="text" id="monto-compra" name="monto-compra" required>
            </div>
            
            <div class="form-group">
              <label for="numero-contacto">Número de Contacto <span class="required">*</span></label>
              <input type="tel" id="numero-contacto" name="numero-contacto" required>
            </div>
            
            <div class="form-group center-button">
              <button type="submit" class="submit-btn">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>

    </main>
    <Benefits/>
    <Footer/>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  align-items: center; 
}

.content-wrapper {
  flex: 1; 
  margin-top: 180px;
  margin-bottom: 50px;
  padding: 0;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* === ESTILOS SECCIÓN PREGUNTA === */
.question-section {
  width: 90%;
  max-width: 700px;
  margin-bottom: 30px;
  text-align: center;
}

.question-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.3;
}

.question-box {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.question-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
}

.question-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-yes,
.btn-no {
  padding: 12px 40px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  border: 2px solid #333;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  color: #333;
}

.btn-yes:hover {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.btn-no:hover {
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
}

.form-wrapper {
  max-width: 700px;
  width: 90%;
  padding: 40px;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  margin-bottom: 50px;
}

.form-container {
  width: 100%;
}

.form-group {
  margin-bottom: 25px;
}

.form-group.center-button {
  text-align: center;
}

.form-group label {
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 8px;
}

.form-group .required {
  color: red;
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group input[type="email"] {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;
}

.form-group input[type="text"]:focus,
.form-group input[type="tel"]:focus,
.form-group input[type="email"]:focus {
  border-bottom-color: #28a745;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
}

.submit-btn:hover {
  background-color: #218838;
}

/* === Media Queries === */
@media (max-width: 768px) {
  .question-title {
    font-size: 1.4rem;
  }
  
  .question-box {
    padding: 20px;
  }
  
  .question-text {
    font-size: 1rem;
  }
  
  .question-buttons {
    flex-direction: column;
    gap: 10px;
  }
  
  .btn-yes,
  .btn-no {
    width: 100%;
  }
  
  .form-wrapper {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    margin-top: 150px;
  }
  
  .question-title {
    font-size: 1.2rem;
  }
}
</style>