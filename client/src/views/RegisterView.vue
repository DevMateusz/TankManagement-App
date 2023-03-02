<template>
  <h2 class="sign-up__heading">Register new president</h2>
  <p class="sign-up__auth-swap">
    Or
    <router-link :to="{ name: 'Login' }" class="sign-up__login-link">
      login to president's account
    </router-link>
  </p>
  <div
    v-if="error"
    class="sign-up__error"
    style="animation: fade-in-out 0.5s ease-in-out both"
  >
    {{ error }}
    <X class="sign-up__error-x" @click="error = ''" />
  </div>
  <form class="sign-up__form" @submit="register">
    <input type="hidden" name="remember" value="true" />
    <div class="sign-up__credentials-container">
      <AuthInput v-model="user.name" type="text" name="Full name">
        <User
          class="sign-up__credential-item-icon"
          :class="user.name ? 'sign-up__credential-item-icon--filled' : ''"
        />
      </AuthInput>
      <AuthInput v-model="user.email" type="email" name="Email address">
        <Mail
          class="sign-up__credential-item-icon"
          :class="user.email ? 'sign-up__credential-item-icon--filled' : ''"
        />
      </AuthInput>
      <div class="sing-up__credential-item-country credential-item">
        <Country
        class="sign-up__credential-item-icon"
        :class="user.country ? 'sign-up__credential-item-icon--filled' : ''"
        />
        <select required v-model="user.country" name="Country origin" class="sing-up__credential-item-country--list" :style="user.country ? 'color: #000000' : 'color: #808080'">
          <option value="">Country origin</option>
          <option  v-for="country in countryList" :value="country">{{ country }}</option>
        </select>
      </div>
       
      
      <AuthInput v-model="user.password" type="password" name="Password">
        <Lock
          class="sign-up__credential-item-icon"
          :class="user.password ? 'sign-up__credential-item-icon--filled' : ''"
        />
      </AuthInput>
      <AuthInput
        v-model="user.passwordConfirmation"
        type="password"
        name="Password confirmation"
      >
        <Lock
          class="sign-up__credential-item-icon"
          :class="
            user.passwordConfirmation ? 'sign-up__credential-item-icon--filled' : ''
          "
        />
      </AuthInput>
      <span
        class="sign-up__credential-item--password-strength"
        :style="[
          passwordStrength == 2
            ? 'background-color: orange'
            : '',
          passwordStrength == 3 ? 'background-color: green' : '',
          `width: ${passwordStrength * 33.3}%;`,
        ]"
      ></span>
      <div class="sign-up__atomic-state">
        <input
          id="atomic-state"
          name="atomic-state"
          type="checkbox"
          class="sign-up__atomic-state--checkbox"
          v-model="user.remember"
        />
        <label class="sign-up__atomic-state--text" fup="atomic-state">Own an atomic button</label>
      </div>
    </div>
    <div>
      <button
        class="sign-up__action-button"
        :class="loading ? 'sign-up__action-button--disable' : ''"
        :disabled="loading"
        type="submit"
      >
        <Loading v-if="loading" class="sign-up__action-button--loading" />
        Sign up
      </button>
    </div>
  </form>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import { ref, computed, reactive, watch } from "vue";
import AuthInput from "../components/AuthInput.vue";
import Loading from "../components/icons/Loading.vue";
import X from "../components/icons/X.vue";
import User from "../components/icons/User.vue";
import Lock from "../components/icons/Lock.vue";
import Mail from "../components/icons/Mail.vue";
import Country from "../components/icons/Country.vue";

const router = useRouter();

const user = reactive({
  name: "",
  email: "",
  country: "",
  password: "",
  passwordConfirmation: "",
});

const countryList = computed(() => store.state.countryList);

let error = ref("");
const loading = ref(false);
let passwordStrength = ref(0);

watch(
  () => user.password,
  function (newVal, oldVal) {
    passwordStrength.value = validatePassword(newVal);
  }
);

