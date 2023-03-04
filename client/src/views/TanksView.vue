<template>
  <PageComponent title="Tanks">
    <template v-slot:header>
      <router-link :to="{name: 'Tank'}" class="add-button">Add vehicle <Plus/></router-link>
    </template>
    <template v-slot:default>
      <Loading v-if="loading"/>
      <div v-else class="tank-list">
        <TanksListItem v-for="tank in tanks" :tank="tank"/>
      </div>
    </template>
  </PageComponent>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
import PageComponent from '../components/PageComponent.vue';
import TanksListItem from '../components/TanksListItem.vue';
import Plus from '../components/icons/Plus.vue'
import Loading from '../components/Loading.vue'

const tanks = computed(() => store.state.tanks.data);
const loading = computed(() => store.state.tanks.loading);

store.dispatch("getTanks");

</script>

<style scoped>
.tank-list{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 25px;
}
.add-button{
  border: 3px solid var(--black);
  padding: 0px 10px;
  border-radius: 3px;
  font-weight: 700;
  background-color: var(--white);
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
}
.add-button:hover{
  background-color: var(--black);
  color: var(--white);
}

@media (min-width: 768px) {
  .tank-list{
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .tank-list{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  
  }
}
</style>

