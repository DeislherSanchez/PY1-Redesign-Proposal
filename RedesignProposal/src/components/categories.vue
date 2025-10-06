<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Estado para el drag scroll
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

// Categorías disponibles con sus iconos
const categories = [
  { id: 1, nombre: 'Celulares', icono: '/Categories/celulares.svg', ruta: 'Celulares' },
  { id: 2, nombre: 'Computadoras', icono: '/Categories/computadora.svg', ruta: 'Computadoras' },
  { id: 3, nombre: 'Laptops', icono: '/Categories/laptop.svg', ruta: 'Computadoras' },
  { id: 4, nombre: 'TV y Video', icono: '/Categories/tv.svg', ruta: 'TV y Video' },
  { id: 5, nombre: 'Electrodomésticos', icono: '/Categories/electrodomesticos.svg', ruta: 'Electrodomésticos' },
  { id: 6, nombre: 'Línea Blanca', icono: '/Categories/linea blanca.svg', ruta: 'Hogar' },
  { id: 7, nombre: 'Audio', icono: '/Categories/audio.svg', ruta: 'Audio' },
  { id: 8, nombre: 'Game Lab', icono: '/Categories/game lab.svg', ruta: 'Gaming' },
  { id: 9, nombre: 'Muebles', icono: '/Categories/muebles.svg', ruta: 'Muebles' },
  { id: 10, nombre: 'Camas', icono: '/Categories/camas.svg', ruta: 'Camas' },
  { id: 11, nombre: 'Deportes', icono: '/Categories/deportes.svg', ruta: 'Deportes' },
  { id: 12, nombre: 'Herramientas', icono: '/Categories/herramientas.svg', ruta: 'Herramientas' },
  { id: 13, nombre: 'Automotriz', icono: '/Categories/automotriz.svg', ruta: 'Automotriz' },
  { id: 14, nombre: 'Motos', icono: '/Categories/motos.svg', ruta: 'Motos' },
  { id: 15, nombre: 'Bebés', icono: '/Categories/bebes.svg', ruta: 'Bebés' },
  { id: 16, nombre: 'Belleza', icono: '/Categories/belleza.svg', ruta: 'Belleza' },
];

// Duplicar categorías para efecto infinito
const infiniteCategories = [...categories, ...categories, ...categories];

const startDragging = (e, carousel) => {
  isDragging.value = true;
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

  // Scroll infinito
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

const scroll = (direction) => {
  const container = document.querySelector('.categories-carousel');
  if (container) {
    const scrollAmount = 200;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;

    const firstSetWidth = container.scrollWidth / 3;
    setTimeout(() => {
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
    }, 300);
  }
};

const setupInfiniteScroll = (carousel) => {
  if (!carousel) return;
  const firstSetWidth = carousel.scrollWidth / 3;
  carousel.scrollLeft = firstSetWidth;
};

const goToCategory = (categoria) => {
  router.push({
    path: '/CatalogoProductos',
    query: { categoria: categoria }
  });
};

onMounted(() => {
  const carousel = document.querySelector('.categories-carousel');
  if (carousel) {
    carousel.style.cursor = 'grab';
    carousel.addEventListener('mousedown', (e) => startDragging(e, carousel));
    carousel.addEventListener('mouseleave', () => stopDragging(carousel));
    carousel.addEventListener('mouseup', () => stopDragging(carousel));
    carousel.addEventListener('mousemove', (e) => drag(e, carousel));
    carousel.addEventListener('dragstart', (e) => e.preventDefault());
    setTimeout(() => {
      setupInfiniteScroll(carousel);
    }, 100);
  }
});
</script>

<template>
  <div class="categories-container">
    <div class="categories-header">
      <h2 class="categories-title">Explora Nuestras Categorías</h2>
      <p class="categories-subtitle">Encuentra todo lo que necesitas en un solo lugar</p>
    </div>

    <div class="carousel-container">
      <button @click="scroll('left')" class="carousel-btn carousel-btn-left" aria-label="Anterior">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="carousel-wrapper">
        <div class="categories-carousel">
          <div 
            v-for="categoria in infiniteCategories" 
            :key="`${categoria.id}-${Math.random()}`"
            class="category-card"
            @click="goToCategory(categoria.ruta)"
          >
            <div class="category-icon">
              <img :src="categoria.icono" :alt="categoria.nombre" />
            </div>
            <p class="category-name">{{ categoria.nombre }}</p>
          </div>
        </div>
      </div>

      <button @click="scroll('right')" class="carousel-btn carousel-btn-right" aria-label="Siguiente">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

.categories-container {
  width: 100%;
  padding: 60px 20px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.categories-header {
  text-align: center;
  margin-bottom: 40px;
}

.categories-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
}

.categories-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

.carousel-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

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
  left: 0;
}

.carousel-btn-right {
  right: 0;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.categories-carousel {
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

.categories-carousel::-webkit-scrollbar {
  display: none;
}

.category-card {
  min-width: 160px;
  max-width: 160px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(40, 185, 53, 0.15);
  border-color: #28b935;
}

.category-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 50%;
  transition: all 0.3s ease;
  padding: 15px;
  box-sizing: border-box;
}

.category-card:hover .category-icon {
  background: linear-gradient(135deg, #d4edda 0%, #b8dabb 100%);
}

.category-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.category-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 0;
  line-height: 1.3;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-container {
    padding: 0 50px;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .categories-title {
    font-size: 2rem;
  }

  .categories-subtitle {
    font-size: 1rem;
  }

  .category-card {
    min-width: 130px;
    max-width: 130px;
    padding: 15px;
  }

  .category-icon {
    width: 60px;
    height: 60px;
  }

  .category-name {
    font-size: 0.85rem;
    min-height: 32px;
  }
}

@media (max-width: 480px) {
  .categories-container {
    padding: 40px 5px;
  }

  .carousel-btn {
    display: none;
  }

  .carousel-container {
    padding: 0;
  }

  .categories-carousel {
    padding: 15px 8px;
    gap: 12px;
  }

  .categories-title {
    font-size: 1.5rem;
  }

  .categories-subtitle {
    font-size: 0.9rem;
  }

  .category-card {
    min-width: 100px;
    max-width: 100px;
    padding: 12px;
    border-radius: 12px;
  }

  .category-icon {
    width: 50px;
    height: 50px;
    padding: 10px;
  }

  .category-name {
    font-size: 0.75rem;
    min-height: 28px;
  }
}
</style>
