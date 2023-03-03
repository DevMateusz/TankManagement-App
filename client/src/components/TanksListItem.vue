<template>
  <div class="tank">
    <div class="header">
      <h1 class="header__flank-number">{{ tank.flankNumber }}</h1>
      <h6 class="header__primary-information">
        <p class="primary-information primary-information--producent">{{ tank.poducent }} -</p>
        <p class="primary-information primary-information--model">&nbsp;{{ tank.model }}&nbsp;</p>
        <p class="primary-information primary-information--year">{{ tank.vintage }}</p>
      </h6>
    </div>
    <div class="specification">
      <h3 class="specification__title">Specification:</h3>
      <h5 class="specification__element">
        <p class="element--name">Producent -</p>
        <p class="element--value">&nbsp;{{ tank.poducent }}</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Model -</p>
        <p class="element--value">&nbsp;{{ tank.model }}</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Modification -</p>
        <p class="element--value">&nbsp;{{ tank.actualModification }}</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Production year -</p>
        <p class="element--value">&nbsp;{{ tank.vintage }}</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Entry data -</p>
        <p class="element--value">&nbsp;{{ tank.entryDate }}</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Mileage -</p>
        <p class="element--value">&nbsp;{{ tank.mileage }} km</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Ammunition quantity -</p>
        <p class="element--value">&nbsp;{{ tank.ammunition }}</p>
      </h5>
      <h5 class="specification__element">
        <p class="element--name">Armor thickness&nbsp;-</p>
        <p class="element--value">&nbsp;{{ tank.armorThickness.join('-') }}</p>
      </h5>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'Tank', params:{id: tank._id}}" class="edit-button">
        <Edit/>Edit
      </router-link>
      <button @click="deleteVehicle" class="delete-button">
        <Delete/>
      </button>
    </div>
  </div>
</template>

<script setup>
import Delete from './icons/Delete.vue'
import Edit from './icons/Edit.vue'
const props = defineProps({
  tank: Object,
});

function deleteVehicle() {
  alert(`delete ${props.tank._id}`)
}
</script>

<style scoped>
.tank{
  background-color: var(--white);
  min-width: 200px;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: var(--black) 0px 0px 20px -10px;
}
.header__flank-number{
  font-weight: 700;
  font-size: 32px;
}
.header__primary-information{
  margin-top: -6px;
  display: flex;
}
.primary-information--producent{
  font-weight: 700;
}
.specification__title, .element--name{
  font-weight: 500;
}
.specification__element{
  display: flex;
}
.element--value{
  display: flex;
}
.actions{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.edit-button{
  background-color: var(--black);
  padding: 5px 20px;
  border-radius: 2px;
  color: wheat;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  transition: 0.1s;
}

.edit-button:hover{
  background-color: var(--slate-2);
}
</style>
