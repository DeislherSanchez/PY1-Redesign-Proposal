<template>
  <div class="benefits-container">
    <h2 class="benefits-title">Beneficios de comprar en Tienda Monge</h2>
    <hr class="title-divider">

    <div class="benefits-grid">

      <div class="benefit-item">
        <div class="icon-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png" alt="icon" />
        </div>
        <div class="benefit-text">
          <p>Atención personalizada vía WA</p>
          <p class="sub-text">7021-7100</p>
        </div>
      </div>

      <div class="benefit-item">
        <div class="icon-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/61/61457.png" alt="icon" />
        </div>
        <div class="benefit-text">
          <p>Comprá fácil y 100% seguro 24/7</p>
        </div>
      </div>


      <div class="benefit-item">
        <div class="icon-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" alt="icon" />
        </div>
        <div class="benefit-text">
          <p>Pagá con tu crédito, Tarjeta de crédito o débito, Tasa Cero Tarjeta Monge, Tasa Cero BAC.</p>
        </div>
      </div>


      <div class="benefit-item">
        <div class="icon-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png" alt="icon" />
        </div>
        <div class="benefit-text">
          <p>Cambios y devoluciones fáciles en todas las Monge del país</p>
        </div>
      </div>


      <div class="benefit-item">
        <div class="icon-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" alt="icon" />
        </div>
        <div class="benefit-text">
          <p>Protegé tus compras con Super Respaldo Monge</p>
        </div>
      </div>


      <div class="benefit-item">
        <div class="icon-wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="icon" />
        </div>
        <div class="benefit-text">
          <p>Precios, promociones y cupones</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.benefits-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
}

.benefits-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #000;
}

.title-divider {
  width: 900px;
  height: 4px;
  background-color: #28b935;
  border: none;
  margin: 0 auto 50px auto;
  border-radius: 2px;
}



.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 40px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.icon-wrapper img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(53%) sepia(99%) saturate(446%) hue-rotate(82deg) brightness(96%) contrast(93%);
}

.benefit-text p {
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
}

.sub-text {
  font-weight: 600;
  margin-top: 4px;
}

@media (max-width: 992px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  .benefits-title {
    font-size: 24px;
  }
}
</style>
