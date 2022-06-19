<template>
  <div class="create-question">
    <textarea
      v-model="question"
      :placeholder="placeholder_ecrire_msg_ici"
      class="question-box"
      required
    ></textarea>
    <textarea
      v-model="description"
      :placeholder="placeholder_ecrire_description_ici"
      class="description-box"
      required
    ></textarea>
    <button
      @click="(event) => submit(question, description, event)"
      class="button-submit"
    >
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
      question: "",
      description: "",
      placeholder_ecrire_msg_ici: "Ecrivez votre question ici...",
      placeholder_ecrire_description_ici:
        "Ecrivez la description de votre question (facultative)",
      reply_label: "Poster",
    };
  },
  methods: {
    submit(question: string, description: string, event: Event) {
      // Submits a message
      if (event && !question) {
        // TODO: add more UI elements
        window.alert("Veuillez écrire une question avant de l'envoyer");
      } else if (event) {
        // TODO: post message
        window.alert("Question postée !");
        window.location.reload();
      } else {
        // TODO: exception handling
        window.alert("Erreur : le message n'a pas pu être envoyé");
      }
    },
  },
  //mounted() {},
});
</script>

<style scoped>
.create-question {
  padding-top: 3vh;
  /* avoid submit button to float on the first question card */
  overflow: hidden;
}

textarea {
  background: #f8f9ff;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  border-radius: 5px;
  padding: 10px 15px 0;
  color: #446dff;
  border: none;
}

textarea::placeholder {
  color: #6a8bff;
}

.question-box {
  /* TODO: force no bottom padding */
}

.description-box {
  height: 10vh;
}

.button-submit {
  float: right;
  background: rgba(106, 139, 255, 0.6);
  border: none;
  border-radius: 2px;
  padding: 8px 23px;
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
