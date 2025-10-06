<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/header.vue';
import Benefits from '@/components/benefits.vue';
import Footer from '@/components/footer.vue';

const route = useRoute();

// Estado de filtros
const selectedCategory = ref('');
const selectedBrand = ref([]);
const priceRange = ref([0, 5000000]);
const selectedColors = ref([]);
const inStock = ref(false);
const onSale = ref(false);
const sortBy = ref('relevancia');

// Estado de paginación
const currentPage = ref(1);
const productsPerPage = ref(20);

// Filtros laterales abiertos/cerrados
const openFilters = ref({
  category: true,
  brand: true,
  price: true,
  colors: false,
  availability: false
});

// Estado del menú de filtros en móvil
const isMobileFiltersOpen = ref(false);

const toggleMobileFilters = () => {
  isMobileFiltersOpen.value = !isMobileFiltersOpen.value;
};

const closeMobileFilters = () => {
  isMobileFiltersOpen.value = false;
};

// Datos de productos (esto vendría de tu store o API)
const allProducts = ref([
  // Celulares
  { id: 1, nombre: 'iPhone 16', categoria: 'Celulares', marca: 'Apple', precio: 899000, precioDescuento: 799000, colores: ['#000000', '#FFFFFF', '#0000FF', '#FFB6C1', '#90EE90'], imagenCatalogo: '/Products/Celulares/iphone16.webp', stock: true },
  { id: 2, nombre: 'Samsung S25 Ultra', categoria: 'Celulares', marca: 'Samsung', precio: 1299000, precioDescuento: 1199000, colores: ['#000000', '#808080', '#FFD700'], imagenCatalogo: '/Products/Celulares/SamS25ultra.webp', stock: true },
  { id: 3, nombre: 'iPhone 16 Pro', categoria: 'Celulares', marca: 'Apple', precio: 1199000, precioDescuento: 1099000, colores: ['#000000', '#FFFFFF', '#C0C0C0', '#DAA520'], imagenCatalogo: '/Products/Celulares/iphone16pro.webp', stock: true },
  { id: 4, nombre: 'Samsung Galaxy Z Flip 5', categoria: 'Celulares', marca: 'Samsung', precio: 999000, precioDescuento: 899000, colores: ['#E6E6FA', '#FFB6C1', '#90EE90'], imagenCatalogo: '/Products/Celulares/SamZFlip5.webp', stock: true },
  { id: 5, nombre: 'Honor Magic V2', categoria: 'Celulares', marca: 'HONOR', precio: 1499000, precioDescuento: 1349000, colores: ['#000000', '#FFFFFF'], imagenCatalogo: '/Products/Celulares/HonorMagicV2.webp', stock: true },
  { id: 6, nombre: 'Xiaomi Redmi Note 13 Pro', categoria: 'Celulares', marca: 'Xiaomi', precio: 399000, precioDescuento: 349000, colores: ['#000000', '#FFFFFF', '#0000FF'], imagenCatalogo: '/Products/Celulares/RedmiNote13pro.webp', stock: true },
  { id: 7, nombre: 'Samsung S24 Ultra', categoria: 'Celulares', marca: 'Samsung', precio: 1199000, precioDescuento: 1099000, colores: ['#000000', '#808080', '#800080'], imagenCatalogo: '/Products/Celulares/SamS24ultra.webp', stock: true },
  { id: 8, nombre: 'Honor Magic 7 Pro', categoria: 'Celulares', marca: 'HONOR', precio: 999000, precioDescuento: 899000, colores: ['#000000', '#FFFFFF', '#0000FF'], imagenCatalogo: '/Products/Celulares/HonorMagic7pro.webp', stock: true },
  
  // Computadoras
  { id: 9, nombre: 'HP Pavilion 15', categoria: 'Computadoras', marca: 'HP', precio: 450000, precioDescuento: 399000, imagenCatalogo: '/Products/Computadoras/HP15.webp', stock: true },
  { id: 10, nombre: 'Lenovo IdeaPad Slim 5', categoria: 'Computadoras', marca: 'Lenovo', precio: 550000, precioDescuento: 499000, imagenCatalogo: '/Products/Computadoras/LenovoIdeaPadSlim5.webp', stock: true },
  { id: 11, nombre: 'HP OMEN 16', categoria: 'Computadoras', marca: 'HP', precio: 1200000, precioDescuento: 1099000, imagenCatalogo: '/Products/Computadoras/HPOMEN16.webp', stock: true },
  { id: 12, nombre: 'Dell Serie G15', categoria: 'Computadoras', marca: 'Dell', precio: 950000, precioDescuento: 849000, imagenCatalogo: '/Products/Computadoras/DELLSerieG15.webp', stock: true },
  { id: 13, nombre: 'Lenovo LOQ 15', categoria: 'Computadoras', marca: 'Lenovo', precio: 850000, precioDescuento: 799000, imagenCatalogo: '/Products/Computadoras/LenovoLOQ15.webp', stock: true },
  { id: 14, nombre: 'HP Victus 15', categoria: 'Computadoras', marca: 'HP', precio: 750000, precioDescuento: 699000, imagenCatalogo: '/Products/Computadoras/HPVictus15.webp', stock: true },
  { id: 15, nombre: 'Acer Aspire Lite 15', categoria: 'Computadoras', marca: 'Acer', precio: 380000, precioDescuento: 349000, imagenCatalogo: '/Products/Computadoras/AcerAL15.webp', stock: true },
  
  // Electrodomésticos
  { id: 16, nombre: 'Licuadora Oster 2L', categoria: 'Electrodomésticos', marca: 'Oster', precio: 45000, precioDescuento: 39900, imagenCatalogo: '/Products/Electrodomesticos/LicuadoraOster2L.webp', stock: true },
  { id: 17, nombre: 'Freidora de Aire Oster 6L', categoria: 'Electrodomésticos', marca: 'Oster', precio: 89000, precioDescuento: 79900, imagenCatalogo: '/Products/Electrodomesticos/FreidoraOster6L.webp', stock: true },
  { id: 18, nombre: 'Batidora KitchenAid', categoria: 'Electrodomésticos', marca: 'KitchenAid', precio: 299000, precioDescuento: 269000, imagenCatalogo: '/Products/Electrodomesticos/BatidoraKitchenAid.webp', stock: true },
  { id: 19, nombre: 'Licuadora Ninja 72oz', categoria: 'Electrodomésticos', marca: 'Ninja', precio: 120000, precioDescuento: 99900, imagenCatalogo: '/Products/Electrodomesticos/LicuadoraNinja72.webp', stock: true },
  { id: 20, nombre: 'Freidora Ninja 4.7L', categoria: 'Electrodomésticos', marca: 'Ninja', precio: 150000, precioDescuento: 129900, imagenCatalogo: '/Products/Electrodomesticos/FreidoraNinja47L.webp', stock: true },
  { id: 21, nombre: 'Olla Arrocera Oster CKS', categoria: 'Electrodomésticos', marca: 'Oster', precio: 55000, precioDescuento: 49900, imagenCatalogo: '/Products/Electrodomesticos/OllaArroceraOsterCKS.webp', stock: true },
  
  // TV
  { id: 28, nombre: 'Samsung QLED 55"', categoria: 'TV y Video', marca: 'Samsung', precio: 650000, precioDescuento: 599000, imagenCatalogo: '/Products/TV/SamTizenQLED55.webp', stock: true },
  { id: 29, nombre: 'LG OLED 77" 4K', categoria: 'TV y Video', marca: 'LG', precio: 2500000, precioDescuento: 2299000, imagenCatalogo: '/Products/TV/LGOLED774K.webp', stock: true },
  { id: 30, nombre: 'Samsung QLED 75"', categoria: 'TV y Video', marca: 'Samsung', precio: 1200000, precioDescuento: 1099000, imagenCatalogo: '/Products/TV/SamTizenQLED75.webp', stock: true },
  { id: 31, nombre: 'LG 24" LED 86" 4K UHD', categoria: 'TV y Video', marca: 'LG', precio: 1800000, precioDescuento: 1649000, imagenCatalogo: '/Products/TV/LG24LED864KUHD.webp', stock: true },
  { id: 32, nombre: 'TCL 55" V6C LED 4K', categoria: 'TV y Video', marca: 'TCL', precio: 450000, precioDescuento: 399000, imagenCatalogo: '/Products/TV/TCL55V6CLED554K.webp', stock: true },
  { id: 33, nombre: 'Samsung QLED 85"', categoria: 'TV y Video', marca: 'Samsung', precio: 2200000, precioDescuento: 1999000, imagenCatalogo: '/Products/TV/SamTizenQLED85.webp', stock: true },
  { id: 34, nombre: 'LG 42" 4K UHD OLED Flex', categoria: 'TV y Video', marca: 'LG', precio: 1500000, precioDescuento: 1349000, imagenCatalogo: '/Products/TV/LG424KUHDOLEDFLEX.webp', stock: true },
]);

