<template>
  <div class="login-parent-container">
    <div class="login-child-container">
      <h1>Inscription</h1>
      <h2>Créez vos identifiants</h2>
      <div class="form-container">
        <div class="icon">
          <img :src="logInIconPath" />
        </div>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          v-model="user.username"
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
          v-model="user.password"
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
      <div style="padding-top: 5vh"></div>
      <div class="login-button" v-on:click="handleRegister">S'inscrire</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RegisterPage",
  data() {
    return {
      user: { username: "", password: "" },
      logInIconPath: require("./../assets/login/profilePicLoginIcon.svg"),
      passwordIconPath: require("./../assets/login/passwordIcon.svg"),
      revealPasswordIconPath: require("../assets/login/revealPasswordIcon.svg"),
      hidePasswordIconPath: require("../assets/login/undisclosePasswordIcon.svg"),
      hidePassword: true,
    };
  },
  computed: {
    ...mapGetters("auth", {
      getRegisterApiStatus: "getRegisterApiStatus",
    }),
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
    async handleRegister() {
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          window.alert(
            "Compte créé ! Connectez-vous à présent avec les identifiants créés."
          );
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.errorMessage = error.response.data.message || error.toString();
          this.statusCode = error.response.status || 400;
          if (this.statusCode === 400) {
            window.alert(
              "Nom d'utilisateur déjà utilisé ! Merci de réessayer avec un autre pseudo."
            );
          } else {
            window.alert("Erreur interne, merci de réessayer.");
          }
          this.successful = false;
          this.loading = false;
        }
      );
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
</style>
