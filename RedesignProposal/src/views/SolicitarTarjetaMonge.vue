<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Benefits from '@/components/benefits.vue';
</script>

<template>
  <div class="page-container">
    <Header/>
    
    <main class="content-wrapper">

      <div class="form-wrapper">

        <div class="form-container">
          <h2 class="form-title">¡Solicítala Aquí Tú Tarjeta Monge!</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="nombre">Nombre <span class="required">*</span></label>
              <input type="text" id="nombre" name="nombre" required>
            </div>
            
            <div class="form-group">
              <label for="primer-apellido">Primer Apellido <span class="required">*</span></label>
              <input type="text" id="primer-apellido" name="primer-apellido" required>
            </div>
            
            <div class="form-group">
              <label for="segundo-apellido">Segundo Apellido <span class="required">*</span></label>
              <input type="text" id="segundo-apellido" name="segundo-apellido" required>
            </div>
            
            <div class="form-group">
              <label for="tipo-identificacion">Tipo Identificación <span class="required">*</span></label>
              <input type="text" id="tipo-identificacion" name="tipo-identificacion" required>
            </div>
            
            <div class="form-group">
              <label for="identificacion">Identificación <span class="required">*</span></label>
              <input type="text" id="identificacion" name="identificacion" required>
            </div>
            
            <div class="form-group">
              <label for="telefono">Teléfono <span class="required">*</span></label>
              <input type="tel" id="telefono" name="telefono" required>
            </div>
            
            <div class="form-group">
              <label for="correo">Correo Electrónico <span class="required">*</span></label>
              <input type="email" id="correo" name="correo" required>
            </div>
            
            <div class="form-group">
              <label for="lugar-trabajo">Lugar de Trabajo <span class="required">*</span></label>
              <input type="text" id="lugar-trabajo" name="lugar-trabajo" required>
            </div>
            
            <div class="form-group">
              <label for="fecha-ingreso">Fecha de Ingreso Aproximada (Mes/Año) <span class="required">*</span></label>
              <input type="text" id="fecha-ingreso" name="fecha-ingreso" placeholder="dd/mm/aaaa" required>
            </div>
            
            <div class="form-group">
              <label for="ingreso-mensual">Ingreso Aproximado Mensual <span class="required">*</span></label>
              <select id="ingreso-mensual" name="ingreso-mensual" required>
                <option value="">Seleccione un rango</option>
                <option value="0-300000">₡0 a ₡300.000</option>
                <option value="300001-500000">₡300.001 a ₡500.000</option>
                <option value="500001-800000">₡500.001 a ₡800.000</option>
                <option value="800001-1000000">₡800.001 a ₡1,000.000</option>
                <option value="1000001+">Más de ₡1,000.001</option>
              </select>
            </div>
            
            <div class="form-group form-group-checkbox">
              <input type="checkbox" id="terminos" name="terminos" required>
              <label for="terminos">Términos y Condiciones <span class="required">*</span></label>
            </div>
            
            <div class="form-group">
              <button type="submit" class="submit-btn">ENVIAR</button>
            </div>
          </form>
        </div>

      </div>
      
      <!-- INICIO SECCIÓN DE BENEFICIOS -->
      <div class="benefits-section">
        <h2 class="benefits-title">
          <span class="yellow-text">Beneficios</span> Tarjeta Monge
        </h2>
        <p class="benefits-description">
          La Tarjeta Monge Mastercard, es para todo. Creada especialmente para vos, con la confianza que te da Grupo Monge.
        </p>
        <p class="benefits-description">
          Con la Tarjeta Monge tenés acceso a compras en cualquier comercio dentro y fuera de Costa Rica. Además podés aprovechar el Tasa 0% Monge y pasar cualquier compra y de cualquier comercio a meses sin intereses, desde el App Tarjeta Monge. Descargá el App Tarjetas Monge y hacé todas tus gestiones.
        </p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M10.5,6.5V11.5H13.5V13H9V11.5H10.5V8H7.5V6.5H10.5M16,13.25C16.69,13.25 17.25,12.69 17.25,12C17.25,11.31 16.69,10.75 16,10.75C15.31,10.75 14.75,11.31 14.75,12C14.75,12.69 15.31,13.25 16,13.25M16,9.25C16.69,9.25 17.25,8.69 17.25,8C17.25,7.31 16.69,6.75 16,6.75C15.31,6.75 14.75,7.31 14.75,8C14.75,8.69 15.31,9.25 16,9.25Z"/></svg>
            <p>Pasá tus compras hasta 24 meses sin interés</p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/></svg>
            <p>Hasta 45 días para pagar<br><small>*En relación directa a la fecha de corte y pago</small></p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4M20,6V8H4V6H20M4,18V12H20V18H4Z"/></svg>
            <p>Pagá tu Tarjeta Monge por medio de Monge pay o Tienda Monge</p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M17,18C17,18.55 16.55,19 16,19C15.45,19 15,18.55 15,18C15,17.45 15.45,17 16,17C16.55,17 17,17.45 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2H1M7,18C7,18.55 6.55,19 6,19C5.45,19 5,18.55 5,18C5,17.45 5.45,17 6,17C6.55,17 7,17.45 7,18Z"/></svg>
            <p>Comprá a tasa 0% en tiendamonge.com</p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5.09L18,8.09V11C18,14.36 15.54,17.5 12,18.82C8.46,17.5 6,14.36 6,11V8.09L12,5.09M10.95,15.5L16.5,9.94L15.08,8.53L10.95,12.67L8.88,10.6L7.46,12L10.95,15.5Z"/></svg>
            <p>Un seguro que sí te protege y te da beneficios inmediatos</p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M12,20C16.4,20 20,16.4 20,12C20,7.6 16.4,4 12,4C7.6,4 4,7.6 4,12C4,16.4 7.6,20 12,20M12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/></svg>
            <p>Atención<br>L a V 7:00 a 7:00<br>S y D 8:00 a 4:00</p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M18,15H6V13H18M18,11H6V9H18M21.2,2H2.8A2,2 0 0,0 1,4V20A2,2 0 0,0 2.8,22H21.2A2,2 0 0,0 23,20V4A2,2 0 0,0 21.2,2Z"/></svg>
            <p>Tarjeta internacional</p>
          </div>
          <div class="benefit-card">
            <svg viewBox="0 0 24 24" class="benefit-icon"><path d="M12,1C4.82,1 2,4.82 2,9C2,12.02 3.67,14.67 6,16.44V19.5C6,19.78 6.22,20 6.5,20H9.5C9.78,20 10,19.78 10,19.5V16.5H14V19.5C14,19.78 14.22,20 14.5,20H17.5C17.78,20 18,19.78 18,19.5V16.44C20.33,14.67 22,12.02 22,9C22,4.82 19.18,1 12,1M11,11H8V8H11V11M16,11H13V8H16V11Z"/></svg>
            <p>Asistente Virtual</p>
          </div>
        </div>
        <div class="promo-banner">
          <p>¡La <span class="yellow-text">Tarjeta Monge</span> es completamente <span class="yellow-text">GRATIS!</span></p>
          <p>No tiene costo de anualidad, membresía, mensualidad, o castigo por no uso.</p>
        </div>
      </div>
      <!-- FIN SECCIÓN DE BENEFICIOS -->

      <!-- INICIO NUEVA SECCIÓN CUMPLIR METAS -->
      <div class="goals-section">
        <div class="goals-content">
          <div class="goals-image">
            <img src="https://www.tiendamonge.com/media/wysiwyg/Tasa_0_-100.jpg" alt="Tasa 0% Monge">
          </div>
          <div class="goals-text">
            <h2>¡Cumplir tus metas y deseos es posible con tu Tarjeta Monge!</h2>
            <p>Trasladá cualquiera de tus compras a cuotas sin interés, en plazos hasta 24 meses.</p>
            <p class="disclaimer">*Aplican condiciones por lugar de compra y monto. Puede aplicar comisión.</p>
            <a href="https://www.financieramonge.com/Misc/ResultadosReporte.aspx?Institucion=GMGINFOAAPP" target="_blank" class="goals-link">Ver reglamento.</a>
          </div>
        </div>
        <div class="icons-showcase">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="showcase-svg"><path d="M17 18c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2M1 2h3.27l.94 2H20c.55 0 1 .45 1 1 0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.94 2H19v2H7c-1.11 0-2-.89-2-2 0-.35.09-.68.24-.96l1.36-2.45-3.2-6.43-.18-.35c-.08-.16-.12-.33-.12-.5 0-.55.45-1 1-1Z"/></svg>
          </div>
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="showcase-svg"><path d="M18.32 10.5h-1.64V6.75c0-.41-.34-.75-.75-.75h-2.18c-.41 0-.75.34-.75.75V10.5h-1.64V4.75c0-.41-.34-.75-.75-.75h-2.18c-.41 0-.75.34-.75.75V10.5H5.75c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75h4.17v2.25h-1.17c-.41 0-.75.34-.75.75s.34.75.75.75h4.67c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.17V17h4.08c.41 0 .75-.34.75-.75v-5c0-.41-.34-.75-.75-.75Z"/></svg>
          </div>
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="showcase-svg"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.01 0c5.07.5 9 4.79 9 10s-3.93 9.5-9 10V2z"/></svg>
          </div>
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="showcase-svg"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
          </div>
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="showcase-svg"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
          </div>
        </div>
        <div class="final-promo-text">
          <p>La podés utilizar para comprar lo que querás, donde querás y cuando querás, porque la Tarjeta Monge es <strong>PARA TODO</strong></p>
          <p>Además podés usarla dentro y fuera de Costa Rica.</p>
        </div>
      </div>
      <!-- FIN NUEVA SECCIÓN CUMPLIR METAS -->

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
  margin-top: 20px;
}

