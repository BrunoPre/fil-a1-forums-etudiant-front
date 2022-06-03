<template>
  <div>
    <div class="path">
      <p>Ecoles / IMT Atlantique / Formations</p>
    </div>
    <div class="question-title">
      <h1>{{ question.title }}</h1>
    </div>
    <div class="question-infos">
      <div class="user-image">
        <img src="../assets/user_image_placeholder.png" alt="Profile picture" />
      </div>
      <p>
        Question posée par <span class="user-span">{{ question.user }}</span> le
        <span class="date-span">{{ question.date }}</span>
      </p>
    </div>
    <div class="question-description">{{ question.description }}</div>
    <div class="answers-container">
      <div class="answer-number">
        <p>{{ Object.keys(answers).length }} réponses</p>
      </div>
      <div class="answers">
        <div v-for="(answer, index) in answers" :key="answer">
          <AnswerToQuestion
            :answer-prop="answer"
            :isLastAnswer="isLastAnswer(index, answers.length)"
          ></AnswerToQuestion>
        </div>
        <reply-to-question-input></reply-to-question-input>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerToQuestion from "@/components/AnswerToQuestion";
import ReplyToQuestionInput from "@/components/ReplyToQuestionInput";
export default {
  name: "QuestionPage",
  components: { AnswerToQuestion, ReplyToQuestionInput },
  data() {
    return {
      question: {
        title: "Vestibulum ac condimentum metus ?",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
      nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
      Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
      efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
      Aliquam vitae rutrum mi, a fermentum elit.`,
        user: "User Name",
        date: "24 Mai 2022",
      },
      answers: [
        {
          content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.`,
          user: "Bip Bap",
          date: "24 Mai 2022",
          voteCount: 8,
        },
        {
          content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.`,
          user: "Bip Bap",
          date: "25 Mai 2022",
          voteCount: 2,
        },
        {
          content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.`,
          user: "Bip Bap",
          date: "26 Mai 2022",
          voteCount: 1,
        },
      ],
    };
  },
  methods: {
    isLastAnswer(index, lengthArray) {
      /* Checks if the `index`-th answer
      is the last one from the given length
      of the array of answers
       */
      return index === lengthArray - 1;
    },
  },
};
</script>

<style scoped>
.path {
  font-size: 0.9rem;
  font-weight: lighter;
}

.question-title {
  font-weight: bold;
  color: #6a8bff;
}

.question-title h1 {
  font-size: 2.2rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.question-infos {
  font-weight: lighter;
}

.question-infos p {
  display: inline-block;
}

.user-image {
  display: inline-block;
  vertical-align: middle;
}

.user-image img {
  width: 70%;
}

.user-span {
  color: #6a8bff;
}

.question-description {
  margin-top: 2.5vh;
  font-weight: 400;
  font-size: 1.2rem;
}

span {
  font-weight: 600;
}

.answers-container {
  margin-top: 6vh;
}

.answers-container p {
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
  padding: 0 0 1vh;
  border-bottom: #e2e2e2 solid 1px;
}
</style>
