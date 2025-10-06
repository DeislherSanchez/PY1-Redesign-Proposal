<template>
  <div class="page-container">
    <Header/>
    
    <main class="content-wrapper">

      <div class="form-wrapper">

        <div class="form-container">
          <h2 class="form-title">Iniciar Sesión</h2>
          <p class="form-subtitle">Ingresa tus credenciales para acceder</p>
          
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Correo Electrónico <span class="required">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                placeholder="ejemplo@correo.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="password">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Contraseña <span class="required">*</span>
              </label>
              <div class="password-input-wrapper">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  id="password" 
                  v-model="formData.password"
                  placeholder="••••••••"
                  required
                >
                <button 
                  type="button" 
                  class="toggle-password"
                  @click="showPassword = !showPassword"
                >
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-options">
              <div class="form-group form-group-checkbox">
                <input type="checkbox" id="remember" v-model="formData.remember">
                <label for="remember">Recordarme</label>
              </div>
              <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>

            <div class="form-group">
              <button type="submit" class="submit-btn">INICIAR SESIÓN</button>
            </div>
          </form>

          <div class="divider">
            <span>O</span>
          </div>

          <div class="social-login">
            <button type="button" class="social-btn google-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar con Google
            </button>

            <button type="button" class="social-btn facebook-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continuar con Facebook
            </button>
          </div>

          <div class="register-link">
            <p>¿No tienes cuenta? <router-link to="/Registro">Regístrate aquí</router-link></p>
          </div>
        </div>

      </div>

    </main>
    <Benefits/>
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Benefits from '@/components/benefits.vue';

const router = useRouter();
const showPassword = ref(false);

const formData = ref({
  email: '',
  password: '',
  remember: false
});

const handleLogin = () => {
  // Aquí iría la lógica de autenticación
  console.log('Login:', formData.value);
  // Ejemplo: router.push('/');
};
</script>



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
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 2rem;
}

.form-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem;
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

.form-group label svg {
  vertical-align: middle;
  margin-right: 5px;
}

.form-group .required {
  color: red;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
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
.form-group input[type="email"]:focus,
.form-group input[type="password"]:focus {
  border-bottom-color: #28a745;
}

.password-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input-wrapper input {
  padding-right: 45px;
}

.toggle-password {
  position: absolute;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.toggle-password:hover {
  color: #28a745;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.form-group-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.form-group-checkbox input[type="checkbox"] {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}

.form-group-checkbox label {
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
}

.forgot-password {
  color: #28a745;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #1e7e34;
  text-decoration: underline;
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
  width: 100%;
}

.submit-btn:hover {
  background-color: #218838;
}

.divider {
  position: relative;
  text-align: center;
  margin: 28px 0;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #e0e0e0;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: white;
  padding: 0 12px;
  color: #999;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: #f8f9fa;
  border-color: #ccc;
  transform: translateY(-2px);
}

.register-link {
  text-align: center;
  margin-top: 24px;
  font-size: 0.95rem;
  font-family: 'Open Sans', sans-serif;
}

.register-link p {
  color: #666;
  margin: 0;
}

.register-link a {
  color: #28a745;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

.register-link a:hover {
  color: #1e7e34;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .content-wrapper {
    margin-top: 150px;
  }

  .form-wrapper {
    padding: 30px 20px;
  }

  .form-title {
    font-size: 1.6rem;
  }

  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    margin-top: 150px;
  }

  .form-wrapper {
    width: 95%;
    padding: 20px 15px;
  }

  .form-title {
    font-size: 1.4rem;
  }
}
</style>