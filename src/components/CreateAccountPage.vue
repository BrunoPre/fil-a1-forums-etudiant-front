<template>
  <div class="login-parent-container">
    <div class="login-child-container">
      <h1>Bienvenue !</h1>
      <h2>Créer un compte</h2>
      <div class="form-container">
        <div class="icon">
          <img :src="logInIconPath" />
        </div>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          v-model="pseudo"
          required
        />
      </div>
      <div class="form-container">
        <div class="icon">
          <img :src="schoolIconPath" />
        </div>
        <input
          type="text"
          list="school-list"
          v-model="selectedSchool"
          placeholder="Votre école (optionnel)"
        />
        <datalist id="school-list">
          <option v-for="school in schools" :key="school" :value="school.name">
            {{ school.name }}
          </option>
        </datalist>
      </div>
      <br />
      <div class="form-container">
        <div class="icon">
          <img :src="passwordIconPath" />
        </div>
        <input
          type="password"
          placeholder="Mot de passe"
          v-model="password"
          autocomplete="current-password"
          id="password-input-0"
          required
        />
        <div class="icon2">
          <img
            :src="hidePasswordIconPath"
            @click="changePasswordDisclosureState(0)"
            v-if="hidePassword[0]"
          />
          <img
            :src="revealPasswordIconPath"
            @click="changePasswordDisclosureState(0)"
            v-else
            rel="preload"
          />
        </div>
      </div>
      <div class="form-container">
        <div class="icon">
          <img :src="passwordIconPath" />
        </div>
        <input
          type="password"
          placeholder="Confirmez votre mot de passe"
          v-model="confirmPassword"
          autocomplete="current-password"
          id="password-input-1"
          required
        />
        <div class="icon2">
          <img
            :src="hidePasswordIconPath"
            @click="changePasswordDisclosureState(1)"
            v-if="hidePassword[1]"
          />
          <img
            :src="revealPasswordIconPath"
            @click="changePasswordDisclosureState(1)"
            v-else
            rel="preload"
          />
        </div>
      </div>
      <router-link :to="loginRoute" class="register"
        >Déjà un compte ? Connectez-vous</router-link
      >
      <div style="padding-top: 5vh"></div>
      <div class="login-button" v-on:click="postLogIn">Se connecter</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      pseudo: null,
      selectedSchool: null,
      password: null,
      confirmPassword: null,
      logInIconPath: require("./../assets/login/profilePicLoginIcon.svg"),
      schoolIconPath: require("./../assets/school.svg"),
      passwordIconPath: require("./../assets/login/passwordIcon.svg"),
      revealPasswordIconPath: require("../assets/login/revealPasswordIcon.svg"),
      hidePasswordIconPath: require("../assets/login/undisclosePasswordIcon.svg"),
      loginRoute: "/login",
      hidePassword: [true, true],
      schools: [
        {
          id: 12,
          name: "IMT Atlantique",
        },
        {
          id: 69,
          name: "Polytech Nice",
        },
        {
          id: 1,
          name: "IUT de Lens",
        },
        {
          id: 292049,
          name: "Centrale Nantes",
        },
      ],
    };
  },
  methods: {
    changePasswordDisclosureState(i) {
      console.log("password-input-" + i.toString());
      let x = document.getElementById("password-input-" + i.toString());
      if (x.type === "password") {
        this.hidePassword[i] = false;
        x.type = "text";
      } else {
        this.hidePassword[i] = true;
        x.type = "password";
      }
    },
    postLogIn() {
      let school = this.schools.find(this.selectedSchool);
      if (school === null || this.password !== this.confirmPassword) {
        return;
      }
      //TODO: authentication
    },
  },
};
</script>

<style>
.page-content {
  margin: 0;
}
</style>

<style scoped>
.login-parent-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". login-child-container login-child-container . .";
}

.login-child-container {
  display: grid;
  grid-area: login-child-container;
  text-align: center;
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

h1 {
  font-weight: 700;
  font-size: 2rem;
  color: #6a8bff;
}

h2 {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 2vh;
}

.form-container {
  background: #f5f8ff;
  resize: none;
  border: none;
  border-radius: 5px;
  color: #446dff;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "icon input icon2";
  margin-bottom: 2vh;
}

input {
  grid-area: input;
  border: none;
  outline: none;
  background: #f8f9ff;
  color: #446dff;
  font-size: 1rem;
  height: 6vh;
}

input::placeholder {
  color: #6a8bff;
  font-size: 1rem;
}

.icon {
  grid-area: icon;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon2 {
  grid-area: icon2;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

img {
  align-self: center;
  text-align: center;
}

.register {
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #b7b7b7;
}

.login-button {
  background: rgba(106, 139, 255, 0.6);
  border: none;
  border-radius: 2px;
  padding: 12px 23px;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  /* text attributes */
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  transition: 0.2s;
}

.login-button:hover {
  background-color: #6a8bff;
}

.school datalist {
  width: 100%;
  height: 6vh;
  background: #f5f8ff;
  border: none;
  font-size: 1rem;
  color: #446dff;
}
</style>
