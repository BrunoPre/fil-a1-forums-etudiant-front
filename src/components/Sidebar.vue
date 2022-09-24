<template>
  <div class="sidebar">
    <div v-if="currentUser" class="profile">
      <div class="profile-picture">
        <img v-if="profilePicPath" :src="profilePicPath" alt="profilePic" />
        <i v-else class="bx bxs-user-circle" />
        <!-- just in case -->
      </div>
      <div class="profile-attributes">
        <div class="profile-attributes-username">
          {{ currentUser || "Login" }}
        </div>
        <div class="profile-attributes-school">{{ userSchool }}</div>
      </div>
    </div>
    <router-link v-else :to="logInRoute" class="login">
      <div>Login</div>
    </router-link>
    <div class="grid-buttons">
      <div
        v-for="button in buttons"
        :key="button.buttonName"
        class="grid-one-button"
      >
        <router-link :to="button.route" class="button-icon">
          <img
            v-if="button.iconPath"
            :src="require('./../assets/' + button.iconPath)"
            alt="{{button.buttonName}}"
          />
          <i v-else class="bx" :class="button.iconBoxIcon" />
        </router-link>
        <router-link :to="button.route" class="button-link">{{
          button.label
        }}</router-link>
      </div>
    </div>
    <div class="logout">
      <div class="grid-buttons">
        <div class="grid-one-button" v-if="currentUser" v-on:click="logOut">
          <img src="../assets/logout.svg" alt="logout" />
          <p class="button-link">Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ButtonSidebar } from "@/types/ButtonSidebar";
import { defineComponent } from "vue";
import buttonsJsonArray from "./../assets/buttonsSidebar.json";
import { mapGetters } from "vuex";
import { State } from "@/store/modules/auth.module";
import store from "@/store";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
    }),
    currentUser() {
      const s: State = (this as any).getState;
      console.log("username", s.user.username);
      return s.user.username;
    },
  },
  data() {
    return {
      buttons: new Array<ButtonSidebar>(),
      profilePicPath: "",
      userSchool: "",
      logInRoute: "/connexion",
    };
  },
  methods: {
    buttonsArray() {
      this.buttons = buttonsJsonArray as Array<ButtonSidebar>;
    },
    setProfile() {
      this.profilePicPath = require("./../assets/profilePic.png");
      this.userSchool = "IMT Atlantique";
    },
    logOut() {
      store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.buttonsArray();
    this.setProfile();
  },
});
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

.sidebar {
  display: grid;
  grid-template-rows: 15% 25% 50%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "profile"
    "grid-buttons"
    "..."
    "logout-button";
  grid-area: sidebar;
  background: #f5f8ff;
  height: 100vh;
  position: sticky;
  top: 0;
}

.profile {
  padding-left: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    "profile-picture profile-attributes profile-attributes"
    ". . .";
  grid-area: profile;
  color: black;
  text-decoration: none;
}

.login {
  grid-area: profile;
  color: black;
  text-decoration: none;
  align-self: center;
  justify-self: center;
  font-weight: 600;
  font-size: 1.3rem;
  color: #6a8bff;
}

.profile-picture {
  grid-area: profile-picture;
}

.profile-picture img {
  margin: auto;
  display: block;
  width: 60%;
}

.profile-attributes {
  grid-area: profile-attributes;
}

.profile-attributes-username {
  font-weight: 600;
  font-size: 1.3rem;
}

.profile-attributes-school {
  font-size: 1rem;
}

.grid-buttons {
  padding-left: 1em;
  display: grid;
  grid-template-rows: repeat(3, 18%);
  gap: 0px;
}

.grid-buttons img {
  margin: auto;
  display: block;
  height: auto;
  max-height: 100%;
}

.grid-one-button {
  display: grid;
  grid-template-columns: 0.5fr 1.2fr;
  gap: 0px;
  justify-content: center;
  align-content: center;
}

.button-icon {
  margin: auto;
  display: block;
  height: 100%;
  align-self: center;
}

.button-link {
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  align-self: center;
}

.logout {
  cursor: pointer;
  align-self: end;
}

.logout p {
  color: #ff7c94;
}
</style>