.form-container {
  width: 100%;
}

.form-title {
  color: #28a745;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}

.form-group {
  margin-bottom: 25px;
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
.form-group input[type="email"],
.form-group input[type="number"],
.form-group select {
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
.form-group input[type="email"]:focus,
.form-group input[type="number"]:focus,
.form-group select:focus {
  border-bottom-color: #28a745;
}

.form-group-checkbox {
  display: flex;
  align-items: center;
}

.form-group-checkbox input[type="checkbox"] {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}

.form-group-checkbox label {
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #007bff;
  cursor: pointer;
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
}

.submit-btn:hover {
  background-color: #218838;
}

/* === ESTILOS SECCIÓN DE BENEFICIOS === */
.benefits-section {
  background-color: #00a651;
  color: white;
  padding: 50px 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.benefits-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.yellow-text {
  color: #ffd100;
}

.benefits-description {
  max-width: 900px;
  margin: 0 auto 20px auto;
  font-size: 1rem;
  line-height: 1.6;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    max-width: 1400px;
    margin: 50px auto;
}

.benefit-card {
  background-color: #1db954;
  border: 2px solid white;
  border-radius: 20px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  text-align: center;
}

.benefit-icon {
  width: 60px;
  height: 60px;
  fill: white;
  margin-bottom: 10px;
}

.benefit-card p {
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  text-align: center;
}

.benefit-card small {
  font-size: 0.75rem;
  font-weight: 400;
  opacity: 0.9;
}

.promo-banner {
  background: linear-gradient(135deg, #8e24aa 0%, #6a1b9a 100%);
  padding: 25px;
  border-radius: 15px;
  max-width: 1000px;
  margin: 40px auto 0 auto;
}

.promo-banner p {
  margin: 5px 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.promo-banner p:first-child .yellow-text {
  font-weight: 800;
}


/* === INICIO ESTILOS NUEVA SECCIÓN CUMPLIR METAS === */
.goals-section {
  background-color: #f9f7f6;
  width: 100%;
  padding: 60px 20px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  border-top: 1px solid #e0e0e0;
}

.goals-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

.goals-image {
  flex-shrink: 0;
}

.goals-image img {
  max-width: 180px;
  height: auto;
  border-radius: 8px;
}

.goals-text h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-top: 0;
  margin-bottom: 15px;
}

.goals-text p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}

.goals-text .disclaimer {
  font-size: 0.85rem;
  color: #777;
}

.goals-link {
  color: #007bff;
  text-decoration: underline;
  font-weight: 600;
}

.icons-showcase {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 60px auto;
  flex-wrap: wrap;
}

.icon-circle {
  width: 90px;
  height: 90px;
  border: 2px solid #00a651;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-svg {
  width: 45px;
  height: 45px;
  fill: #00a651;
}

.final-promo-text {
  text-align: center;
  max-width: 800px;
  margin: 20px auto 0 auto;
}

.final-promo-text p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  margin: 5px 0;
}

.final-promo-text p strong {
  font-weight: 800;
}

/* === Media Queries para Responsividad === */
@media (max-width: 1200px) {
  .benefits-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits-section {
    padding: 30px 15px;
  }
  
  .benefits-title {
    font-size: 1.8rem;
  }
  
  .benefits-description {
    font-size: 0.9rem;
  }
  
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 30px auto;
  }
  
  .benefit-card {
    min-height: 160px;
    padding: 12px 8px;
  }
  
  .benefit-icon {
    width: 50px;
    height: 50px;
  }
  
  .benefit-card p {
    font-size: 0.75rem;
  }
  
  .promo-banner {
    padding: 20px;
  }
  
  .promo-banner p {
    font-size: 1rem;
  }

  .goals-content {
    flex-direction: column;
    text-align: center;
  }
  
  .goals-text h2 {
    font-size: 1.5rem;
  }
  
  .icons-showcase {
    gap: 15px;
  }
  
  .icon-circle {
    width: 70px;
    height: 70px;
  }
  
  .showcase-svg {
    width: 35px;
    height: 35px;
  }
  
  .final-promo-text p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    margin-top: 150px;
  }
  
  .benefits-title {
    font-size: 1.5rem;
  }
  
  .benefit-card {
    min-height: 140px;
  }
  
  .benefit-icon {
    width: 45px;
    height: 45px;
  }
  
  .benefit-card p {
    font-size: 0.7rem;
  }
  
  .icons-showcase {
    gap: 10px;
  }
  
  .icon-circle {
    width: 60px;
    height: 60px;
  }
  
  .showcase-svg {
    width: 30px;
    height: 30px;
  }
}
</style>