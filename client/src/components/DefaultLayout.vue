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
            <h2 class="user--name">{{ user.fullName }}</h2>
            <h5 class="user--email">{{ user.email }}</h5>
          </div>
          <button @click="logout" class="nav__user--logout">
            <Logout />
          </button>
        </div>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script setup>
import Logout from './icons/Logout.vue'
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();

const user = computed(() => store.state.user.data);

function logout() {
  store.commit('logout')
  store.commit("notify", {
    type: "success",
    message: "You have been correctly logged out",
  });
}

</script>

<style scoped>


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
  margin-left: 8%;
  height: 100%;
  display: none;
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

@media (min-width: 768px) {
  .nav__logo{
    display: inherit;
  }
}

</style>