// Obtener categorías y marcas únicas
const categories = computed(() => {
  return [...new Set(allProducts.value.map(p => p.categoria))];
});

// Obtener precio máximo de la categoría seleccionada o todos los productos
const maxCategoryPrice = computed(() => {
  const products = selectedCategory.value 
    ? allProducts.value.filter(p => p.categoria === selectedCategory.value)
    : allProducts.value;
  
  if (products.length === 0) return 5000000;
  
  return Math.max(...products.map(p => p.precioDescuento || p.precio));
});

const brands = computed(() => {
  const filteredProducts = selectedCategory.value 
    ? allProducts.value.filter(p => p.categoria === selectedCategory.value)
    : allProducts.value;
  return [...new Set(filteredProducts.map(p => p.marca))].sort();
});

// Productos filtrados
const filteredProducts = computed(() => {
  let products = [...allProducts.value];
  
  // Filtrar por categoría
  if (selectedCategory.value) {
    products = products.filter(p => p.categoria === selectedCategory.value);
  }
  
  // Filtrar por marca
  if (selectedBrand.value.length > 0) {
    products = products.filter(p => selectedBrand.value.includes(p.marca));
  }
  
  // Filtrar por rango de precio
  products = products.filter(p => {
    const precio = p.precioDescuento || p.precio;
    return precio >= priceRange.value[0] && precio <= priceRange.value[1];
  });
  
  // Filtrar por colores
  if (selectedColors.value.length > 0 && selectedCategory.value === 'Celulares') {
    products = products.filter(p => 
      p.colores && p.colores.some(c => selectedColors.value.includes(c))
    );
  }
  
  // Filtrar por disponibilidad
  if (inStock.value) {
    products = products.filter(p => p.stock);
  }
  
  // Filtrar por oferta
  if (onSale.value) {
    products = products.filter(p => p.precioDescuento && p.precioDescuento < p.precio);
  }
  
  // Ordenar
  switch (sortBy.value) {
    case 'precio-asc':
      products.sort((a, b) => (a.precioDescuento || a.precio) - (b.precioDescuento || b.precio));
      break;
    case 'precio-desc':
      products.sort((a, b) => (b.precioDescuento || b.precio) - (a.precioDescuento || a.precio));
      break;
    case 'nombre':
      products.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case 'descuento':
      products.sort((a, b) => {
        const discountA = a.precioDescuento ? ((a.precio - a.precioDescuento) / a.precio) * 100 : 0;
        const discountB = b.precioDescuento ? ((b.precio - b.precioDescuento) / b.precio) * 100 : 0;
        return discountB - discountA;
      });
      break;
  }
  
  return products;
});

