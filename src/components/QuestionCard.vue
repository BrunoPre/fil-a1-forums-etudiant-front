<template>
  <div class="question-card">
    <div class="question-container">
      <h2>{{ question.title }}</h2>
      <img
        v-if="!showQuestion"
        v-on:click="showQuestion = true"
        class="show-question-button"
        src="../assets/upvote-arrow.svg"
        alt=""
      />
      <img
        v-else
        v-on:click="showQuestion = false"
        class="hide-question-button"
        src="../assets/upvote-arrow.svg"
        alt=""
      />
      <div class="question-infos">
        <div class="user-image">
          <img
            src="../assets/user_image_placeholder.png"
            alt="Profile picture"
          />
        </div>
        <p>
          Question posée par
          <span class="user-span">{{ question.user }}</span> le
          <span class="date-span">{{ question.date }}</span>
        </p>
      </div>
      <div class="question-categories">
        <div
          class="categorie"
          v-for="categorie in question.categories"
          :key="categorie"
        >
          {{ categorie }}
        </div>
      </div>
      <div v-if="showQuestion">
        <div class="question-description">
          <p>{{ question.description }}</p>
        </div>
        <h3>Meilleures réponses</h3>
        <div class="best-answer-container" v-if="question.bestAnswer">
          <div class="vote-count">
            {{ question.bestAnswer.voteCount }}
          </div>
          <div class="answer">
            <div class="question-infos">
              <div class="user-image">
                <img
                  src="../assets/user_image_placeholder.png"
                  alt="Profile picture"
                />
              </div>
              <p>
                Réponse par
                <span class="user-span">{{ question.bestAnswer.user }}</span> le
                <span class="date-span">{{ question.bestAnswer.date }}</span>
              </p>
            </div>
            <div class="question-description">
              <p>{{ question.bestAnswer.content }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Aucune réponse pour le moment ...</p>
        </div>
        <div class="more">
          <!--TODO Rediriger vers page question-->
          <a href="http://localhost:8080/question">Montrer + de réponses →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    question: {
      title: String,
      user: String,
      date: String,
      voteCount: Number,
      bestAnswer: {
        content: String,
        user: String,
        date: String,
        voteCount: Number,
      },
      categories: Array,
    },
  },
  data() {
    return {
      showQuestion: false,
    };
  },
};
</script>

<style scoped>
.question-card {
  background-color: #f8f9ff;
  margin-top: 2vh;
  margin-bottom: 2vh;
  border-radius: 3px;
}
.question-container {
  margin-left: 3vh;
  margin-right: 3vh;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
}

.question-card h2 {
  color: #6a8bff;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  display: inline-block;
}

.show-question-button {
  transform: rotate(180deg);
}

.show-question-button,
.hide-question-button {
  display: inline-block;
  float: right;
  margin-top: 0.8vh;
  cursor: pointer;
}

.question-infos {
  margin-top: 0.5vh;
}

.question-infos p {
  display: inline-block;
  margin: 0;
  font-weight: 300;
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

span {
  font-weight: 600;
}

h3 {
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: #e2e2e2 solid 1px;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
}

.question-description {
  font-size: 1.1rem;
  margin-top: 3vh;
}

.question-description p {
  margin-top: 1vh;
}

.best-answer-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: "vote-count answer";
}

.vote-count {
  grid-area: vote-count;
  margin-left: 1.8vw;
  margin-right: 2vw;
  font-size: 1.4rem;
}

.answer {
  grid-area: answer;
}

.more {
  margin-bottom: 1vh;
}

.more a {
  color: #6a8bff;
  font-weight: 500;
  text-decoration: none;
}

.question-categories {
  display: inline-block;
  margin-top: 0.3vh;
}

.categorie {
  display: inline-block;
  font-size: 0.8rem;
  background-color: white;
  border-radius: 5px;
  padding: 0.3vh 0.5vw;
  margin-right: 1vw;
  font-weight: 500;
  color: #6a8bff;
  margin-bottom: 0.5vh;
}
</style>
