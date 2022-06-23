<template>
  Login success!
  <br />
  Your id is : {{ currentUser }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginSuccess",
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
    }),
    currentUser() {
      return this.getState.user.username;
    },
  },
};
</script>

<style scoped></style>
