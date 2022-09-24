<template>
  <div class="login-parent-container">
    <div class="login-child-container">
      <h1>Welcome!</h1>
      <h2>Create an account</h2>
      <div class="form-container">
        <div class="icon">
          <img :src="logInIconPath" />
        </div>
        <input
          type="text"
          placeholder="Username"
          v-model="user.username"
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
          placeholder="Your school (optional)"
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
          placeholder="Password"
          v-model="user.password"
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
          placeholder="Confirm your password"
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
        >Have an account? Login</router-link
      >
      <div style="padding-top: 5vh"></div>
      <div class="login-button" v-on:click="postSignUp">S'inscrire</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      user: { username: "", password: "" },
      selectedSchool: null, // TODO: POST school to /api/register aswell
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
    postSignUp() {
      console.log(this.selectedSchool);
      let school = this.schools.find((e) => e.name === this.selectedSchool);
      console.log(school);
      if (school === null) {
        window.alert("Please give a school before continuing");
        return;
      }
      if (this.user.password !== this.confirmPassword) {
        window.alert("Passwords mismatch, please check them before continuing");
        return;
      }
      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          window.alert(
            "Account created! Please go ahead and login with your new credentials"
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
            window.alert("Username already taken! Please choose another one.");
          } else {
            window.alert("Internal issue, please try again.");
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

.school datalist {
  width: 100%;
  height: 6vh;
  background: #f5f8ff;
  border: none;
  font-size: 1rem;
  color: #446dff;
}
</style>
