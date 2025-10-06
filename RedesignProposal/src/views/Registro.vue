<template>
  <div class="page-container">
    <Header/>
    
    <main class="content-wrapper">

      <div class="form-wrapper">

        <div class="form-container">
          <h2 class="form-title">Crear Cuenta</h2>
          <p class="form-subtitle">Únete a la familia Monge</p>

          <form @submit.prevent="handleRegister">
            <!-- Información Personal -->
            <div class="form-section">
              <h3 class="section-title">Información Personal</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="nombre">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Nombre <span class="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="nombre" 
                    v-model="formData.nombre"
                    placeholder="Tu nombre"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="apellidos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Apellidos <span class="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="apellidos" 
                    v-model="formData.apellidos"
                    placeholder="Tus apellidos"
                    required
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="cedula">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                    <line x1="7" y1="8" x2="17" y2="8"></line>
                    <line x1="7" y1="12" x2="17" y2="12"></line>
                    <line x1="7" y1="16" x2="13" y2="16"></line>
                  </svg>
                  Cédula <span class="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="cedula" 
                  v-model="formData.cedula"
                  placeholder="0-0000-0000"
                  required
                >
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="telefono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Teléfono <span class="required">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    v-model="formData.telefono"
                    placeholder="0000-0000"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="fecha-nacimiento">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Fecha de Nacimiento <span class="required">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="fecha-nacimiento" 
                    v-model="formData.fechaNacimiento"
                    required
                  >
                </div>
              </div>
            </div>

            <!-- Información de Cuenta -->
            <div class="form-section">
              <h3 class="section-title">Información de Cuenta</h3>
              
              <div class="form-group">
                <label for="email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
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
                    placeholder="Mínimo 8 caracteres"
                    required
                    minlength="8"
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
                <div class="password-strength">
                  <div class="strength-bar" :class="passwordStrength"></div>
                </div>
                <p class="password-hint">La contraseña debe tener al menos 8 caracteres</p>
              </div>

              <div class="form-group">
                <label for="confirm-password">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Confirmar Contraseña <span class="required">*</span>
                </label>
                <div class="password-input-wrapper">
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    id="confirm-password" 
                    v-model="formData.confirmPassword"
                    placeholder="Repite tu contraseña"
                    required
                  >
                  <button 
                    type="button" 
                    class="toggle-password"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </button>
                </div>
                <p v-if="formData.confirmPassword && !passwordsMatch" class="error-message">
                  Las contraseñas no coinciden
                </p>
              </div>
            </div>

            <!-- Términos y Condiciones -->
            <div class="form-section">
              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="formData.acceptTerms" required>
                  <span>Acepto los <a href="#" target="_blank">Términos y Condiciones</a> <span class="required">*</span></span>
                </label>
              </div>

              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="formData.acceptMarketing">
                  <span>Deseo recibir ofertas y promociones de Tienda Monge</span>
                </label>
              </div>
            </div>

            <button type="submit" class="submit-btn" :disabled="!isFormValid">
              CREAR CUENTA
            </button>
          </form>

          <div class="divider">
            <span>O</span>
          </div>

          <div class="social-register">
            <button type="button" class="social-btn google-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Registrarse con Google
            </button>

            <button type="button" class="social-btn facebook-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Registrarse con Facebook
            </button>
          </div>

          <div class="login-link">
            <p>¿Ya tienes cuenta? <router-link to="/Login">Inicia sesión aquí</router-link></p>
          </div>

        </div>

      </div>

    </main>
    <Benefits/>
    <Footer/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Benefits from '@/components/benefits.vue';

const router = useRouter();
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const formData = ref({
  nombre: '',
  apellidos: '',
  cedula: '',
  telefono: '',
  fechaNacimiento: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  acceptMarketing: false
});

const passwordStrength = computed(() => {
  const password = formData.value.password;
  if (password.length === 0) return '';
  if (password.length < 6) return 'weak';
  if (password.length < 10) return 'medium';
  return 'strong';
});

const passwordsMatch = computed(() => {
  return formData.value.password === formData.value.confirmPassword;
});

const isFormValid = computed(() => {
  return formData.value.nombre &&
         formData.value.apellidos &&
         formData.value.cedula &&
         formData.value.telefono &&
         formData.value.fechaNacimiento &&
         formData.value.email &&
         formData.value.password.length >= 8 &&
         passwordsMatch.value &&
         formData.value.acceptTerms;
});

const handleRegister = () => {
  if (isFormValid.value) {
    // Aquí iría la lógica de registro
    console.log('Registro:', formData.value);
    // Ejemplo: router.push('/Login');
  }
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
  max-width: 800px;
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

.form-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #28a745;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #28a745;
  font-family: 'Open Sans', sans-serif;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
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

.required {
  color: red;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group input[type="tel"],
.form-group input[type="date"] {
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
.form-group input[type="password"]:focus,
.form-group input[type="tel"]:focus,
.form-group input[type="date"]:focus {
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

.password-strength {
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.strength-bar {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.strength-bar.weak {
  width: 33%;
  background: #dc3545;
}

.strength-bar.medium {
  width: 66%;
  background: #ffc107;
}

.strength-bar.strong {
  width: 100%;
  background: #28b935;
}

.password-hint {
  font-size: 0.85rem;
  color: #666;
  font-family: 'Open Sans', sans-serif;
}

.error-message {
  font-size: 0.85rem;
  color: #dc3545;
  font-family: 'Open Sans', sans-serif;
}

.checkbox-group {
  margin-bottom: 15px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  color: #555;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-label a {
  color: #28a745;
  text-decoration: none;
  font-weight: 600;
}

.checkbox-label a:hover {
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
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  background-color: #218838;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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

.social-register {
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

.login-link {
  text-align: center;
  margin-top: 24px;
  font-size: 0.95rem;
  font-family: 'Open Sans', sans-serif;
}

.login-link p {
  color: #666;
  margin: 0;
}

.login-link a {
  color: #28a745;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

.login-link a:hover {
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

  .form-row {
    grid-template-columns: 1fr;
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

  .section-title {
    font-size: 1.1rem;
  }
}
</style>
