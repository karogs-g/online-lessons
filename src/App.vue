<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import LoginForm from './components/LoginForm.vue';
import SignupForm from './components/SignupForm.vue';
import AppSidebar from './components/AppSidebar.vue';
import { RouterView } from 'vue-router';
export default {
  components: {
    AppHeader,
    LoginForm,
    AppFooter,
    SignupForm,
    RouterView,
    AppSidebar
  }
}
</script>

<template>
  <div class="app" v-if="$route.name === 'home'">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <login-form></login-form>
  </div>

  <div class="app" v-if="$route.name !== 'home'">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="background-color: #211e22;">
          <!-- Левая колонка -->
          <app-sidebar></app-sidebar>
        </div>
        <div class="col py-3">
          <!-- Правая колонка -->
          <router-view></router-view>
        </div>
      </div>

    </div>
    <app-footer></app-footer>
  </div>
  <signup-form></signup-form>
</template>

<style scoped></style>
