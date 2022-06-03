<template>
  <div class="title-repondre">Votre réponse</div>

  <div class="answer-div">
    <textarea
      v-model="message"
      :placeholder="placeholder_ecrire_msg_ici"
      class="answer-box"
      required
    ></textarea>
    <button @click="(event) => submit(message, event)" class="button-reply">
      {{ reply_label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReplyToQuestionInput",
  data() {
    return {
      message: "",
      placeholder_ecrire_msg_ici: "Ecrivez votre réponse ici...",
      reply_label: "Répondre",
    };
  },
  methods: {
    submit(message: string, event: Event) {
      // Submits a message
      if (event && !message) {
        // TODO: add more UI elements
        alert("Veuillez écrire un commentaire avant de l'envoyer");
      } else if (event) {
        // TODO: post message
        alert("Commentaire posté !");
      } else {
        // TODO: exception handling
        alert("Erreur : le message n'a pas pu être envoyé");
      }
    },
  },
  mounted() {},
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
}
</style>
