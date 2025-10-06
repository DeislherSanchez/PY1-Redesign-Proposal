<script setup>
// --- Tu script se mantiene igual ---
import { ref, onMounted } from 'vue';

// Estado para el drag scroll
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const activeCarousel = ref(null);

// --- [TUS DATOS DE PRODUCTOS COMPLETOS] ---
const celularesOfertaBase = [
  { id: 1, nombre: 'iPhone 16', precio: 899000, precioDescuento: 799000, colores: ['#000000', '#FFFFFF', '#0000FF', '#FFB6C1', '#90EE90'], imagenCatalogo: '/Products/Celulares/iphone16.webp' },
  { id: 2, nombre: 'Samsung S25 Ultra', precio: 1299000, precioDescuento: 1199000, colores: ['#000000', '#808080', '#FFD700'], imagenCatalogo: '/Products/Celulares/SamS25ultra.webp' },
  { id: 3, nombre: 'iPhone 16 Pro', precio: 1199000, precioDescuento: 1099000, colores: ['#000000', '#FFFFFF', '#C0C0C0', '#DAA520'], imagenCatalogo: '/Products/Celulares/iphone16pro.webp' },
  { id: 4, nombre: 'Samsung Galaxy Z Flip 5', precio: 999000, precioDescuento: 899000, colores: ['#E6E6FA', '#FFB6C1', '#90EE90'], imagenCatalogo: '/Products/Celulares/SamZFlip5.webp' },
  { id: 5, nombre: 'Honor Magic V2', precio: 1499000, precioDescuento: 1349000, colores: ['#000000', '#FFFFFF'], imagenCatalogo: '/Products/Celulares/HonorMagicV2.webp' },
  { id: 6, nombre: 'Xiaomi Redmi Note 13 Pro', precio: 399000, precioDescuento: 349000, colores: ['#000000', '#FFFFFF', '#0000FF'], imagenCatalogo: '/Products/Celulares/RedmiNote13pro.webp' },
  { id: 7, nombre: 'Samsung S24 Ultra', precio: 1199000, precioDescuento: 1099000, colores: ['#000000', '#808080', '#800080'], imagenCatalogo: '/Products/Celulares/SamS24ultra.webp' },
  { id: 8, nombre: 'Honor Magic 7 Pro', precio: 999000, precioDescuento: 899000, colores: ['#000000', '#FFFFFF', '#0000FF'], imagenCatalogo: '/Products/Celulares/HonorMagic7pro.webp' }
];
const celularesOferta = [...celularesOfertaBase, ...celularesOfertaBase, ...celularesOfertaBase];

const computadorasOfertaBase = [
  { id: 9, nombre: 'HP Pavilion 15', precio: 450000, precioDescuento: 399000, imagenCatalogo: '/Products/Computadoras/HP15.webp' },
  { id: 10, nombre: 'Lenovo IdeaPad Slim 5', precio: 550000, precioDescuento: 499000, imagenCatalogo: '/Products/Computadoras/LenovoIdeaPadSlim5.webp' },
  { id: 11, nombre: 'HP OMEN 16', precio: 1200000, precioDescuento: 1099000, imagenCatalogo: '/Products/Computadoras/HPOMEN16.webp' },
  { id: 12, nombre: 'Dell Serie G15', precio: 950000, precioDescuento: 849000, imagenCatalogo: '/Products/Computadoras/DELLSerieG15.webp' },
  { id: 13, nombre: 'Lenovo LOQ 15', precio: 850000, precioDescuento: 799000, imagenCatalogo: '/Products/Computadoras/LenovoLOQ15.webp' },
  { id: 14, nombre: 'HP Victus 15', precio: 750000, precioDescuento: 699000, imagenCatalogo: '/Products/Computadoras/HPVictus15.webp' },
  { id: 15, nombre: 'Acer Aspire Lite 15', precio: 380000, precioDescuento: 349000, imagenCatalogo: '/Products/Computadoras/AcerAL15.webp' }
];
const computadorasOferta = [...computadorasOfertaBase, ...computadorasOfertaBase, ...computadorasOfertaBase];

