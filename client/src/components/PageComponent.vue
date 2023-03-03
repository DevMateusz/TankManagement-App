<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header--title">{{ title }}</h1>
      <div>
        
        <slot name="header"></slot>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="main__container">
      <slot></slot>
    </div>
  </main>
  

</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style scoped>
.header{
  background-color: var(--white);
  box-shadow: var(--black) 0px 0px 10px;
  height: 60px;
}
.main{
background-color: var(--dirty-white);
box-shadow: var(--black) 0px 5px 10px;
min-height: 100vh;
}
.header__container, .main__container{
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
</style>
