<template>
  <div class="header-navigation-container" ref="headerRef">

    <header class="app-header">

      <button
        class="hamburger-header"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
        aria-controls="main-menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="logo-section">
        <router-link to="/" class="logo-link">
          <h1><img src="/logo.png" alt="Logo" class="logo" /></h1>
        </router-link>
      </div>

      <form class="search-container">
        <input 
          type="text" 
          class="search-input" 
          placeholder="Buscar Productos"
        >
        <button type="submit" class="search-button" aria-label="Buscar">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>

      <div class="header-icons">
        <button class="search-button-mobile" aria-label="Buscar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <router-link to="/Login" class="user-button" aria-label="Menú de usuario">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span class="profile-name">Mi Cuenta</span>
        </router-link>
        <button class="cart-button" aria-label="Carrito de compras">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-text">Mi Carrito</span>
        </button>
      </div>
    </header>

    <nav class="navigation-menu">

      <div class="mobile-menu-container" :class="{ open: isMobileMenuOpen }">

        <div :class="['main-menu', { open: isMobileMenuOpen }]" id="main-menu">
        <button 
          class="menu-item" 
          @click="toggleMenu('productos')"
          :class="{ active: activeMenu === 'productos' }"
        >
          Productos
          <svg v-if="activeMenu === 'productos'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
        
        <div v-if="activeMenu === 'productos'" class="mobile-categories-list">
          <template v-for="category in productCategories" :key="category">
            <a 
              href="#" 
              class="mobile-category-item"
              @click.prevent="category === 'Todos los Productos' ? navigateToCatalog('', null) : (category !== 'Celulares' && category !== 'Tablets' && category !== 'Accesorios Móviles' && category !== 'Computadoras' && category !== 'Accesorios para Computadoras' && category !== 'TV y Video' && category !== 'Audio' && category !== 'Electrodomésticos' && category !== 'Hogar y Línea Blanca' && category !== 'Muebles' && category !== 'Camas y Colchones' && category !== 'Gamer Lab' && category !== 'Smart Home' && category !== 'Deportes' && category !== 'Automotriz' && category !== 'Motos' && category !== 'Herramientas' && category !== 'Belleza' && category !== 'Bebés' ? navigateToCatalog(category, null) : selectCategory(category, $event))"
              :class="{ 
                'has-subcategory': category !== 'Todos los Productos' && (category === 'Celulares' || category === 'Tablets' || category === 'Accesorios Móviles' || category === 'Computadoras' || category === 'Accesorios para Computadoras' || category === 'TV y Video' || category === 'Audio' || category === 'Electrodomésticos' || category === 'Hogar y Línea Blanca' || category === 'Muebles' || category === 'Camas y Colchones' || category === 'Gamer Lab' || category === 'Smart Home' || category === 'Deportes' || category === 'Automotriz' || category === 'Motos' || category === 'Herramientas' || category === 'Belleza' || category === 'Bebés'),
                'active': activeSubcategory === category
              }"
            >
              {{ category }}
              <svg v-if="category !== 'Todos los Productos' && (category === 'Celulares' || category === 'Tablets' || category === 'Accesorios Móviles' || category === 'Computadoras' || category === 'Accesorios para Computadoras' || category === 'TV y Video' || category === 'Audio' || category === 'Electrodomésticos' || category === 'Hogar y Línea Blanca' || category === 'Muebles' || category === 'Camas y Colchones' || category === 'Gamer Lab' || category === 'Smart Home' || category === 'Deportes' || category === 'Automotriz' || category === 'Motos' || category === 'Herramientas' || category === 'Belleza' || category === 'Bebés')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
                <polyline v-if="activeSubcategory === category" points="6,9 12,15 18,9"></polyline>
                <polyline v-else points="9,18 15,12 9,6"></polyline>
              </svg>
            </a>
            
            <div v-if="activeSubcategory === category" class="mobile-subcategories">
              <div v-if="category === 'Celulares'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Celulares')"
                >
                  Ver Todos los Celulares
                </a>
                <a 
                  v-for="brand in cellphoneBrands" 
                  :key="brand"
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Celulares', brand)"
                >
                  {{ brand }}
                </a>
              </div>
              
              <div v-if="category === 'Tablets'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Tablets')"
                >
                  Ver Todas las Tablets
                </a>
                <a 
                  v-for="brand in cellphoneBrands" 
                  :key="brand"
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Tablets', brand)"
                >
                  {{ brand }}
                </a>
              </div>
              
              <div v-if="category === 'Accesorios Móviles'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Accesorios Móviles')"
                >
                  Ver Todos los Accesorios Móviles
                </a>
                <div v-for="accessoryGroup in mobileAccessories" :key="accessoryGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(accessoryGroup.category)">{{ accessoryGroup.category }}</h5>
                  <a 
                    v-for="item in accessoryGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Computadoras'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Computadoras')"
                >
                  Ver Todas las Computadoras
                </a>
                <a 
                  v-for="brand in computerBrands" 
                  :key="brand"
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Computadoras', brand)"
                >
                  {{ brand }}
                </a>
              </div>
              
              <div v-if="category === 'Accesorios para Computadoras'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Accesorios para Computadoras')"
                >
                  Ver Todos los Accesorios para Computadoras
                </a>
                <div v-for="accessoryGroup in computerAccessories" :key="accessoryGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(accessoryGroup.category)">{{ accessoryGroup.category }}</h5>
                  <a 
                    v-for="item in accessoryGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'TV y Video'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('TV y Video')"
                >
                  Ver Todo TV y Video
                </a>
                <div v-for="tvGroup in tvVideoCategories" :key="tvGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(tvGroup.category)">{{ tvGroup.category }}</h5>
                  <a 
                    v-for="item in tvGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Audio'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Audio')"
                >
                  Ver Todo Audio
                </a>
                <div v-for="audioGroup in audioCategories" :key="audioGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(audioGroup.category)">{{ audioGroup.category }}</h5>
                  <a 
                    v-for="item in audioGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Electrodomésticos'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Electrodomésticos')"
                >
                  Ver Todos los Electrodomésticos
                </a>
                <div v-for="applianceGroup in appliancesCategories" :key="applianceGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(applianceGroup.category)">{{ applianceGroup.category }}</h5>
                  <a 
                    v-for="item in applianceGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Hogar y Línea Blanca'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Hogar y Línea Blanca')"
                >
                  Ver Todo Hogar y Línea Blanca
                </a>
                <div v-for="homeGroup in homeCategories" :key="homeGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(homeGroup.category)">{{ homeGroup.category }}</h5>
                  <a 
                    v-for="item in homeGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Muebles'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Muebles')"
                >
                  Ver Todos los Muebles
                </a>
                <div v-for="furnitureGroup in furnitureCategories" :key="furnitureGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(furnitureGroup.category)">{{ furnitureGroup.category }}</h5>
                  <a 
                    v-for="item in furnitureGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Camas y Colchones'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Camas y Colchones')"
                >
                  Ver Todas las Camas y Colchones
                </a>
                <div v-for="bedsGroup in bedsMattressesCategories" :key="bedsGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(bedsGroup.category)">{{ bedsGroup.category }}</h5>
                  <a 
                    v-for="item in bedsGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Gamer Lab'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Gamer Lab')"
                >
                  Ver Todo Gamer Lab
                </a>
                <div v-for="gamerGroup in gamerLabCategories" :key="gamerGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(gamerGroup.category)">{{ gamerGroup.category }}</h5>
                  <a 
                    v-for="item in gamerGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Smart Home'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Smart Home')"
                >
                  Ver Todo Smart Home
                </a>
                <div v-for="smartHomeGroup in smartHomeCategories" :key="smartHomeGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(smartHomeGroup.category)">{{ smartHomeGroup.category }}</h5>
                  <a 
                    v-for="item in smartHomeGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Deportes'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Deportes')"
                >
                  Ver Todo Deportes
                </a>
                <div v-for="sportGroup in sportCategories" :key="sportGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(sportGroup.category)">{{ sportGroup.category }}</h5>
                  <a 
                    v-for="item in sportGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>

              <div v-if="category === 'Automotriz'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Automotriz')"
                >
                  Ver Todo Automotriz
                </a>
                <div v-for="automotiveGroup in automotiveCategories" :key="automotiveGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(automotiveGroup.category)">{{ automotiveGroup.category }}</h5>
                  <a 
                    v-for="item in automotiveGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Motos'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Motos')"
                >
                  Ver Todas las Motos
                </a>
                <div v-for="motorcycleGroup in motorcycleCategories" :key="motorcycleGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(motorcycleGroup.category)">{{ motorcycleGroup.category }}</h5>
                  <a 
                    v-for="item in motorcycleGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Herramientas'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Herramientas')"
                >
                  Ver Todas las Herramientas
                </a>
                <div v-for="toolsGroup in toolsCategories" :key="toolsGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(toolsGroup.category)">{{ toolsGroup.category }}</h5>
                  <a 
                    v-for="item in toolsGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Belleza'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Belleza')"
                >
                  Ver Todo Belleza
                </a>
                <div v-for="beautyGroup in beautyCategories" :key="beautyGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(beautyGroup.category)">{{ beautyGroup.category }}</h5>
                  <a 
                    v-for="item in beautyGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
              
              <div v-if="category === 'Bebés'" class="mobile-subcategory-content">
                <a 
                  href="#" 
                  class="mobile-subcategory-item"
                  @click.prevent="navigateToCatalog('Bebés')"
                >
                  Ver Todo Bebés
                </a>
                <div v-for="babyGroup in babyCategories" :key="babyGroup.category" class="mobile-accessory-group">
                  <h5 class="mobile-accessory-group-title clickeable-category" @click="selectCategoryTitle(babyGroup.category)">{{ babyGroup.category }}</h5>
                  <a 
                    v-for="item in babyGroup.items" 
                    :key="item"
                    href="#" 
                    class="mobile-subcategory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
        
        <button 
          class="menu-item"
          @click="toggleMenu('marcas')"
          :class="{ active: activeMenu === 'marcas' }"
        >
          Marcas
          <svg v-if="activeMenu === 'marcas'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
        
        <div v-if="activeMenu === 'marcas'" class="mobile-categories-list">
          <a 
            href="#" 
            class="mobile-category-item has-subcategory"
            @click.prevent="selectCategory('Marcas')"
            :class="{ 
              'active': activeSubcategory === 'Marcas'
            }"
          >
            Marcas
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
              <polyline v-if="activeSubcategory === 'Marcas'" points="6,9 12,15 18,9"></polyline>
              <polyline v-else points="9,18 15,12 9,6"></polyline>
            </svg>
          </a>
          
          <div v-if="activeSubcategory === 'Marcas'" class="mobile-subcategories">
            <div class="mobile-subcategory-content">
              <a 
                v-for="brand in brandsCategories" 
                :key="brand"
                href="#" 
                class="mobile-subcategory-item"
              >
                {{ brand }}
              </a>
            </div>
          </div>
        </div>
        <button 
          class="menu-item promo-button"
          @click="toggleMenu('promociones')"
          :class="{ active: activeMenu === 'promociones' }"
        >
          Promociones
        </button>
        
        <div v-if="activeMenu === 'promociones'" class="mobile-categories-list">
          <a 
            href="#" 
            class="mobile-category-item has-subcategory"
            @click.prevent="selectCategory('Promociones')"
            :class="{ 
              'active': activeSubcategory === 'Promociones'
            }"
          >
            Promociones
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
              <polyline v-if="activeSubcategory === 'Promociones'" points="6,9 12,15 18,9"></polyline>
              <polyline v-else points="9,18 15,12 9,6"></polyline>
            </svg>
          </a>
          
          <div v-if="activeSubcategory === 'Promociones'" class="mobile-subcategories">
            <div class="mobile-subcategory-content">
              <a 
                v-for="promo in promotionsCategories" 
                :key="promo"
                href="#" 
                class="mobile-subcategory-item"
              >
                {{ promo }}
              </a>
            </div>
          </div>
        </div>
        <button 
          class="menu-item"
          @click="toggleMenu('tarjetas')"
          :class="{ active: activeMenu === 'tarjetas' }"
        >
          Tarjetas
          <svg v-if="activeMenu === 'tarjetas'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
        
        <div v-if="activeMenu === 'tarjetas'" class="mobile-categories-list">
          <a 
            href="#" 
            class="mobile-category-item has-subcategory"
            @click.prevent="selectCategory('Tarjetas')"
            :class="{ 
              'active': activeSubcategory === 'Tarjetas'
            }"
          >
            Tarjetas
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
              <polyline v-if="activeSubcategory === 'Tarjetas'" points="6,9 12,15 18,9"></polyline>
              <polyline v-else points="9,18 15,12 9,6"></polyline>
            </svg>
          </a>
          
          <div v-if="activeSubcategory === 'Tarjetas'" class="mobile-subcategories">
            <div class="mobile-subcategory-content">
              <router-link 
                to="/SolicitarTarjetaMonge" 
                class="mobile-subcategory-item"
              >
                Solicitar Tu Tarjeta Monge
              </router-link>
              <a 
                href="https://www.tiendamonge.com/tarjeta-monge/kit-de-bienvenida"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Kit de Bienvenida
              </a>
              <a 
                href="https://www.asistentefinancieramonge.com/Mensaje/TARJETA.MONGE"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Asistente Virtual
              </a>
              <router-link 
                to="/SolicitarTasaCero" 
                class="mobile-subcategory-item"
              >
                Solicitar Tasa Cero
              </router-link>
            </div>
          </div>
        </div>
        <button 
          class="menu-item"
          @click="toggleMenu('blog')"
          :class="{ active: activeMenu === 'blog' }"
        >
          Blog
          <svg v-if="activeMenu === 'blog'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-arrow">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
        
        <div v-if="activeMenu === 'blog'" class="mobile-categories-list">
          <a 
            href="#" 
            class="mobile-category-item has-subcategory"
            @click.prevent="selectCategory('Blog')"
            :class="{ 
              'active': activeSubcategory === 'Blog'
            }"
          >
            Blog
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
              <polyline v-if="activeSubcategory === 'Blog'" points="6,9 12,15 18,9"></polyline>
              <polyline v-else points="9,18 15,12 9,6"></polyline>
            </svg>
          </a>
          
          <div v-if="activeSubcategory === 'Blog'" class="mobile-subcategories">
            <div class="mobile-subcategory-content">
              <a 
                href="https://www.tiendamonge.com/blog-monge/hogar-y-linea-blanca.html"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Hogar y Línea Blanca
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/tecnologia.html"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Tecnología
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/salud-y-ejercicio.html"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Salud y Ejercicio
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/seguros.html"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Seguros
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/entretenimiento.html"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Entretenimiento
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/fechas-especiales.html"
                target="_blank"
                class="mobile-subcategory-item"
              >
                Fechas especiales
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'productos'" class="submenu">
        <div class="submenu-content">
          <div class="categories-column">
            <template v-for="category in productCategories" :key="category">
              <a 
                href="#" 
                class="category-item"
                @click.prevent="category === 'Todos los Productos' ? navigateToCatalog('', null) : (!hasSubmenu(category) ? navigateToCatalog(category, null) : selectCategory(category, $event))"
                @mouseenter="showSubmenuOnHover(category)"
                :class="{ 
                  'has-subcategory': category !== 'Todos los Productos' && hasSubmenu(category),
                  'active': activeSubcategory === category
                }"
              >
                {{ category }}
                <svg v-if="category !== 'Todos los Productos' && (category === 'Celulares' || category === 'Tablets' || category === 'Accesorios Móviles' || category === 'Computadoras' || category === 'Accesorios para Computadoras' || category === 'TV y Video' || category === 'Audio' || category === 'Electrodomésticos' || category === 'Hogar y Línea Blanca' || category === 'Muebles' || category === 'Camas y Colchones' || category === 'Gamer Lab' || category === 'Smart Home' || category === 'Deportes' || category === 'Automotriz' || category === 'Motos' || category === 'Herramientas' || category === 'Belleza' || category === 'Bebés')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </a>
            </template>
          </div>
          <div class="content-area">
             <div v-if="!activeSubcategory" class="default-content">
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Celulares'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Celulares')">CELULARES</h3>
            <div class="subcategory-grid">
              <a 
                v-for="brand in cellphoneBrands" 
                :key="brand"
                href="#" 
                class="subcategory-brand"
                @click.prevent="navigateToCatalog('Celulares', brand)"
              >
                {{ brand }}
              </a>
            </div>
          </div>

          <div v-if="activeSubcategory === 'Tablets'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Tablets')">TABLETS</h3>
            <div class="subcategory-grid">
              <a 
                v-for="brand in cellphoneBrands" 
                :key="brand"
                href="#" 
                class="subcategory-brand"
                @click.prevent="navigateToCatalog('Tablets', brand)"
              >
                {{ brand }}
              </a>
            </div>
          </div>

          <div v-if="activeSubcategory === 'Accesorios Móviles'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Accesorios Móviles')">ACCESORIOS MÓVILES</h3>
            <div class="accessories-grid">
              <div 
                v-for="accessoryGroup in mobileAccessories" 
                :key="accessoryGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(accessoryGroup.category)">{{ accessoryGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in accessoryGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Computadoras'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Computadoras')">COMPUTADORAS</h3>
            <div class="subcategory-grid">
              <a 
                v-for="brand in computerBrands" 
                :key="brand"
                href="#" 
                class="subcategory-brand"
                @click.prevent="navigateToCatalog('Computadoras', brand)"
              >
                {{ brand }}
              </a>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Accesorios para Computadoras'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Accesorios para Computadoras')">ACCESORIOS PARA COMPUTADORAS</h3>
            <div class="accessories-grid">
              <div 
                v-for="accessoryGroup in computerAccessories" 
                :key="accessoryGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(accessoryGroup.category)">{{ accessoryGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in accessoryGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'TV y Video'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('TV y Video')">TV Y VIDEO</h3>
            <div class="accessories-grid">
              <div 
                v-for="tvGroup in tvVideoCategories" 
                :key="tvGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(tvGroup.category)">{{ tvGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in tvGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Audio'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Audio')">AUDIO</h3>
            <div class="accessories-grid">
              <div 
                v-for="audioGroup in audioCategories" 
                :key="audioGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(audioGroup.category)">{{ audioGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in audioGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Electrodomésticos'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Electrodomésticos')">ELECTRODOMÉSTICOS</h3>
            <div class="accessories-grid">
              <div 
                v-for="applianceGroup in appliancesCategories" 
                :key="applianceGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(applianceGroup.category)">{{ applianceGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in applianceGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Hogar y Línea Blanca'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Hogar y Línea Blanca')">HOGAR Y LÍNEA BLANCA</h3>
            <div class="accessories-grid">
              <div 
                v-for="homeGroup in homeCategories" 
                :key="homeGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(homeGroup.category)">{{ homeGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in homeGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Muebles'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Muebles')">MUEBLES</h3>
            <div class="accessories-grid">
              <div 
                v-for="furnitureGroup in furnitureCategories" 
                :key="furnitureGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(furnitureGroup.category)">{{ furnitureGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in furnitureGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Camas y Colchones'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Camas y Colchones')">CAMAS Y COLCHONES</h3>
            <div class="accessories-grid">
              <div 
                v-for="bedsGroup in bedsMattressesCategories" 
                :key="bedsGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(bedsGroup.category)">{{ bedsGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in bedsGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Gamer Lab'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Gamer Lab')">GAMER LAB</h3>
            <div class="accessories-grid">
              <div 
                v-for="gamerGroup in gamerLabCategories" 
                :key="gamerGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(gamerGroup.category)">{{ gamerGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in gamerGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Smart Home'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Smart Home')">SMART HOME</h3>
            <div class="accessories-grid">
              <div 
                v-for="smartHomeGroup in smartHomeCategories" 
                :key="smartHomeGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(smartHomeGroup.category)">{{ smartHomeGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in smartHomeGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Deportes'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Deportes')">DEPORTES</h3>
            <div class="accessories-grid">
              <div 
                v-for="sportGroup in sportCategories" 
                :key="sportGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(sportGroup.category)">{{ sportGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in sportGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Automotriz'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Automotriz')">AUTOMOTRIZ</h3>
            <div class="accessories-grid">
              <div 
                v-for="automotiveGroup in automotiveCategories" 
                :key="automotiveGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(automotiveGroup.category)">{{ automotiveGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in automotiveGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Motos'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Motos')">MOTOS</h3>
            <div class="accessories-grid">
              <div 
                v-for="motorcycleGroup in motorcycleCategories" 
                :key="motorcycleGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(motorcycleGroup.category)">{{ motorcycleGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in motorcycleGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Herramientas'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Herramientas')">HERRAMIENTAS</h3>
            <div class="accessories-grid">
              <div 
                v-for="toolsGroup in toolsCategories" 
                :key="toolsGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(toolsGroup.category)">{{ toolsGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in toolsGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Belleza'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Belleza')">BELLEZA</h3>
            <div class="accessories-grid">
              <div 
                v-for="beautyGroup in beautyCategories" 
                :key="beautyGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(beautyGroup.category)">{{ beautyGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in beautyGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Bebés'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="navigateToCatalog('Bebés')">BEBÉS</h3>
            <div class="accessories-grid">
              <div 
                v-for="babyGroup in babyCategories" 
                :key="babyGroup.category"
                class="accessory-group"
              >
                <h4 class="accessory-group-title clickeable-category" @click="selectCategoryTitle(babyGroup.category)">{{ babyGroup.category }}</h4>
                <div class="accessory-items">
                  <a 
                    v-for="item in babyGroup.items" 
                    :key="item"
                    href="#" 
                    class="accessory-item"
                  >
                    {{ item }}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div v-if="activeMenu === 'marcas'" class="submenu">
        <div class="submenu-content">
          <div class="categories-column">
            <a 
              href="#" 
              class="category-item active"
              @click.prevent="selectCategory('Marcas')"
            >
              MARCAS
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </a>
          </div>
          <div class="content-area">
            <div v-if="!activeSubcategory" class="default-content">
             
            </div>
          </div>
          
          <div v-if="activeSubcategory === 'Marcas'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="selectCategoryTitle('Marcas')">MARCAS</h3>
            <div class="subcategory-grid">
              <a 
                v-for="brand in brandsCategories" 
                :key="brand"
                href="#" 
                class="subcategory-brand"
                @click.prevent="navigateToBrand(brand)"
              >
                {{ brand }}
              </a>
            </div>
          </div>

        </div>
      </div>

      <div v-if="activeMenu === 'promociones'" class="submenu">
        <div class="submenu-content">
          <div class="categories-column">
            <a 
              href="#" 
              class="category-item active"
              @click.prevent="selectCategory('Promociones')"
            >
              PROMOCIONES
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </a>
          </div>
          <div class="content-area">
            <div v-if="!activeSubcategory" class="default-content">
 
            </div>
          </div>
          

          <div v-if="activeSubcategory === 'Promociones'" class="subcategories-panel">
            <h3 class="subcategory-title clickeable-main-title" @click="selectCategoryTitle('Promociones')">PROMOCIONES</h3>
            <div class="subcategory-grid">
              <a 
                v-for="promo in promotionsCategories" 
                :key="promo"
                href="#" 
                class="subcategory-brand"
              >
                {{ promo }}
              </a>
            </div>
          </div>

        </div>
      </div>
      

      <div v-if="activeMenu === 'tarjetas'" class="submenu">
        <div class="submenu-content">
          <div class="categories-column">
            <a 
              href="#" 
              class="category-item active"
              @click.prevent="selectCategory('Tarjetas')"
            >
              TARJETAS
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
          <div class="content-area">
            <div v-if="!activeSubcategory" class="default-content">
              
            </div>
          </div>
          
          
          <div v-if="activeSubcategory === 'Tarjetas'" class="subcategories-panel">
            <h3 class="subcategory-title">TARJETAS</h3>
            <div class="subcategory-grid">
              <router-link 
                to="/SolicitarTarjetaMonge" 
                class="subcategory-brand"
              >
                Solicitar Tu Tarjeta Monge
              </router-link>
              <a 
                href="https://www.tiendamonge.com/tarjeta-monge/kit-de-bienvenida"
                target="_blank"
                class="subcategory-brand"
              >
                Kit de Bienvenida
              </a>
              <a 
                href="https://www.asistentefinancieramonge.com/Mensaje/TARJETA.MONGE"
                target="_blank"
                class="subcategory-brand"
              >
                Asistente Virtual
              </a>
              <router-link 
                to="/SolicitarTasaCero" 
                class="subcategory-brand"
              >
                Solicitar Tasa Cero
              </router-link>
            </div>
          </div>

        </div>
      </div>
      
      
      <div v-if="activeMenu === 'blog'" class="submenu">
        <div class="submenu-content">
          <div class="categories-column">
            <a 
              href="#" 
              class="category-item active"
              @click.prevent="selectCategory('Blog')"
            >
              BLOG
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="subcategory-arrow">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </a>
          </div>
          <div class="content-area">
            <div v-if="!activeSubcategory" class="default-content">
             
            </div>
          </div>
          
          
          <div v-if="activeSubcategory === 'Blog'" class="subcategories-panel">
            <h3 class="subcategory-title">BLOG</h3>
            <div class="subcategory-grid">
              <a 
                href="https://www.tiendamonge.com/blog-monge/hogar-y-linea-blanca.html"
                target="_blank"
                class="subcategory-brand"
              >
                Hogar y Línea Blanca
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/tecnologia.html"
                target="_blank"
                class="subcategory-brand"
              >
                Tecnología
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/salud-y-ejercicio.html"
                target="_blank"
                class="subcategory-brand"
              >
                Salud y Ejercicio
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/seguros.html"
                target="_blank"
                class="subcategory-brand"
              >
                Seguros
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/entretenimiento.html"
                target="_blank"
                class="subcategory-brand"
              >
                Entretenimiento
              </a>
              <a 
                href="https://www.tiendamonge.com/blog-monge/fechas-especiales.html"
                target="_blank"
                class="subcategory-brand"
              >
                Fechas especiales
              </a>
            </div>
          </div>

        </div>
      </div>
      </div>
    </nav>


    <div class="promo-bar">
      <a href="https://www.mongepay.com/form-credito" target="_blank" class="promo-link">
        <span class="promo-text">
          <strong>SOLICITÁ TU CRÉDITO EN</strong> 
          <span class="mongepay-brand">MongePay.com</span> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="promo-icon">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M15.5 15.5v.01"></path>
          </svg>
        </span>
        <span class="promo-subtitle">Crédito otorgado por Financiera Monge S.A.</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeMenu = ref(null)
const isMobileMenuOpen = ref(false)
const activeSubcategory = ref(null)
const headerRef = ref(null)

let resizeObserver;

const handleClickOutside = (event) => {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    activeMenu.value = null;
    activeSubcategory.value = null;
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);

  // Lógica para medir la altura del header
  if (headerRef.value) {
    const updateHeaderHeight = () => {
      const height = headerRef.value.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    // Usamos ResizeObserver para detectar cambios de tamaño de forma eficiente
    resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerRef.value);
    
    // Llamamos a la función una vez al inicio
    updateHeaderHeight();
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);

  // Limpiamos el observer cuando el componente se destruye
  if (resizeObserver && headerRef.value) {
    resizeObserver.unobserve(headerRef.value);
  }
});

const toggleMenu = (menuName) => {
  activeMenu.value = activeMenu.value === menuName ? null : menuName
  if (activeMenu.value === 'productos') {

  } else if (activeMenu.value === 'marcas') {

    activeSubcategory.value = 'Marcas'
  } else if (activeMenu.value === 'promociones') {

    activeSubcategory.value = 'Promociones'
  } else if (activeMenu.value === 'tarjetas') {

    activeSubcategory.value = 'Tarjetas'
  } else if (activeMenu.value === 'blog') {

    activeSubcategory.value = 'Blog'
  } else {
    activeSubcategory.value = null
  }
}

const categoriesWithSubmenu = ['Celulares', 'Tablets', 'Accesorios Móviles', 'Computadoras', 'Accesorios para Computadoras', 'TV y Video', 'Audio', 'Electrodomésticos', 'Hogar y Línea Blanca', 'Muebles', 'Camas y Colchones', 'Gamer Lab', 'Smart Home', 'Deportes', 'Automotriz', 'Motos', 'Herramientas', 'Belleza', 'Bebés', 'Marcas', 'Promociones', 'Tarjetas', 'Blog'];

const hasSubmenu = (category) => {
  return categoriesWithSubmenu.includes(category);
}

const selectCategory = (category, event) => {
  // Si es "Todos los Productos", navegar directamente al catálogo sin filtros
  if (category === 'Todos los Productos') {
    navigateToCatalog('', null);
    return;
  }

  // En categorías con submenú, alternar la visualización de subcategorías
  if (hasSubmenu(category)) {
    // Prevenir comportamiento por defecto si se pasó el evento
    if (event) {
      event.stopPropagation();
    }
    
    // Toggle: si ya está activa, cerrarla; si no, abrirla
    if (activeSubcategory.value === category) {
      activeSubcategory.value = null; 
    } else {
      activeSubcategory.value = category;
    }
  } else {
    activeSubcategory.value = null;
  }
}

const showSubmenuOnHover = (category) => {
  if (hasSubmenu(category)) {
    activeSubcategory.value = category;
  }
}

const selectCategoryTitle = (categoryTitle) => {
  console.log('Categoría seleccionada:', categoryTitle);
}

// Navegación a catálogo con parámetros
const navigateToCatalog = (categoria, marca = null) => {
  // Cerrar menús
  activeMenu.value = null;
  activeSubcategory.value = null;
  isMobileMenuOpen.value = false;
  
  // Si no hay categoría, ir al catálogo sin filtros
  if (!categoria) {
    window.location.href = `/CatalogoProductos`;
    return;
  }
  
  const params = new URLSearchParams({ categoria });
  if (marca) {
    params.append('marca', marca);
  }
  // Navegar
  window.location.href = `/CatalogoProductos?${params.toString()}`;
}

const navigateToBrand = (marca) => {
  activeMenu.value = null;
  activeSubcategory.value = null;
  isMobileMenuOpen.value = false;
  window.location.href = `/CatalogoProductos?marca=${encodeURIComponent(marca)}`;
}

const productCategories = [
  'Todos los Productos',
  'Celulares',
  'Tablets',
  'Accesorios Móviles',
  'Computadoras',
  'Accesorios para Computadoras',
  'TV y Video',
  'Audio',
  'Electrodomésticos',
  'Hogar y Línea Blanca',
  'Muebles',
  'Camas y Colchones',
  'Gamer Lab',
  'Smart Home',
  'Deportes',
  'Automotriz',
  'Motos',
  'Herramientas',
  'Belleza',
  'Bebés'
]

const brandsCategories = [
  'Apple',
  'Atlas',
  'Frigidaire',
  'General Electric',
  'Hisense',
  'HONOR',
  'HP',
  'LG',
  'Motorola',
  'Mabe',
  'Maytag',
  'Samsung',
  'Serpento',
  'Telstar',
  'Whirlpool',
  'Xiaomi'
]

const cardsCategories = [
  'Solicitar Tu Tarjeta Monge',
  'Kit de Bienvenida',
  'Asistente Virtual',
  'Solicitar Tasa Cero'
]

const blogCategories = [
  'Hogar y Línea Blanca',
  'Tecnología',
  'Salud y Ejercicio',
  'Seguros',
  'Entretenimiento',
  'Fechas especiales'
]

const promotionsCategories = [
  'Novedades',
  'Exclusivo',
  'Oferta del Día',
  'Precios Black Friday'
]

const cellphoneBrands = [
  'Samsung',
  'Apple',
  'Motorola',
  'Honor',
  'Xiaomi | Redmi',
  'Otras Marcas'
]

const mobileAccessories = [
  {
    category: 'Accesorios de carga y energía',
    items: [
      'Cargadores rápidos',
      'Power banks',
      'Cables reforzados',
      'Bases de carga inalámbrica'
    ]
  },
  {
    category: 'Audio y multimedia',
    items: [
      'Auriculares Bluetooth',
      'Altavoces portátiles',
      'Adaptadores de audio',
      'Micrófonos externos'
    ]
  },
  {
    category: 'Protección y estilo',
    items: [
      'Fundas',
      'Protectores de pantalla',
      'Skins y stickers decorativos',
      'Anillos o soportes traseros'
    ]
  },
  {
    category: 'Soporte y transporte',
    items: [
      'Soportes para auto',
      'Soportes de escritorio',
      'Bolsos o estuches para móviles',
      'Correas para muñeca o cuello'
    ]
  },
  {
    category: 'Fotografía y video',
    items: [
      'Lentes externos',
      'Trípodes y estabilizadores',
      'Luces LED para selfies'
    ]
  },
  {
    category: 'Otros accesorios',
    items: [
      'Stylus y lápices ópticos',
      'Gamepads para móviles',
      'Adaptadores y OTG',
      'Limpiadores de pantalla'
    ]
  }
]

const computerBrands = [
  'Apple',
  'Dell',
  'HP (Hewlett-Packard)',
  'Lenovo',
  'ASUS',
  'Acer',
  'MSI',
  'Razer',
  'Samsung',
  'Toshiba',
  'LG',
  'Huawei',
  'Gigabyte'
]

const computerAccessories = [
  {
    category: 'Periféricos de entrada',
    items: [
      'Teclados',
      'Ratones',
      'Tabletas gráficas',
      'Escáneres',
      'Lectores de huellas digitales'
    ]
  },
  {
    category: 'Periféricos de salida',
    items: [
      'Monitores',
      'Impresoras',
      'Altavoces externos',
      'Auriculares con micrófono',
      'Proyectores'
    ]
  },
  {
    category: 'Almacenamiento y expansión',
    items: [
      'Discos duros externos',
      'Unidades flash USB',
      'Tarjetas SD y lectores de tarjetas',
      'Docks y estaciones de expansión USB-C',
      'Enclosures para discos duros'
    ]
  },
  {
    category: 'Conectividad y redes',
    items: [
      'Adaptadores Wi-Fi USB',
      'Repetidores o extensores de señal',
      'Cables Ethernet',
      'Hubs USB',
      'Adaptadores Bluetooth'
    ]
  },
  {
    category: 'Soporte y ergonomía',
    items: [
      'Bases refrigerantes para laptops',
      'Soportes ajustables para monitores',
      'Reposamuñecas para teclado y mouse',
      'Sillas ergonómicas',
      'Escritorios ajustables'
    ]
  },
  {
    category: 'Limpieza y mantenimiento',
    items: [
      'Kits de limpieza para pantallas y teclados',
      'Aire comprimido',
      'Alfombrillas para mouse',
      'Protectores de teclado'
    ]
  }
]

const tvVideoCategories = [
  {
    category: 'Pantallas',
    items: [
      'LED',
      'NanoCell',
      'OLED',
      'QNED',
      'QLED',
      'Neo QLED',
      'Smart TV',
      'UHD 4K',
      'FUHD 8K'
    ]
  },
  {
    category: 'Reproductores de video y proyectores',
    items: [
      'Proyectores'
    ]
  }
]

const appliancesCategories = [
  {
    category: 'Abanicos',
    items: [
      'Box | Mesa',
      'Pared | Techo',
      'Pie | Torre',
    ]
  },
  {
    category: 'Cafeteras',
    items: [
      'Cafeteras',
      'Teteras',
      'Percoladores',
      'Moledores'
    ]
  },
  {
    category: 'Freidoras',
    items: [
      'Aire',
      'Aceite'
    ]
  },
  {
    category: 'Licuadoras | Batidoras',
    items: [
      'Batidoras',
      'Licuadoras'
    ]
  },
  {
    category: 'Limpieza de Hogar',
    items: [
      'Aspiradoras',
      'Cepillos'
    ]
  },
  {
    category: 'Máquinas de coser',
    items: [
      'Mesa',
      'Portátil'
    ]
  },
  {
    category: 'Planchas',
    items: [
      'Vapor',
      'Seca',
      'Vertical'
    ]
  },
  {
    category: 'Procesadores de alimento',
    items: [
      'Mini procesadores',
      'Procesadores'
    ]
  },
  {
    category: 'Sartenes eléctricos | Parrillas',
    items: [
      'Parrillas',
      'Sartenes'
    ]
  },
  {
    category: 'Tostadores',
    items: [
      'Sandwicheras',
      'Wafleras',
      'Tostadores de pan',
      'Hornos'
    ]
  },
  {
    category: 'Ollas de Cocción | Vaporeras',
    items: [
      'Juegos de sartenes',
      'Ollas',
      'Ollas arroceras',
      'Ollas de cocimiento lento',
      'Ollas de presión',
      'Ollas multiuso'
    ]
  },
  {
    category: 'Otros Electrodomésticos',
    items: [
      'Extractores de jugos',
      'Repuestos y Accesorios'
    ]
  }
]

const audioCategories = [
  {
    category: 'Audífonos',
    items: [
      'Inalámbricos',
      'Diadema',
      'Pastilla',
      'Deportivos'
    ]
  },
  {
    category: 'Minicomponentes',
    items: [
      'LG',
      'Samsung'
    ]
  },
  {
    category: 'Parlantes',
    items: [
      'LG',
      'Telstar',
      'Otros'
    ]
  },
  {
    category: 'Sistemas de audio y accesorios',
    items: [
      'Soundbar'
    ]
  }
]

const homeCategories = [
  {
    category: 'Aires acondicionados | Purificadores',
    items: [
      'Portátil',
      'Split'
    ]
  },
  {
    category: 'Cocinas',
    items: [
      'Cocinas de gas',
      'Cocinas eléctricas'
    ]
  },
  {
    category: 'Hornos y extractores',
    items: [
      'Extractores de grasa',
      'Hornos empotrables',
      'Hornos microondas'
    ]
  },
  {
    category: 'Lavadoras y secadoras',
    items: [
      'Automáticas',
      'Centros de lavado | WashTower',
      'Secadoras de ropa',
      'Semiautomáticas',
      'Lavasecadora'
    ]
  },
  {
    category: 'Lavaplatos',
    items: [
      'Empotrables',
      'Libre instalación'
    ]
  },
  {
    category: 'Plantillas de cocina',
    items: [
      'Plantillas de sobremesa',
      'Plantillas empotrables'
    ]
  },
  {
    category: 'Refrigeradoras',
    items: [
      'Automáticas',
      'French Door',
      'Semiautomáticas',
      'Side by Side'
    ]
  },
  {
    category: 'Otros Hogar',
    items: [
      'Otros accesorios',
      'Congeladores y Enfriadores'
    ]
  }
]

const furnitureCategories = [
  {
    category: 'Sala de Entretenimiento',
    items: [
      'Centros de entretenimiento',
      'Mesas de TV',
      'Sillones'
    ]
  },
  {
    category: 'Home Office',
    items: [
      'Escritorios',
      'Sillas'
    ]
  },
  {
    category: 'Juegos de comedor',
    items: [
      '4 Sillas',
      '6 Sillas',
      '8 Sillas'
    ]
  },
  {
    category: 'Juego de sala',
    items: [
      '2 Piezas',
      '3 Piezas',
      '+'
    ]
  },
  {
    category: 'Muebles para cocina',
    items: [
      'Cocina',
      'Fregadero',
      'Microondas',
      'Trasteros',
      'Desayunadores',
      'Alacenas'
    ]
  },
  {
    category: 'Otros muebles',
    items: [
      'Habitación',
      'Mesas',
      'Sillas',
      'Otros'
    ]
  }
]

const bedsMattressesCategories = [
  {
    category: 'Camas',
    items: [
      'Individual',
      'Matrimonial'
    ]
  },
  {
    category: 'Set Base y Colchón',
    items: [
      'Individual',
      'Matrimonial',
      'Queen',
      'King'
    ]
  },
  {
    category: 'Colchones',
    items: [
      'Individual',
      'Matrimonial',
      'Queen',
      'King'
    ]
  },
  {
    category: 'Bases',
    items: [
      'Individual',
      'Matrimonial',
      'Queen',
      'King'
    ]
  }
]

const gamerLabCategories = [
  {
    category: 'Consolas',
    items: [
      'Nintendo',
      'PlayStation'
    ]
  },
  {
    category: 'Videojuegos',
    items: [
      'PlayStation | Nintendo',
      'PC Gaming'
    ]
  },
  {
    category: 'Monitores',
    items: [
      'Monitores Gaming',
      'Accesorios para Monitores'
    ]
  },
  {
    category: 'Accesorios Gamer',
    items: [
      'Headset | Parlantes',
      'Controles | Periféricos',
      'Teclados | Mouses'
    ]
  },
  {
    category: 'Escritorios | Sillas Gamer',
    items: [
      'Sillas Gamer',
      'Sillones | Mesas Gamer'
    ]
  }
]

const smartHomeCategories = [
  {
    category: 'Home Control | Conectividad',
    items: [
      'Bombillos | Apagadores',
      'Enchufes | Regletas'
    ]
  },
  {
    category: 'Asistentes',
    items: [
      'Alexa | Google'
    ]
  }
]

const sportCategories = [
  {
    category: 'Bicicletas',
    items: [
      'Banana',
      'BMX',
      'MTB',
      'Ruta',
      'Scooter | Bicicletas Eléctricas'
    ]
  },
  {
    category: 'Bicicletas Estacionarias',
    items: [
      'Spinning | Elípticas'
    ]
  },
  {
    category: 'Fitness',
    items: [
      'Gimnasio | Bancas | Pesas',
      'Mancuernas',
      'Pistas Caminadoras'
    ]
  },
  {
    category: 'Deportes',
    items: [
      'Boxeo | Otros',
      'Fútbol',
      'Mesas de Ping Pong',
      'Tableros de Basketball'
    ]
  }
]

const automotiveCategories = [
  {
    category: 'Llantas',
    items: [
      'Llantas para carro'
    ]
  }
]

const motorcycleCategories = [
  {
    category: 'Cuadraciclos',
    items: [
      'Serpento'
    ]
  },
  {
    category: 'Motocicletas',
    items: [
      'Serpento'
    ]
  }
]

const toolsCategories = [
  {
    category: 'Hidrolavadoras',
    items: [
      'Hidrolavadoras'
    ]
  },
  {
    category: 'Motoguadañas',
    items: [
      'Motoguadaña'
    ]
  },
  {
    category: 'Otras herramientas',
    items: [
      'Taladros'
    ]
  }
]

const beautyCategories = [
  {
    category: 'Cuidado de Cabello',
    items: [
      'Alisadores',
      'Cepillos',
      'Rizadores',
      'Secadoras de cabello'
    ]
  },
  {
    category: 'Otros',
    items: [
      'Corte de Cabello',
      'Depiladoras',
      'Rasuradoras',
      'Trimmers'
    ]
  }
]

const babyCategories = [
  {
    category: 'Accesorios para bebés',
    items: [
      'Cunas | Encierros | Moises',
      'Coches',
      'Sillas para bebés'
    ]
  }
]


</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.header-navigation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-family: 'Open Sans', sans-serif;
}

.app-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  background-color: #28b935;
  font-family: 'Open Sans', sans-serif;
  gap: 20px;
}

.hamburger-header {
  display: none;
  flex-direction: column;
  gap: 3px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger-header .bar {
  width: 24px;
  height: 3px;
  background: white;
  display: block;
  border-radius: 2px;
}

.logo-link {
  text-decoration: none;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-button-mobile {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.search-button-mobile:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

h1 {
  display: flex;
  align-items: center; 
  gap: 15px;         
  margin: 0;        
  color: #5D4037;   
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;  
}

.logo {
  height: 60px;
}

form.search-container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px; 
  padding: 5px;
  width: 100%;
  max-width: 500px; 
  flex-grow: 1;
}

.search-input {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
}

.search-button {
  background-color: #f0f0f0; 
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #333; 
  flex-shrink: 0; 
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-button, .cart-button {
  background-color: transparent;
  border-radius: 50px;
  padding: 4px 12px 4px 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;
  border: none;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.user-button:hover, .cart-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.profile-name, .cart-text {
  font-weight: 600;
  color: white;
  font-size: 16px;
}

.navigation-menu {
  position: relative;
  background-color: transparent;
}

.main-menu {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 0;
  background-color: #198b52; 
  width: 100%;
  min-height: 48px;
}

.menu-item {
  flex: 1;
  padding: 12px 20px;
  background: none;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: white;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  box-shadow: none;
}

.menu-item.promo-button {
  flex: 1.5;
  background-color: #ffd700;
  color: #2b2b2b;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 0 !important;
  box-shadow: none !important;
}

.menu-item.promo-button:hover,
.menu-item.promo-button.active {
  background-color: #f0c200;
}

.menu-item:last-child {
  border-right: none;
}

.menu-item:hover,
.menu-item.active {
  background-color: #116d3f;
}

.menu-arrow {
  margin-left: auto;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.menu-item:hover .menu-arrow,
.menu-item.active .menu-arrow {
  opacity: 1;
}

/* Estilos para categorías móviles */
.mobile-categories-list {
  display: none;
}

.mobile-category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 12px 40px;
  text-decoration: none;
  color: #333;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.2s ease;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
}

.mobile-category-item:hover,
.mobile-category-item.active {
  background-color: #e3f2fd;
  text-decoration: none;
  color: #357abd;
}

.mobile-category-item.has-subcategory {
  font-weight: 600;
}

.mobile-category-item svg {
  pointer-events: none;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
}

.submenu-content {
  display: flex;
  position: relative;
  min-height: 400px;
}

.categories-column {
  width: 200px;
  background-color: #f9f9f9;
  border-right: 1px solid #eee;
  padding: 0;
  flex-shrink: 0;
  max-height: 400px;
  overflow-y: auto;
  position: relative;
  
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}


.categories-column::-webkit-scrollbar {
  display: none;
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s ease;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  position: relative;
}

.category-item:hover, .category-item.active {
  background-color: #e3f2fd; 
  text-decoration: none;
  color: #357abd; 
}

.category-item.has-subcategory {
  font-weight: 600;
}

.subcategory-arrow {
  opacity: 0.6;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.category-item:hover .subcategory-arrow, .category-item.active .subcategory-arrow {
  opacity: 1;
}

.content-area {
  flex: 1;
  background-color: #f5f5f5;
  position: relative;
}

.default-content {
  padding: 20px;
}

.subcategories-panel {
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  padding: 20px;
  overflow-y: auto;
  animation: slideInRight 0.2s ease-out;
  border-left: 1px solid #eee;
  
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}


.subcategories-panel::-webkit-scrollbar {
  display: none;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.subcategory-title {
  font-size: 18px;
  font-weight: 700;
  color: #2b2b2b;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #28b935;
  font-family: 'Open Sans', sans-serif;
}

.clickeable-main-title {
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  padding: 4px 8px;
  border-radius: 4px;
}

.clickeable-main-title:hover {
  background-color: rgba(40, 185, 53, 0.1);
  color: #1e7e34;
  transform: translateX(2px);
}

.clickeable-main-title:active {
  transform: translateX(1px);
  background-color: rgba(40, 185, 53, 0.2);
}

.subcategory-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.subcategory-brand {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  background-color: #f8f9fa;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  border: 1px solid transparent;
}

.subcategory-brand:hover {
  background-color: #28b935;
  color: white;
  text-decoration: none;
  transform: translateX(5px);
  border-color: #28b935;
}

.accessories-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.accessory-group {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 16px;
}

.accessory-group:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.accessory-group-title {
  font-size: 14px;
  font-weight: 700;
  color: #28b935;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Open Sans', sans-serif;
}

.clickeable-category {
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  padding: 4px 8px;
  border-radius: 4px;
}

.clickeable-category:hover {
  background-color: rgba(40, 185, 53, 0.1);
  color: #1e7e34;
  transform: translateX(2px);
}

.clickeable-category:active {
  transform: translateX(1px);
  background-color: rgba(40, 185, 53, 0.2);
}

.accessory-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
}

.accessory-item {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #495057;
  background-color: #f8f9fa;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 13px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  border: 1px solid transparent;
  line-height: 1.3;
}

.accessory-item:hover {
  background-color: #e3f2fd;
  color: #1976d2;
  text-decoration: none;
  transform: translateX(3px);
  border-color: #e3f2fd;
}

.promo-bar {
  background: linear-gradient(135deg, #8e24aa 0%, #6a1b9a 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

.promo-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s ease;
  font-family: 'Open Sans', sans-serif;
  gap: 1px;
}

.promo-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
}

.promo-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.mongepay-brand {
  color: #4caf50;
  font-weight: 700;
}

.promo-icon {
  width: 16px;
  height: 16px;
  color: #4caf50;
}

.promo-subtitle {
  font-size: 11px;
  font-weight: 400;
  opacity: 0.9;
  text-align: center;
}

.mobile-subcategories {
  display: none;
}

@media (max-width: 915px) {
  .app-header {
    flex-wrap: wrap;
    padding: 12px 10px;
    row-gap: 3px; 
  }
  h1 { order: 1; font-size: 1.5rem; }
  .logo { height: 45px; }
  .logo-section { margin-right: auto; }
  .header-icons { order: 2; }
  form.search-container { order: 3; width: 100%; max-width: none; margin-top: 8px; }
}

@media (max-width: 768px) {
  .app-header {
    padding: 8px 16px;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
  }

  .hamburger-header { 
    display: flex;
    order: 1;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .logo-section {
    order: 2;
    margin: 0;
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  .header-icons {
    order: 3;
    gap: 6px;
    margin-left: auto;
  }

  .search-button-mobile {
    display: block;
  }

  .search-container {
    display: none !important;
  }

  .profile-name,
  .cart-text {
    display: none;
  }

  .user-button,
  .cart-button {
    padding: 6px;
    border-radius: 50%;
    min-width: 36px;
    min-height: 36px;
    justify-content: center;
  }

  .mobile-menu-container {
    display: none;
    max-height: 80vh;
    overflow-y: auto;

    scrollbar-width: none;
    -ms-overflow-style: none; 
  }
  
  .mobile-menu-container::-webkit-scrollbar {
    display: none;
  }
  
  .mobile-menu-container.open {
    display: block;
  }

  .main-menu { 
    display: none; 
    flex-direction: column; 
    align-items: stretch;
    max-height: 70vh;
    overflow-y: auto;
    
    scrollbar-width: none; 
    -ms-overflow-style: none; 
  }
  

  .main-menu::-webkit-scrollbar {
    display: none;
  }
  
  .main-menu.open { 
    display: flex; 
  }

  .menu-item {
    justify-content: flex-start;
    padding: 14px 16px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    text-align: left;
  }
  
  .menu-item:last-child { 
    border-bottom: none; 
  }

  .submenu { 
    display: none;
  }
  
  .mobile-categories-list {
    display: block;
  }
  
  .mobile-category-item {
    padding-left: 30px;
  }
  
  
  .submenu-content { 
    flex-direction: column; 
    position: static;
    max-height: 60vh;
    overflow-y: auto;
    

    scrollbar-width: none; 
    -ms-overflow-style: none;
  }
  

  .submenu-content::-webkit-scrollbar {
    display: none;
  }
  
  .categories-column { 
    width: 100%; 
    border-right: none; 
    border-bottom: none;
    max-height: none;
    overflow-y: visible;
  }


  .subcategories-panel {
    display: none;
  }

  .mobile-subcategories {
    display: block;
    background-color: #f0f8ff;
    border-left: 3px solid #28b935;
    margin: 0;
    animation: slideDown 0.3s ease-out;
    max-height: 300px;
    overflow-y: auto;
  
    scrollbar-width: none; 
    -ms-overflow-style: none;
  }
  

  .mobile-subcategories::-webkit-scrollbar {
    display: none;
  }

  .mobile-subcategory-content {
    padding: 8px 0;
  }

  .mobile-subcategory-title {
    display: none;
  }

  .mobile-subcategory-item {
    display: block;
    padding: 8px 20px 8px 60px;
    text-decoration: none;
    color: #495057;
    background-color: transparent;
    border-radius: 0;
    margin-bottom: 1px;
    transition: all 0.2s ease;
    font-size: 13px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    border: none;
    border-bottom: 1px solid #e9ecef;
  }

  .mobile-subcategory-item:hover {
    background-color: #e3f2fd;
    color: #1976d2;
    text-decoration: none;
    transform: none;
  }

  .mobile-accessory-group {
    margin: 0;
  }

  .mobile-accessory-group-title {
    font-size: 11px;
    font-weight: 600;
    color: #28b935;
    margin: 8px 0 4px 0;
    padding: 4px 20px 0 50px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    font-family: 'Open Sans', sans-serif;
    background-color: rgba(40, 185, 53, 0.1);
  }
  
  .mobile-accessory-group-title.clickeable-category {
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .mobile-accessory-group-title.clickeable-category:hover {
    background-color: rgba(40, 185, 53, 0.2);
    color: #1e7e34;
  }
  
  .mobile-accessory-group-title.clickeable-category:active {
    background-color: rgba(40, 185, 53, 0.3);
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }
    to {
      opacity: 1;
      max-height: 500px;
      overflow: visible;
    }
  }
}

@media (max-width: 480px) {
  h1 { font-size: 1.3rem; }
  .logo { height: 40px; }
  .header-icons { gap: 4px; }
}
</style>