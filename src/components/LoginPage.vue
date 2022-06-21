<template>
  <div class="login-parent-container">
    <div class="login-child-container">
      <h1>Bienvenue !</h1>
      <h2>Renseignez vos identifiants</h2>
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
          id="password-input"
          required
        />
        <div class="icon2">
          <img
            :src="hidePasswordIconPath"
            @click="changePasswordDisclosureState"
            v-if="hidePassword"
          />
          <img
            :src="revealPasswordIconPath"
            @click="changePasswordDisclosureState"
            v-else
            rel="preload"
          />
        </div>
      </div>
      <div style="padding-bottom: 3vh"></div>
      <router-link :to="registerRoute" class="register"
        >Créer un compte</router-link
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
      password: null,
      logInIconPath: require("./../assets/login/profilePicLoginIcon.svg"),
      passwordIconPath: require("./../assets/login/passwordIcon.svg"),
      revealPasswordIconPath: require("../assets/login/revealPasswordIcon.svg"),
      hidePasswordIconPath: require("../assets/login/undisclosePasswordIcon.svg"),
      registerRoute: "/register",
      hidePassword: true,
    };
  },
  methods: {
    changePasswordDisclosureState() {
      var x = document.getElementById("password-input");
      if (x.type === "password") {
        this.hidePassword = false;
        x.type = "text";
      } else {
        this.hidePassword = true;
        x.type = "password";
      }
    },
    postLogIn() {
      //TODO: authentication
    },
  },
};
</script>

<style scoped>
.login-parent-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". login-child-container .";
}

.login-child-container {
  display: grid;
  grid-area: login-child-container;
  text-align: center;
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-weight: 700;
  font-size: 36px;
  color: #6a8bff;
}

h2 {
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
}

.form-container {
  background: #f8f9ff;
  resize: none;
  border: none;
  border-radius: 5px;
  color: #446dff;
  display: grid;
  grid-template-columns: 0.3fr 1.6fr 0.3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "icon input icon2";
}

input {
  grid-area: input;
  border: none;
  outline: none;
  background: #f8f9ff;
  height: 50px;
  color: #446dff;
}

input::placeholder {
  color: #6a8bff;
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
  font-size: 17px;
  font-weight: 400;
  color: white;
}
</style>