// Productos paginados
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage.value;
  const end = start + productsPerPage.value;
  return filteredProducts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / productsPerPage.value);
});

// Funciones
const toggleFilter = (filterName) => {
  openFilters.value[filterName] = !openFilters.value[filterName];
};

const toggleBrand = (brand) => {
  const index = selectedBrand.value.indexOf(brand);
  if (index > -1) {
    selectedBrand.value.splice(index, 1);
  } else {
    selectedBrand.value.push(brand);
  }
};

const toggleColor = (color) => {
  const index = selectedColors.value.indexOf(color);
  if (index > -1) {
    selectedColors.value.splice(index, 1);
  } else {
    selectedColors.value.push(color);
  }
};

const clearFilters = () => {
  selectedCategory.value = '';
  selectedBrand.value = [];
  priceRange.value = [0, 5000000];
  selectedColors.value = [];
  inStock.value = false;
  onSale.value = false;
  currentPage.value = 1;
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll al inicio del área de productos
    setTimeout(() => {
      const productsMain = document.querySelector('.products-main');
      if (productsMain) {
        productsMain.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }
};

const formatPrice = (price) => {
  return '₡' + price.toLocaleString('es-CR');
};

const calcularDescuento = (precio, precioDescuento) => {
  return Math.round(((precio - precioDescuento) / precio) * 100);
};

// Colores disponibles para celulares
const availableColors = [
  { hex: '#000000', name: 'Negro' },
  { hex: '#FFFFFF', name: 'Blanco' },
  { hex: '#0000FF', name: 'Azul' },
  { hex: '#FFB6C1', name: 'Rosa' },
  { hex: '#90EE90', name: 'Verde' },
  { hex: '#808080', name: 'Gris' },
  { hex: '#FFD700', name: 'Dorado' },
  { hex: '#C0C0C0', name: 'Plateado' },
  { hex: '#800080', name: 'Morado' },
];

// Observar cambios en la categoría seleccionada para ajustar el rango de precio
watch(selectedCategory, (newCategory, oldCategory) => {
  // Solo limpiar si realmente cambió la categoría (no en la carga inicial)
  if (oldCategory !== undefined && oldCategory !== newCategory) {
    // Limpiar marcas que no existen en la nueva categoría
    const availableBrands = brands.value;
    selectedBrand.value = selectedBrand.value.filter(brand => availableBrands.includes(brand));
    
    // Limpiar colores seleccionados si la nueva categoría no es Celulares
    if (newCategory !== 'Celulares') {
      selectedColors.value = [];
    }
    
    // Resetear página a 1
    currentPage.value = 1;
  }
  
  // Ajustar el precio máximo del rango cuando cambia la categoría
  priceRange.value[1] = maxCategoryPrice.value;
  
  // Si el precio mínimo es mayor que el máximo, ajustarlo
  if (priceRange.value[0] > maxCategoryPrice.value) {
    priceRange.value[0] = 0;
  }
});

onMounted(() => {
  // Leer parámetros de URL si vienen del header
  if (route.query.categoria) {
    selectedCategory.value = route.query.categoria;
  }
  if (route.query.marca) {
    // Si viene una marca, agregarla al filtro
    const marca = route.query.marca;
    if (marca && !selectedBrand.value.includes(marca)) {
      selectedBrand.value.push(marca);
    }
  }
  // Establecer el rango de precio inicial
  priceRange.value[1] = maxCategoryPrice.value;
});
</script>

<template>
  <div class="page-container">
    <Header />
    
    <main class="content-wrapper">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/">Inicio</router-link>
        <span class="separator">›</span>
        <span v-if="selectedCategory">{{ selectedCategory }}</span>
        <span v-else>Catálogo</span>
      </div>

      <!-- Botón de filtros para móvil (estilo hamburguesa) -->
      <div class="mobile-filters-container">
        <button class="mobile-filters-toggle" @click="toggleMobileFilters">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <span>Filtros</span>
        </button>
      </div>
      
      <!-- Overlay para cerrar filtros en móvil -->
      <div class="mobile-filters-overlay" :class="{ active: isMobileFiltersOpen }" @click="closeMobileFilters"></div>

      <div class="catalog-container">
      <!-- Sidebar de Filtros -->
      <aside class="filters-sidebar" :class="{ 'mobile-open': isMobileFiltersOpen }">
        <div class="filters-header">
          <h2>Filtros</h2>
          <div class="filters-header-actions">
            <button @click="clearFilters" class="clear-filters">Limpiar</button>
            <button @click="closeMobileFilters" class="close-mobile-filters">✕</button>
          </div>
        </div>

        <!-- Filtro por Categoría -->
        <div class="filter-section">
          <div class="filter-title" @click="toggleFilter('category')">
            <span>Categoría</span>
            <span class="arrow" :class="{ open: openFilters.category }">▼</span>
          </div>
          <div v-show="openFilters.category" class="filter-content">
            <label v-for="cat in categories" :key="cat" class="filter-option">
              <input type="radio" :value="cat" v-model="selectedCategory" />
              <span>{{ cat }}</span>
            </label>
          </div>
        </div>

        <!-- Filtro por Marca -->
        <div class="filter-section" v-if="brands.length > 0">
          <div class="filter-title" @click="toggleFilter('brand')">
            <span>Marca</span>
            <span class="arrow" :class="{ open: openFilters.brand }">▼</span>
          </div>
          <div v-show="openFilters.brand" class="filter-content">
            <label v-for="brand in brands" :key="brand" class="filter-option">
              <input type="checkbox" :value="brand" @change="toggleBrand(brand)" :checked="selectedBrand.includes(brand)" />
              <span>{{ brand }}</span>
            </label>
          </div>
        </div>

        <!-- Filtro por Precio -->
        <div class="filter-section">
          <div class="filter-title" @click="toggleFilter('price')">
            <span>Rango de Precio</span>
            <span class="arrow" :class="{ open: openFilters.price }">▼</span>
          </div>
          <div v-show="openFilters.price" class="filter-content">
            <div class="price-range">
              <input type="number" v-model.number="priceRange[0]" placeholder="Mínimo" class="price-input" min="0" />
              <span>-</span>
              <input type="number" v-model.number="priceRange[1]" placeholder="Máximo" class="price-input" :max="maxCategoryPrice" />
            </div>
            <div class="price-info">
              <small>Máximo: {{ formatPrice(maxCategoryPrice) }}</small>
            </div>
          </div>
        </div>

        <!-- Filtro por Colores (solo para celulares) -->
        <div class="filter-section" v-if="selectedCategory === 'Celulares'">
          <div class="filter-title" @click="toggleFilter('colors')">
            <span>Color</span>
            <span class="arrow" :class="{ open: openFilters.colors }">▼</span>
          </div>
          <div v-show="openFilters.colors" class="filter-content">
            <div class="color-filters">
              <div v-for="color in availableColors" :key="color.hex" 
                   class="color-filter-option" 
                   :class="{ selected: selectedColors.includes(color.hex) }"
                   @click="toggleColor(color.hex)">
                <div class="color-circle" :style="{ backgroundColor: color.hex }"></div>
                <span class="color-name">{{ color.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Filtro por Disponibilidad -->
        <div class="filter-section">
          <div class="filter-title" @click="toggleFilter('availability')">
            <span>Disponibilidad</span>
            <span class="arrow" :class="{ open: openFilters.availability }">▼</span>
          </div>
          <div v-show="openFilters.availability" class="filter-content">
            <label class="filter-option">
              <input type="checkbox" v-model="inStock" />
              <span>En stock</span>
            </label>
            <label class="filter-option">
              <input type="checkbox" v-model="onSale" />
              <span>En oferta</span>
            </label>
          </div>
        </div>
      </aside>

      <!-- Área principal de productos -->
      <main class="products-main">
        <!-- Header con ordenamiento -->
        <div class="products-header">
          <h1 class="category-title">
            {{ selectedCategory || 'Todos los Productos' }}
            <span class="product-count">({{ filteredProducts.length }} productos)</span>
          </h1>
          <div class="sort-section">
            <label for="sort">Ordenar por:</label>
            <select id="sort" v-model="sortBy" class="sort-select">
              <option value="relevancia">Relevancia</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="nombre">Nombre A-Z</option>
              <option value="descuento">Mayor Descuento</option>
            </select>
          </div>
        </div>

        <!-- Grid de productos -->
        <div class="products-grid" v-if="paginatedProducts.length > 0">
          <div v-for="producto in paginatedProducts" :key="producto.id" class="product-card">
            <div v-if="producto.precioDescuento" class="discount-badge">
              -{{ calcularDescuento(producto.precio, producto.precioDescuento) }}%
            </div>
            <div class="product-image">
              <img :src="producto.imagenCatalogo" :alt="producto.nombre" />
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ producto.nombre }}</h3>
              <div class="product-brand">{{ producto.marca }}</div>
              <div class="product-colors" v-if="producto.colores">
                <span v-for="color in producto.colores.slice(0, 5)" :key="color" 
                      class="color-dot" 
                      :style="{ backgroundColor: color }"></span>
              </div>
              <div class="product-pricing">
                <span v-if="producto.precioDescuento" class="original-price">
                  {{ formatPrice(producto.precio) }}
                </span>
                <span class="discount-price">
                  {{ formatPrice(producto.precioDescuento || producto.precio) }}
                </span>
              </div>
              <button class="add-to-cart-btn">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>

        <!-- Mensaje sin resultados -->
        <div v-else class="no-results">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>No se encontraron productos</h3>
          <p>Intenta ajustar los filtros para ver más resultados</p>
          <button @click="clearFilters" class="clear-filters-btn">Limpiar Filtros</button>
        </div>

        <!-- Paginación -->
        <div class="pagination" v-if="totalPages > 1">
          <button @click="goToPage(currentPage - 1)" 
                  :disabled="currentPage === 1" 
                  class="pagination-btn">
            ‹ Anterior
          </button>
          
          <div class="pagination-numbers">
            <button v-for="page in totalPages" 
                    :key="page"
                    @click="goToPage(page)"
                    class="pagination-number"
                    :class="{ active: page === currentPage }">
              {{ page }}
            </button>
          </div>
          
          <button @click="goToPage(currentPage + 1)" 
                  :disabled="currentPage === totalPages" 
                  class="pagination-btn">
            Siguiente ›
          </button>
        </div>
      </main>
    </div>
    </main>
    
    <Benefits />
    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

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
  background-color: #f5f5f5;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  height: calc(100vh - 155px);
  overflow: hidden;
}

.breadcrumb {
  max-width: 1400px;
  margin: 0 auto 20px auto;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #666;
}

.breadcrumb a {
  color: #28b935;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb a:hover {
  color: #1e7e34;
  text-decoration: underline;
}

.separator {
  color: #999;
}

/* Contenedor de botón de filtros móviles */
.mobile-filters-container {
  display: none;
  max-width: 1400px;
  margin: 0 auto 20px auto;
  width: 100%;
}

/* Botón de filtros móviles (estilo hamburguesa) */
.mobile-filters-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: #28b935;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
}

