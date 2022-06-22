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
    <div class="categories">
      <div class="categories-container" v-if="!moreCategories">
        <button
          v-for="categorie in categories.slice(0, 4)"
          :key="categorie"
          @click="updateSelectedCategories(categorie)"
          :class="
            selectedCategories.includes(categorie)
              ? 'selected-categorie'
              : 'categorie-button'
          "
        >
          {{ categorie }}
        </button>
      </div>
      <div class="categories-container" v-else>
        <button
          v-for="categorie in categories"
          :key="categorie"
          @click="updateSelectedCategories(categorie)"
          :class="
            selectedCategories.includes(categorie)
              ? 'selected-categorie'
              : 'categorie-button'
          "
        >
          {{ categorie }}
        </button>
      </div>
      <div class="more-categories">
        <p v-if="moreCategories === false" @click="moreCategories = true">
          Montrer + de catégories ↓
        </p>
        <p v-else @click="moreCategories = false">Montrer - de catégories ↑</p>
      </div>
    </div>
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
    categories: Array,
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
        categories: [],
      },
      placeholder_ecrire_msg_ici: "Ecrivez votre question ici...",
      placeholder_ecrire_description_ici:
        "Ecrivez la description de votre question (facultative)",
      reply_label: "Poster",
      selectedCategories: [],
      moreCategories: false,
    };
  },
  methods: {
    submitQuestion: function (event) {
      // Submits a message
      if (event) {
        // TODO: post message
        // TODO: Do dynamic or at least a better validation
        if (this.question.title === "") {
          return;
        }
        this.question.categories = [...this.selectedCategories];
        this.$emit("newQuestion", this.question);
        this.question = "";
        this.selectedCategories = [];
        this.moreCategories = false;
        window.alert("Question postée !");
        //window.location.reload();
      } else {
        // TODO: exception handling
        window.alert("Erreur : le message n'a pas pu être envoyé");
      }
    },
    updateSelectedCategories(categorie) {
      if (this.selectedCategories.includes(categorie)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== categorie
        );
      } else {
        this.selectedCategories.push(categorie);
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
  margin-bottom: 1vh;
}

textarea::placeholder {
  color: #6a8bff;
}

textarea:focus {
  outline: none;
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

.categories {
  margin-top: 0;
  margin-bottom: 2vh;
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vh;
  row-gap: 0.5vw;
}

.categorie-button {
  background-color: #f8f9ff;
  color: #6a8bff;
}

.categorie-button:hover {
  background-color: #c9d1ff;
}

.categories p {
  color: #6a8bff;
  font-weight: 500;
}

.selected-categorie {
  background-color: #6a8bff;
  color: white;
}

.categorie-button,
.selected-categorie {
  border: none;
  font-size: 100%;
  font-weight: 500;
  border-radius: 5px;
  padding: 0.7vh 1vw;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.more-categories {
  cursor: pointer;
  margin-left: 0.1vw;
}

.more-categories p {
  font-weight: 300;
}
</style>
