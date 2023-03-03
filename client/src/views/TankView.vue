<template>
  <PageComponent :title="route.params.id ? model.flankNumber : 'Create a vehicle'">
    <template v-slot:header>
      <div class="actions-container">
        <button v-if="route.params.id" class="delete-button">Delete</button>
        <button type="submit" form="tank" class="save-button">{{ route.params.id ? 'Update' : '&nbsp;Save&nbsp;' }}</button>
      </div>
    </template>
    <template v-slot:default>
      <div class="data-container">
        <form id="tank" class="data-form" @submit.prevent="saveVehicle">
          <div class="data-element">
            <label class="data-lable" for="flank-number">Flank number</label>
            <input required class="data-value" v-model="model.flankNumber" name="flank-number" id="flank-number" type="text">
          </div>
          <div class="data-element">
            <label class="data-lable" for="poducent">Poducent</label>
            <input required class="data-value" v-model="model.poducent" name="poducent" id="poducent" type="text">
          </div>
          <div class="data-element">
            <label class="data-lable" for="model">Model</label>
            <input required class="data-value" v-model="model.model" name="model" id="model" type="text">
          </div>
          <div class="data-element">
            <label class="data-lable" for="actual-modification">Modification</label>
            <input required class="data-value" v-model="model.actualModification" name="actual-modification" id="actual-modification" type="text">
          </div>
          <div class="data-element">
            <label class="data-lable" for="vintage">Vintage</label>
            <input required min="1900" :max="new Date().getFullYear()" class="data-value" v-model="model.vintage" name="vintage" id="vintage" type="number">
          </div>
          <div class="data-element">
            <label class="data-lable" for="entry-date">Entry date</label>
            <input required min="1970-01-01" :max="new Date().toISOString().split('T')[0]" class="data-value" v-model="model.entryDate" name="entry-date" id="entry-date" type="date">
          </div>
          <div class="data-element">
            <label class="data-lable" for="mileage">Mileage(km)</label>
            <input required min="0" class="data-value" v-model="model.mileage" name="mileage" id="mileage" type="number">
          </div>
          <div class="data-element">
            <label class="data-lable" for="ammunition">Ammunition</label>
            <input required class="data-value" v-model="model.ammunition" name="ammunition" id="ammunition" type="number">
          </div>
          <div class="data-element">
            <label class="data-lable" for="armor-thickness">Armor Thickness</label>
            <label class="data-lable--armor" for="armor-thickness-front">Front</label>
            <input required class="data-value--armor" v-model="model.armorThickness[0]" name="armor-thickness-front" id="armor-thickness-front" type="number">
            <label class="data-lable--armor" for="armor-thickness-flank">Flank</label>
            <input required class="data-value--armor" v-model="model.armorThickness[1]" name="armor-thickness-flank" id="armor-thickness-flank" type="number">
            <label class="data-lable--armor" for="armor-thickness-back">Back</label>
            <input required class="data-value--armor" v-model="model.armorThickness[2]" name="armor-thickness-back" id="armor-thickness-back" type="number">
          </div>
        </form>
      </div>
    </template>
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import { ref } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const model = ref({
  flankNumber: "",
  poducent: "",
  model: "",
  actualModification: "",
  vintage: 0,
  entryDate: null,
  mileage: 0,
  ammunition: 0,
  armorThickness: [0,0,0],
});

if (route.params.id) {
  store.dispatch("getTank", route.params.id).then((tank) => {
    model.value = {...JSON.parse(JSON.stringify(tank.data))}
  })
}
function valitadeValues() {

}

function deleteVehicle() {
  
}
function saveVehicle() {
  if(route.params.id){
    //update
  } else {
    //create
  }
}


</script>

<style scoped>
.data-container{
  width: 100%;
}
.data-lable{
  font-size: 15px;
  font-weight: 500;
}
.data-value{
  width: 100%;
  padding: 7px;
  border: var(--weak-gray) 1px solid;
  border-radius: 2px;
  font-size: 14px;
}
.data-element{
  display: flex;
  flex-direction: column;
}
.data-form{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.data-value--armor, .data-lable--armor{
  margin-left: 15px;
}
.data-lable--armor{
  font-weight: 500;
}

.delete-button, .save-button{
  padding: 2px 20px;
  font-weight: 500;
  font-size: 19px;
  transition: 0.2s;
  border-radius: 3px;
}
.save-button{
  padding: 1px 20px;
  border: 3px solid var(--black);
  background-color: var(--white);
  color: var(--black);
}
.save-button:hover{
  background-color: var(--black);
  color: var(--white);
}
.delete-button{
  background-color: var(--red-1);
}
.delete-button:hover{
  background-color: var(--red-2);
}
.actions-container{
  display: flex;
  gap: 10px;
}
</style>

