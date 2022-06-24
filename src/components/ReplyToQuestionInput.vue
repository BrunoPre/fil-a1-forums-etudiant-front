<template>
  <h3 class="title-repondre">Votre réponse</h3>

  <div class="answer-div">
    <textarea
      v-model="answer.content"
      :placeholder="placeholder_ecrire_msg_ici"
      class="answer-box"
      required
    ></textarea>
    <button
      @click="(event) => submitAnswer(answer, event)"
      class="button-reply"
    >
      {{ reply_label }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ReplyToQuestionInput",
  computed: {
    ...mapGetters("auth", {
      getState: "getState",
    }),
  },
  data() {
    return {
      answer: {
        id: Math.floor(Math.random() * 10000), // TODO: remove it
        content: "",
        user: "",
        date: new Date().getDate() + " Juin 2022", // TODO: change it
        voteCount: 0,
      },
      placeholder_ecrire_msg_ici: "Ecrivez votre réponse ici...",
      reply_label: "Répondre",
    };
  },
  methods: {
    submitAnswer(message, event) {
      // Submits a message
      if (event && !message) {
        // TODO: add more UI elements
        window.alert("Veuillez écrire une réponse avant de l'envoyer");
      } else if (event) {
        // TODO: post message
        let ans = this.answer;
        ans.user = this.getState.user.username;
        this.$emit("newAnswer", ans);
        this.answer = "";
      } else {
        // TODO: exception handling
        window.alert("Erreur : la réponse n'a pas pu être envoyée");
      }
    },
  },
  //mounted() {},
});
</script>

<style scoped>
.answer-div {
  padding-top: 3vh;
  padding-left: 3em;
  padding-right: 1.5em;
}
.answer-box {
  width: 100%;
  height: 150px;
  padding: 10px 15px;
  margin: 8px 0;
  box-sizing: border-box;
  resize: none;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
}

.button-reply {
  float: right;
  background: rgba(106, 139, 255, 0.6);
  border: none;
  border-radius: 2px;
  color: white;
  padding: 13px 37px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  margin: 4px 2px;
  cursor: pointer;
}

.title-repondre {
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0 0 1vh;
  border-bottom: #e2e2e2 solid 1px;
  margin: 0;
}
</style>
