<template>
  <div class="loading-container">
    <div class="loading">
      <Loading/>
      <h2>Loading</h2>
    </div>
  </div>
</template>

<script setup>
import Loading from './icons/Loading.vue'
</script>

<style scoped>
.loading-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
.loading{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

</style>