function validatePassword(password) {
  let strength = ref(0);
  if (/(?=(.*[0-9]){1,})/g.test(password)) {
    strength.value += 1;
  }
  if (/(?=(.*[!@#$%^&*()\-_+.]){1,})/g.test(password)) {
    strength.value += 1;
  }
  if (/.{6,}/g.test(password)) {
    strength.value += 1;
  }
  return strength.value;
}

function register(event) {
  event.preventDefault();

  if (passwordStrength.value >= 3) {
    if (user.password == user.passwordConfirmation) {
      error.value = "";
      loading.value = true;
      store
        .dispatch("register", user)
        .then(() => {
          loading.value = false;
          router.push({
            name: "Tanks",
          });
        })
        .catch((err) => {
          loading.value = false;
          error.value = err.response.data.message;
        });
    } else {
      error.value = "Passwords are not the same";
    }
  } else {
    error.value = "Password is too weak";
  }
}
</script>

<style scoped>
.sing-up__credential-item-country{
  font-size: 15px;
  border: none;
  background-color: var(--white-gray);
  border-radius: 12px;
  padding: 8px;
  padding-left: 50px;
  transition: 0.2s;
  width: 100%;
}
.sing-up__credential-item-country--list{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: -4px;
  font-size: 14px;
  color: #808080;
  height: fit-content;
}
option:not(:first-of-type) {
  color: black;
}
.credential-item:hover > .sign-up__credential-item-icon {
  transform: translateY(-10%);
}
.sign-up__credential-item-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 10px;
  color: var(--weak-gray);
  transition: 0.2s;
}
.sign-up__credential-item-icon--filled {
  color: var(--gray);
}
.sign-up__credential-item--password-strength {
  height: 4px;
  max-width: 96%;
  border-radius: 3px;
  margin: 0px 8px;
  background-color: var(--red-1);
  transform: translateY(-60%);
  transition: 0.2s;
}
.sign-up__heading {
  font-size: 30px;
  font-weight: 700;
  padding: 0px 20px;
  text-align: center;
}

.sign-up__login-link{
  color: var(--slate-2);
  transition: 0.1s;
  font-weight: 500;
}
.sign-up__login-link:hover {
  color: var(--slate-1);
}
.sign-up__error {
  background-color: var(--red-1);
  color: var(--white);
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  padding-right: 40px;
  position: relative;
}
.sign-up__error-x {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.1s;
}
.sign-up__error-x:hover {
  background-color: var(--red-2);
}
.sign-up__form {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
.sign-up__credentials-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sign-up__colors-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 8px;
}
.sign-up__color-item {
  width: 36px;
  height: 36px;
  border-radius: 40%;
  border: 3px solid var(--white-gray);
  appearance: none;
  transition: 0.2s;
  cursor: pointer;
}
.sign-up__color-item:checked,
.sign-up__color-item:checked:hover {
  border: 3px solid var(--current);
  appearance: none;
  transform: scale(130%);

  transition: 0.2s;
  cursor: pointer;
}

.sign-up__color-item:hover {
  transform: scale(110%);
}

.sign-up__action-button {
  height: 41px;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  background-color: var(--slate-1);
  color: var(--white);
  padding: 10px;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.1s;
}
.sign-up__atomic-state {
  display: flex;
  align-items: center;
}
.sign-up__atomic-state--checkbox {
  width: 30px;
  height: 30px;
  border-radius: 40%;
  border: 3px solid var(--white-gray);
  background-color: var(--white-gray);
  appearance: none;
  transition: 0.2s;
  cursor: pointer;
}
.sign-up__atomic-state--checkbox:checked {
  background-color: var(--slate-1);
}
.sign-up__atomic-state--text {
  margin-left: 10px;
}
.sign-up__action-button:hover {
  background-color: var(--slate-2);
}
.sign-up__action-button--disable:hover {
  cursor: not-allowed;
  background-color: var(--slate-3);
}
.sign-up__action-button--loading {
  height: 21px;
  width: 21px;
  margin-right: 5px;
}
</style>