const electrodomesticosOfertaBase = [
  { id: 16, nombre: 'Licuadora Oster 2L', precio: 45000, precioDescuento: 39900, imagenCatalogo: '/Products/Electrodomesticos/LicuadoraOster2L.webp' },
  { id: 17, nombre: 'Freidora de Aire Oster 6L', precio: 89000, precioDescuento: 79900, imagenCatalogo: '/Products/Electrodomesticos/FreidoraOster6L.webp' },
  { id: 18, nombre: 'Batidora KitchenAid', precio: 299000, precioDescuento: 269000, imagenCatalogo: '/Products/Electrodomesticos/BatidoraKitchenAid.webp' },
  { id: 19, nombre: 'Licuadora Ninja 72oz', precio: 120000, precioDescuento: 99900, imagenCatalogo: '/Products/Electrodomesticos/LicuadoraNinja72.webp' },
  { id: 20, nombre: 'Freidora Ninja 4.7L', precio: 150000, precioDescuento: 129900, imagenCatalogo: '/Products/Electrodomesticos/FreidoraNinja47L.webp' },
  { id: 21, nombre: 'Olla Arrocera Oster CKS', precio: 55000, precioDescuento: 49900, imagenCatalogo: '/Products/Electrodomesticos/OllaArroceraOsterCKS.webp' }
];
const electrodomesticosOferta = [...electrodomesticosOfertaBase, ...electrodomesticosOfertaBase, ...electrodomesticosOfertaBase];

const hogarOfertaBase = [
  { id: 22, nombre: 'Cocina Whirlpool 6 Quemadores', precio: 450000, precioDescuento: 399000, imagenCatalogo: '/Products/Hogar/CocinaWhirlpool6Q.webp' },
  { id: 23, nombre: 'Lavadora Whirlpool 20kg', precio: 550000, precioDescuento: 499000, imagenCatalogo: '/Products/Hogar/LabadoraWhirlpool20kg.webp' },
  { id: 24, nombre: 'Refrigeradora Samsung French Door', precio: 1200000, precioDescuento: 1099000, imagenCatalogo: '/Products/Hogar/RefrigeradoraSamFrechdoor.webp' },
  { id: 25, nombre: 'Cocina Mabe 6 Quemadores', precio: 380000, precioDescuento: 349000, imagenCatalogo: '/Products/Hogar/CocinaMAbe6Q.webp' },
  { id: 26, nombre: 'Lavadora Frigidaire 17kg', precio: 480000, precioDescuento: 429000, imagenCatalogo: '/Products/Hogar/LabadoraFrigidaire17kg.webp' },
  { id: 27, nombre: 'Refrigeradora Samsung Side by Side', precio: 1400000, precioDescuento: 1299000, imagenCatalogo: '/Products/Hogar/RefrigeradoraSamSidebyside.webp' }
];
const hogarOferta = [...hogarOfertaBase, ...hogarOfertaBase, ...hogarOfertaBase];

const tvOfertaBase = [
  { id: 28, nombre: 'Samsung QLED 55"', precio: 650000, precioDescuento: 599000, imagenCatalogo: '/Products/TV/SamTizenQLED55.webp' },
  { id: 29, nombre: 'LG OLED 77" 4K', precio: 2500000, precioDescuento: 2299000, imagenCatalogo: '/Products/TV/LGOLED774K.webp' },
  { id: 30, nombre: 'Samsung QLED 75"', precio: 1200000, precioDescuento: 1099000, imagenCatalogo: '/Products/TV/SamTizenQLED75.webp' },
  { id: 31, nombre: 'LG 24" LED 86" 4K UHD', precio: 1800000, precioDescuento: 1649000, imagenCatalogo: '/Products/TV/LG24LED864KUHD.webp' },
  { id: 32, nombre: 'TCL 55" V6C LED 4K', precio: 450000, precioDescuento: 399000, imagenCatalogo: '/Products/TV/TCL55V6CLED554K.webp' },
  { id: 33, nombre: 'Samsung QLED 85"', precio: 2200000, precioDescuento: 1999000, imagenCatalogo: '/Products/TV/SamTizenQLED85.webp' },
  { id: 34, nombre: 'LG 42" 4K UHD OLED Flex', precio: 1500000, precioDescuento: 1349000, imagenCatalogo: '/Products/TV/LG424KUHDOLEDFLEX.webp' }
];
const tvOferta = [...tvOfertaBase, ...tvOfertaBase, ...tvOfertaBase];


const startDragging = (e, carousel) => {
  isDragging.value = true;
  activeCarousel.value = carousel;
  startX.value = e.pageX - carousel.offsetLeft;
  scrollLeft.value = carousel.scrollLeft;
  carousel.style.cursor = 'grabbing';
  carousel.style.scrollBehavior = 'auto';
};