.mobile-filters-toggle:hover {
  background-color: #1e7e34;
}

.mobile-filters-toggle svg {
  width: 20px;
  height: 20px;
}

/* Overlay para cerrar filtros en móvil */
.mobile-filters-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-filters-overlay.active {
  display: block;
  opacity: 1;
}

.catalog-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
  padding: 0;
  align-items: start;
  height: calc(100vh - 235px);
  overflow: hidden;
}

/* Sidebar de Filtros */
.filters-sidebar {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

/* Ocultar scrollbar en Chrome, Safari y Opera */
.filters-sidebar::-webkit-scrollbar {
  display: none;
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
}

.filters-header h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.filters-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.clear-filters {
  background: none;
  border: none;
  color: #28b935;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.clear-filters:hover {
  color: #1e7e34;
  text-decoration: underline;
}

.filters-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.close-mobile-filters {
  display: none;
  background: none;
  border: none;
  color: #666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.close-mobile-filters:hover {
  color: #e74c3c;
}

.filter-section {
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
}

.filter-section:last-child {
  border-bottom: none;
}

.filter-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  font-weight: 600;
  font-size: 1rem;
  color: #333;
  user-select: none;
}

.filter-title:hover {
  color: #28b935;
}

.arrow {
  transition: transform 0.3s ease;
  font-size: 0.8rem;
  color: #666;
}

