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
            <img src="/icons/porcentaje.svg" alt="Icono de beneficio" class="benefit-icon">
            <p>Pasá tus compras hasta 24 meses sin interés</p>
          </div>
          <div class="benefit-card">
            <img src="/icons/pagos.svg" alt="Icono de pago en dias" class="benefit-icon">
            <p>Hasta 45 días para pagar<br><small>*En relación directa a la fecha de corte y pago</small></p>
          </div>
          <div class="benefit-card">
            <img src="/icons/cardMonge.svg" alt="Icono de tarjeta monge" class="benefit-icon">
            <p>Pagá tu Tarjeta Monge por medio de Monge pay o Tienda Monge</p>
          </div>
          <div class="benefit-card">
            <img src="/icons/comprar.svg" alt="Icono de comprar" class="benefit-icon">
            <p>Comprá a tasa 0% en tiendamonge.com</p>
          </div>
          <div class="benefit-card">
            <img src="/icons/respaldo.svg" alt="Icono de respaldo" class="benefit-icon">
            <p>Un seguro que sí te protege y te da beneficios inmediatos</p>
          </div>
          <div class="benefit-card">
            <img src="/icons/atencion247.svg" alt="Icono de atención 24/7" class="benefit-icon">
            <p>Atención<br>L a V 7:00 a 7:00<br>S y D 8:00 a 4:00</p>
          </div>
          <div class="benefit-card">
            <img src="/icons/mastercard.svg" alt="Icono de tarjeta internacional" class="benefit-icon">
            <p>Tarjeta internacional</p>
          </div>
          <div class="benefit-card">
            <img src="/icons/asistente.svg" alt="Icono de asistente virtual" class="benefit-icon">
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
            <img src="/icons/compras.svg" alt="Icono de compras" class="showcase-svg">
          </div>
          <div class="icon-circle">
            <img src="/icons/gasolina.svg" alt="Icono de gasolina" class="showcase-svg">
          </div>
          <div class="icon-circle">
            <img src="/icons/restaurante.svg" alt="Icono de restaurantes" class="showcase-svg">
          </div>
          <div class="icon-circle">
            <img src="/icons/salud.svg" alt="Icono de salud" class="showcase-svg">
          </div>
          <div class="icon-circle">
            <img src="/icons/avion.svg" alt="Icono de avión" class="showcase-svg">
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
  border: 2px solid #28b935;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-svg {
  width: 45px;
  height: 45px;
  fill: #28b935;
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