const stopDragging = (carousel) => {
  isDragging.value = false;
  if (carousel) {
    carousel.style.cursor = 'grab';
    carousel.style.scrollBehavior = 'smooth';
  }
};

const drag = (e, carousel) => {
  if (!isDragging.value || !carousel) return;
  e.preventDefault();

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX.value) * 2;
  carousel.scrollLeft = scrollLeft.value - walk;

  const firstSetWidth = carousel.scrollWidth / 3;
  const currentScroll = carousel.scrollLeft;

  if (currentScroll >= firstSetWidth * 2) {
    const newScrollLeft = currentScroll - firstSetWidth;
    carousel.scrollLeft = newScrollLeft;
    scrollLeft.value = newScrollLeft;
    startX.value = e.pageX - carousel.offsetLeft;
  }

  if (currentScroll <= firstSetWidth) {
    const newScrollLeft = currentScroll + firstSetWidth;
    carousel.scrollLeft = newScrollLeft;
    scrollLeft.value = newScrollLeft;
    startX.value = e.pageX - carousel.offsetLeft;
  }
};

const scroll = (category, direction) => {
  const container = document.querySelector(`.carousel-${category}`);
  if (container) {
    const scrollAmount = 320;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;

    const firstSetWidth = container.scrollWidth / 3;
    setTimeout(() => {
      // Ajuste para que el salto sea más preciso con los botones
      if (container.scrollLeft >= (firstSetWidth * 2) - container.clientWidth) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft -= firstSetWidth;
        container.style.scrollBehavior = 'smooth';
      }
      if (container.scrollLeft <= firstSetWidth) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft += firstSetWidth;
        container.style.scrollBehavior = 'smooth';
      }
    }, 500);
  }
};

const setupInfiniteScroll = (carousel) => {
  if (!carousel) return;
  const firstSetWidth = carousel.scrollWidth / 3;
  carousel.scrollLeft = firstSetWidth;
};

onMounted(() => {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    carousel.style.cursor = 'grab';
    carousel.addEventListener('mousedown', (e) => startDragging(e, carousel));
    carousel.addEventListener('mouseleave', () => stopDragging(carousel));
    carousel.addEventListener('mouseup', () => stopDragging(carousel));
    carousel.addEventListener('mousemove', (e) => drag(e, carousel));
    carousel.addEventListener('dragstart', (e) => e.preventDefault());
    setTimeout(() => {
      setupInfiniteScroll(carousel);
    }, 100);
  });
});

const formatPrice = (price) => {
  return '₡' + price.toLocaleString('es-CR');
};

const calcularDescuento = (precio, precioDescuento) => {
  return Math.round(((precio - precioDescuento) / precio) * 100);
};
</script>

