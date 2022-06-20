<template>
  <div class="create-question">
    <textarea
      v-model="question.title"
      :placeholder="placeholder_ecrire_msg_ici"
      class="question-box"
      required
    ></textarea>
    <textarea
      v-model="question.description"
      :placeholder="placeholder_ecrire_description_ici"
      class="description-box"
    ></textarea>
    <button @click="(event) => submitQuestion(event)" class="button-submit">
      {{ reply_label }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReplyToQuestionInput",
  props: {
    questionProp: {
      title: String,
      description: String,
      user: String,
      date: String,
      voteCount: Number,
      bestAnswer: {
        content: String,
        user: String,
        date: String,
        voteCount: Number,
      },
    },
  },
  data() {
    return {
      question: {
        title: "",
        description: "",
        user: "User Name",
        date: new Date().getDate() + " Juin 2022",
        voteCount: 0,
        bestAnswer: null,
      },
      placeholder_ecrire_msg_ici: "Ecrivez votre question ici...",
      placeholder_ecrire_description_ici:
        "Ecrivez la description de votre question (facultative)",
      reply_label: "Poster",
    };
  },
  methods: {
    submitQuestion: function (event) {
      // Submits a message
      if (event) {
        // TODO: post message
        window.alert("Question postée !");
        this.$emit("newQuestion", this.question);
        this.question = null;
        //window.location.reload();
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
