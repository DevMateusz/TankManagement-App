<template>
  <div class="screen">
    <nav class="nav">
      <div class="nav__container">
        <div class="nav__menu">
          <h3><router-link :style="route.path=='/tanks' ? 'background-color: var(--black-soft)' : ''"  class="nav__button" :to="{name: 'Tanks'}">Tanks</router-link></h3>
        </div>
        <img class="nav__logo" src="../assets/LogoLight.png" alt="light tank logo">
        <div class="nav__user">
          <div class="nav__user--information">
            <h2 class="user--name">Andrzej duda</h2>
            <h5 class="user--email">asdmkasnfvi@sdd.pl</h5>
          </div>
          <button @click="logout" class="nav__user--logout">
            <Logout />
          </button>
        </div>
      </div>
    </nav>
    <header class="header">
      <div class="header__container">
        <h1 class="header--title">Tanks</h1>
        <slot name="header">asdas</slot>
      </div>
    </header>
  </div>
</template>

<script setup>
import Logout from './icons/Logout.vue'
import { useRoute } from 'vue-router';
const route = useRoute();

function logout() {
  alert('logout!!!')
}

</script>

<style scoped>
.header{
  background-color: var(--white);
  box-shadow: var(--black) 0px 0px 10px;
  height: 60px;
}
.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0px 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}
.header--title{
  font-weight: 600;
}

.screen{
  height: 100vh;
  width: 100%;
}
.nav{
  background-color: var(--black);
  height: 90px;
}
.nav__menu, .nav__user, .nav__user--logo{
  display: flex;
  align-items: center;
}
.user--name, .user--email{
  text-align: center;
}
.nav__button{
  padding: 6px 15px;
  border-radius: 10px;
  cursor: pointer;
}
.nav__button:hover{
  background-color: #27272a;
}

.nav__logo{
  height: 100%;
}
.nav__user{
  display: flex;
  gap: 10px;
}

.nav__container{
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 0px 10px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  color: var(--white);
}

</style>