<template>
  <div class="catalog-container">
    <h1 class="catalog-title">Ofertas Especiales</h1>
    <p class="catalog-subtitle">Descubre nuestras mejores ofertas en todas las categorías</p>

    <!-- Carrusel de Celulares -->
    <section class="carousel-section">
      <div class="section-header">
        <h2 class="section-title">Celulares en Oferta</h2>
      </div>
      <div class="carousel-container">
        <button @click="scroll('celulares', 'left')" class="carousel-btn carousel-btn-left" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel carousel-celulares">
            <div v-for="(producto, index) in celularesOferta" :key="`cel-${producto.id}-${index}`" class="product-card">
              <div class="discount-badge">-{{ calcularDescuento(producto.precio, producto.precioDescuento) }}%</div>
              <div class="product-image"><img :src="producto.imagenCatalogo" :alt="producto.nombre" /></div>
              <div class="product-info">
                <h3 class="product-name">{{ producto.nombre }}</h3>
                <div class="product-colors"><span v-for="color in producto.colores" :key="color" class="color-dot" :style="{ backgroundColor: color }"></span></div>
                <div class="product-pricing">
                  <span class="original-price">{{ formatPrice(producto.precio) }}</span>
                  <span class="discount-price">{{ formatPrice(producto.precioDescuento) }}</span>
                </div>
                <button class="add-to-cart-btn">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
        <button @click="scroll('celulares', 'right')" class="carousel-btn carousel-btn-right" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>

    <!-- Carrusel de Computadoras -->
    <section class="carousel-section">
      <div class="section-header">
        <h2 class="section-title">Computadoras en Oferta</h2>
      </div>
      <div class="carousel-container">
        <button @click="scroll('computadoras', 'left')" class="carousel-btn carousel-btn-left" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel carousel-computadoras">
            <div v-for="(producto, index) in computadorasOferta" :key="`comp-${producto.id}-${index}`" class="product-card">
              <div class="discount-badge">-{{ calcularDescuento(producto.precio, producto.precioDescuento) }}%</div>
              <div class="product-image"><img :src="producto.imagenCatalogo" :alt="producto.nombre" /></div>
              <div class="product-info">
                <h3 class="product-name">{{ producto.nombre }}</h3>
                <div class="product-colors" v-if="producto.colores"><span v-for="color in producto.colores" :key="color" class="color-dot" :style="{ backgroundColor: color }"></span></div>
                <div class="product-pricing">
                  <span class="original-price">{{ formatPrice(producto.precio) }}</span>
                  <span class="discount-price">{{ formatPrice(producto.precioDescuento) }}</span>
                </div>
                <button class="add-to-cart-btn">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
        <button @click="scroll('computadoras', 'right')" class="carousel-btn carousel-btn-right" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>

    <!-- Carrusel de Electrodomésticos -->
    <section class="carousel-section">
      <div class="section-header">
        <h2 class="section-title">Electrodomésticos en Oferta</h2>
      </div>
      <div class="carousel-container">
        <button @click="scroll('electrodomesticos', 'left')" class="carousel-btn carousel-btn-left" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel carousel-electrodomesticos">
            <div v-for="(producto, index) in electrodomesticosOferta" :key="`elect-${producto.id}-${index}`" class="product-card">
              <div class="discount-badge">-{{ calcularDescuento(producto.precio, producto.precioDescuento) }}%</div>
              <div class="product-image"><img :src="producto.imagenCatalogo" :alt="producto.nombre" /></div>
              <div class="product-info">
                <h3 class="product-name">{{ producto.nombre }}</h3>
                <div class="product-colors" v-if="producto.colores"><span v-for="color in producto.colores" :key="color" class="color-dot" :style="{ backgroundColor: color }"></span></div>
                <div class="product-pricing">
                  <span class="original-price">{{ formatPrice(producto.precio) }}</span>
                  <span class="discount-price">{{ formatPrice(producto.precioDescuento) }}</span>
                </div>
                <button class="add-to-cart-btn">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
        <button @click="scroll('electrodomesticos', 'right')" class="carousel-btn carousel-btn-right" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>

    <!-- Carrusel de Hogar -->
    <section class="carousel-section" v-if="hogarOferta.length > 0">
      <div class="section-header">
        <h2 class="section-title">Hogar en Oferta</h2>
      </div>
      <div class="carousel-container">
        <button @click="scroll('hogar', 'left')" class="carousel-btn carousel-btn-left" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel carousel-hogar">
            <div v-for="(producto, index) in hogarOferta" :key="`hog-${producto.id}-${index}`" class="product-card">
              <div class="discount-badge">-{{ calcularDescuento(producto.precio, producto.precioDescuento) }}%</div>
              <div class="product-image"><img :src="producto.imagenCatalogo" :alt="producto.nombre" /></div>
              <div class="product-info">
                <h3 class="product-name">{{ producto.nombre }}</h3>
                <div class="product-colors" v-if="producto.colores"><span v-for="color in producto.colores" :key="color" class="color-dot" :style="{ backgroundColor: color }"></span></div>
                <div class="product-pricing">
                  <span class="original-price">{{ formatPrice(producto.precio) }}</span>
                  <span class="discount-price">{{ formatPrice(producto.precioDescuento) }}</span>
                </div>
                <button class="add-to-cart-btn">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
        <button @click="scroll('hogar', 'right')" class="carousel-btn carousel-btn-right" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>

    <!-- Carrusel de TV -->
    <section class="carousel-section" v-if="tvOferta.length > 0">
      <div class="section-header">
        <h2 class="section-title">TV en Oferta</h2>
      </div>
      <div class="carousel-container">
        <button @click="scroll('tv', 'left')" class="carousel-btn carousel-btn-left" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel carousel-tv">
            <div v-for="(producto, index) in tvOferta" :key="`tv-${producto.id}-${index}`" class="product-card">
              <div class="discount-badge">-{{ calcularDescuento(producto.precio, producto.precioDescuento) }}%</div>
              <div class="product-image"><img :src="producto.imagenCatalogo" :alt="producto.nombre" /></div>
              <div class="product-info">
                <h3 class="product-name">{{ producto.nombre }}</h3>
                <div class="product-colors" v-if="producto.colores"><span v-for="color in producto.colores" :key="color" class="color-dot" :style="{ backgroundColor: color }"></span></div>
                <div class="product-pricing">
                  <span class="original-price">{{ formatPrice(producto.precio) }}</span>
                  <span class="discount-price">{{ formatPrice(producto.precioDescuento) }}</span>
                </div>
                <button class="add-to-cart-btn">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
        <button @click="scroll('tv', 'right')" class="carousel-btn carousel-btn-right" aria-label="Siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