.arrow.open {
  transform: rotate(180deg);
}

.filter-content {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #555;
  transition: color 0.2s ease;
}

.filter-option:hover {
  color: #28b935;
}

.filter-option input[type="checkbox"],
.filter-option input[type="radio"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
  accent-color: #28b935;
}

.price-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  min-width: 0;
  box-sizing: border-box;
}

.price-input:focus {
  outline: none;
  border-color: #28b935;
}

.price-info {
  margin-top: 8px;
  text-align: right;
}

.price-info small {
  color: #666;
  font-size: 0.8rem;
}

.color-filters {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.color-filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.color-filter-option:hover {
  background-color: #f5f5f5;
}

.color-filter-option.selected {
  background-color: #e8f5e9;
  border: 2px solid #28b935;
}

.color-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ddd;
  flex-shrink: 0;
}

.color-name {
  font-size: 0.9rem;
  color: #555;
}

/* Área principal de productos */
.products-main {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

/* Ocultar scrollbar en Chrome, Safari y Opera para products-main */
.products-main::-webkit-scrollbar {
  display: none;
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.category-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.product-count {
  font-size: 1rem;
  font-weight: 400;
  color: #666;
}

.sort-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort-section label {
  font-size: 0.95rem;
  color: #666;
  font-weight: 500;
}

.sort-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  background-color: white;
  transition: border-color 0.2s ease;
}

.sort-select:focus {
  outline: none;
  border-color: #28b935;
}

/* Grid de productos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
  flex: 1;
}

.product-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(40, 185, 53, 0.15);
  border-color: #28b935;
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 0.85rem;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(231, 76, 60, 0.4);
}

.product-image {
  width: 100%;
  height: 220px;
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  min-height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-brand {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
}

.product-colors {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  min-height: 24px;
}

.color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  transition: transform 0.2s ease;
}

.color-dot:hover {
  transform: scale(1.2);
  border-color: #28b935;
}

.product-pricing {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
  margin-top: auto;
}

.original-price {
  font-size: 0.85rem;
  color: #999;
  text-decoration: line-through;
}

.discount-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #28b935;
}

.add-to-cart-btn {
  width: 100%;
  padding: 10px;
  background-color: #28b935;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
}

.add-to-cart-btn:hover:not(:disabled) {
  background-color: #1e7e34;
  transform: translateY(-2px);
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Sin resultados */
.no-results {
  text-align: center;
  padding: 80px 20px;
  color: #666;
}

.no-results svg {
  margin-bottom: 20px;
  color: #ccc;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.no-results p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.clear-filters-btn {
  padding: 12px 30px;
  background-color: #28b935;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-filters-btn:hover {
  background-color: #1e7e34;
}

/* Paginación */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e0e0e0;
}

