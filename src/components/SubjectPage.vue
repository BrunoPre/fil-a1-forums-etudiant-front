<template>
  <div>
    <div class="path">
      <p>Ecoles / IMT Atlantique</p>
    </div>
    <div class="container">
      <div class="description-container">
        <div class="question-title">
          <h1>{{ sujet }}</h1>
        </div>
        <div class="description" v-html="description"></div>
      </div>
      <div class="questions-container">
        <div class="question-header" :style="setPaddingQuestionHeader()">
          <h2>Questions les plus pertinentes</h2>
          <div
            v-if="!isAddQuestionButtonClicked"
            @click="clickAddQuestion"
            class="ask-question"
          >
            <a>Poser une question</a>
            <img src="../assets/new-question.svg" alt="" />
          </div>
          <div v-else @click="clickAddQuestion" class="ask-question">
            <a>Annuler</a>
            <img src="../assets/new-question-cancel.svg" alt="" />
          </div>
        </div>
        <CreateQuestion v-if="isAddQuestionButtonClicked"></CreateQuestion>
        <div class="questions">
          <div v-for="question in questions" :key="question">
            <QuestionCard :question="question"></QuestionCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard";
import CreateQuestion from "@/components/CreateQuestion";

export default {
  name: "SubjectPage",
  components: { QuestionCard, CreateQuestion },

  data() {
    return {
      sujet: "Formations",
      isAddQuestionButtonClicked: false,
      description: `
        <h2>Est dolorem</h2>
        <p>
          Ut omnis nostrum sit nihil Quis vel blanditiis dolor rem libero galisum. Aut veniam aliquid aut porro nemo
          et quibusdam atque? Aut ipsa rerum et adipisci aperiam aut impedit veritatis! Quo molestiae officiis 33 nulla
          et repellat libero nam accusamus voluptatem aut aspernatur possimus 33 nobis sunt. Est dolorem dolorem et
          excepturi explicabo Ea animi ut quaerat sapiente.
        </p>
        <br>
        <h2>Quo dolore</h2>
        <p>
          Ut omnis nostrum sit nihil Quis vel blanditiis dolor rem libero galisum. Aut veniam aliquid aut porro nemo
          et quibusdam atque? Aut ipsa rerum et adipisci aperiam aut impedit veritatis! Quo molestiae officiis 33 nulla
          et repellat libero nam accusamus voluptatem aut aspernatur possimus 33 nobis sunt. Est dolorem dolorem et
          excepturi explicabo Ea animi ut quaerat sapiente.
        </p>
        <br>
        <h2>Quo molestiae</h2>
        <p>
          Ut omnis nostrum sit nihil Quis vel blanditiis dolor rem libero galisum. Aut veniam aliquid aut porro nemo
          et quibusdam atque? Aut ipsa rerum et adipisci aperiam aut impedit veritatis! Quo molestiae officiis 33 nulla
          et repellat libero nam accusamus voluptatem aut aspernatur possimus 33 nobis sunt. Est dolorem dolorem et
          excepturi explicabo Ea animi ut quaerat sapiente.
        </p>
      `,
      questions: [
        {
          title: "Vestibulum ac condimentum metus ?",
          description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
          nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
          Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
          efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
          Aliquam vitae rutrum mi, a fermentum elit.`,
          user: "User Name",
          date: "24 Mai 2022",
          bestAnswer: null,
        },
        {
          title: "Vestibulum ac condimentum metus ?",
          description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
          nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
          Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
          efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
          Aliquam vitae rutrum mi, a fermentum elit.`,
          user: "User Name",
          date: "24 Mai 2022",
          bestAnswer: {
            content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus nulla. Vivamus tempus diam et
            ligula finibus, vitae feugiat ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
            ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh. Aliquam vitae
            rutrum mi, a fermentum elit.`,
            user: "Bip Bap",
            date: "24 Mai 2022",
            voteCount: 8,
          },
        },
      ],
    };
  },
  methods: {
    clickAddQuestion() {
      this.isAddQuestionButtonClicked = !this.isAddQuestionButtonClicked;
      console.log(
        "isAddQuestionButtonClicked = " + this.isAddQuestionButtonClicked
      );
    },
    setPaddingQuestionHeader() {
      return this.isAddQuestionButtonClicked ? "" : "margin-bottom: 6vh";
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 4vh;
  grid-template-areas: "description-container questions-container";
}
.description-container {
  grid-area: description-container;
}
.questions-container {
  grid-area: questions-container;
}

h1 {
  font-weight: bold;
  color: #6a8bff;
  font-size: 2.2rem;
  margin-top: 1vh;
  margin-bottom: 5vh;
}

.path {
  font-size: 0.9rem;
  font-weight: lighter;
}

.questions-container h2 {
  font-weight: 600;
  font-size: 1.6rem;
  margin: 0;
}

.question-header {
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-top: 2.2vh;
}

.ask-question {
  justify-self: end;
  align-self: end;
  cursor: pointer;
}
.ask-question img {
  vertical-align: middle;
  margin-left: 1vh;
}

.ask-question:hover img {
  filter: invert(64%) sepia(67%) saturate(4842%) hue-rotate(207deg)
    brightness(103%) contrast(101%);
}

.ask-question a {
  color: #6a8bff;
  font-weight: 500;
}

.ask-question:hover a {
  color: #4971ff;
}
</style>

<style>
.description h2 {
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 0;
  margin-top: 0;
}

.description p {
  font-size: 1.2rem;
  margin-top: 0.5vh;
}
</style>
