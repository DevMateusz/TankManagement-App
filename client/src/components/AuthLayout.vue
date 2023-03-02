<template>
  <div class="screen">
    <div class="main" style="animation: fade-in-out 0.5s ease-in-out both">
      <img src="/src/assets/logo.webp" alt="Logo Post It" class="auth-link__logo" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.screen {
  max-width: 1280px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.auth-link__logo {
  height: 180px;
}
.main {
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
@media (min-width: 768px) {
  .main {
    margin-top: 50px;
    max-width: 500px;
  }
}
</style>