.catalog-container {
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.catalog-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.catalog-subtitle {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 50px;
}

.carousel-section {
  margin-bottom: 60px; /* Espacio para la versión de escritorio */
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* Contenedor principal del carrusel y botones */
.carousel-container {
  position: relative;
  /* Espacio extra a los lados para que los botones no se salgan del contenedor principal en pantallas muy angostas */
  padding: 0 30px;
}

/* Botones de navegación */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #28b935;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.carousel-btn:hover {
  background-color: #1e7e34;
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-btn-left {
  left: 0; /* Posiciona el botón izquierdo pegado al borde del .carousel-container */
}

.carousel-btn-right {
  right: 0; /* Posiciona el botón derecho pegado al borde del .carousel-container */
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.product-card {
  min-width: 300px;
  max-width: 300px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 28px rgba(40, 185, 53, 0.15);
  border-color: #28b935;
}

.discount-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 10px 16px;
  border-radius: 25px;
  font-weight: 800;
  font-size: 0.95rem;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
  letter-spacing: 0.5px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.product-image {
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;
  box-sizing: border-box;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  min-height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-colors {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  min-height: 20px;
}

.color-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.color-dot:hover {
  transform: scale(1.3);
  border-color: #28b935;
  box-shadow: 0 4px 12px rgba(40, 185, 53, 0.3);
  z-index: 5;
}

.color-dot:active {
  transform: scale(1.15);
}

.product-pricing {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
}

.original-price {
  font-size: 0.95rem;
  color: #999;
  text-decoration: line-through;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #28b935;
}

.add-to-cart-btn {
  width: 100%;
  padding: 12px;
  background-color: #28b935;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-family: 'Open Sans', sans-serif;
}

.add-to-cart-btn:hover {
  background-color: #1e7e34;
  transform: translateY(-2px);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-container { padding: 0 20px; }
  .carousel-btn-left { left: -10px; }
  .carousel-btn-right { right: -10px; }
  .carousel-btn { width: 40px; height: 40px; }
  .catalog-title { font-size: 2rem; }
  .section-title { font-size: 1.4rem; }
  .section-header { flex-direction: column; gap: 15px; align-items: flex-start; }
  .product-card { min-width: 220px; max-width: 220px; }
  .product-image { height: 200px; }
  
  /* --- SOLUCIÓN AÑADIDA --- */
  .carousel-section {
    margin-bottom: 30px; /* Reduce el espacio entre carruseles en móviles */
  }
}

@media (max-width: 480px) {
  .carousel-btn { display: none; }
  .carousel-container { padding: 0; }
  .carousel { 
    padding: 15px 8px; 
    gap: 8px;
  }
  .catalog-container { padding: 20px 5px; }
  .catalog-title { font-size: 1.5rem; }
  .catalog-subtitle { font-size: 0.9rem; }
  .section-title { font-size: 1.1rem; }
  .section-header { padding: 0 8px; }
  .product-card { 
    min-width: 115px;
    max-width: 115px;
    border-radius: 10px;
  }
  .product-image { 
    height: 90px;
    padding: 6px;
  }
  .product-info {
    padding: 6px;
  }
  .product-name { 
    font-size: 0.65rem; 
    min-height: 26px;
    margin-bottom: 5px;
    line-height: 1.15;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .product-colors {
    margin-bottom: 5px;
    gap: 3px;
    min-height: 14px;
  }
  .color-dot {
    width: 12px;
    height: 12px;
    border: 1.5px solid #e0e0e0;
  }
  .discount-badge {
    padding: 4px 7px;
    font-size: 0.6rem;
    top: 5px;
    right: 5px;
    border-radius: 10px;
  }
  .product-pricing {
    gap: 1px;
    margin-bottom: 5px;
  }
  .original-price {
    font-size: 0.6rem;
  }
  .discount-price { 
    font-size: 0.85rem;
    font-weight: 700;
  }
  .add-to-cart-btn {
    padding: 5px;
    font-size: 0.65rem;
    border-radius: 5px;
  }
}
</style>