.pagination-btn {
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #28b935;
  color: white;
  border-color: #28b935;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 5px;
}

.pagination-number {
  width: 40px;
  height: 40px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
}

.pagination-number:hover {
  background-color: #e8f5e9;
  border-color: #28b935;
  color: #28b935;
}

.pagination-number.active {
  background-color: #28b935;
  color: white;
  border-color: #28b935;
}

/* Responsive */
@media (max-width: 1024px) {
  .catalog-container {
    grid-template-columns: 240px 1fr;
    gap: 20px;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    margin-top: 140px;
    padding: 15px;
    height: calc(100vh - 140px);
  }
  
  .mobile-filters-container {
    display: block;
  }
  
  .catalog-container {
    grid-template-columns: 1fr;
    height: calc(100vh - 220px);
  }
  
  .filters-sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 85%;
    max-width: 350px;
    height: 100vh;
    z-index: 9999;
    transition: left 0.3s ease;
    overflow-y: auto;
  }
  
  .filters-sidebar.mobile-open {
    left: 0;
  }
  
  .close-mobile-filters {
    display: flex;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
  
  .products-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    margin-top: 130px;
    padding: 10px;
  }
  
  .filters-sidebar {
    width: 90%;
    max-width: 300px;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
  
  .catalog-container {
    padding: 0;
  }
  
  .products-main {
    padding: 20px 15px;
  }
  
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .product-card {
    border-radius: 8px;
  }
  
  .product-image {
    height: 140px;
    padding: 10px;
  }
  
  .product-info {
    padding: 10px;
  }
  
  .product-name {
    font-size: 0.8rem;
    min-height: 34px;
  }
  
  .discount-badge {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
  
  .pagination-numbers {
    display: none;
  }
}
</style>