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
        Question posée par
        <span class="user-span">{{ question.user }}</span> le
        <span class="date-span">{{ question.date }}</span>
      </p>
    </div>
    <div class="question-description">{{ question.description }}</div>
    <div class="question-categories">
      <div
        class="categorie"
        v-for="categorie in question.categories"
        :key="categorie"
      >
        {{ categorie }}
      </div>
    </div>
    <div class="answers-container">
      <div class="answer-number">
        <h3>{{ Object.keys(answers).length }} réponses</h3>
      </div>
      <div class="answers">
        <div v-if="answers.length === 0">
          <p class="no-answer">Aucune réponse pour l'instant ...</p>
        </div>
        <div v-for="(answer, index) in answers" :key="answer">
          <AnswerToQuestion
            :answer-prop="answer"
            :isLastAnswer="isLastAnswer(index, answers.length)"
            @delete-answer="deleteAnswer"
          ></AnswerToQuestion>
        </div>
        <reply-to-question-input
          @new-answer="newAnswer"
        ></reply-to-question-input>
      </div>
    </div>
    <div class="administration">
      <div class="answer-number">
        <h3>Administration</h3>
      </div>
      <button class="delete-question" @click="deleteQuestion">
        Supprimer la question
      </button>
    </div>
  </div>
</template>

<script>
import AnswerToQuestion from "@/components/AnswerToQuestion";
import ReplyToQuestionInput from "@/components/ReplyToQuestionInput";
import PostService from "@/services/post.service";
import Utils from "@/utils/Utils";
import ReplyService from "@/services/reply.service";
export default {
  name: "QuestionPage",
  components: { AnswerToQuestion, ReplyToQuestionInput },
  data: function () {
    return {
      question: {},
      answers: [],
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
    deleteAnswer(answer) {
      console.log(answer);
      this.answers = this.answers.filter((a) => a.id !== answer.id);
    },
    deleteQuestion() {
      window.alert("Question supprimée !");
    },
    newAnswer(answer) {
      let answerId = ReplyService.postAnswer(
        this.question.id,
        answer.user,
        answer.content
      ).then((ansId) => (answer.id = ansId));
      this.answers.push(answer);
      console.log(this.answers);
    },
    async setQuestion(questionId) {
      PostService.getPostByPostId(questionId)
        .then((postFetched) => {
          this.question.id = postFetched.id;
          this.question.date = Utils.convertTimestampToHumanReadable(
            postFetched.createdAt
          );
          this.question.user = postFetched.userName;
          this.question.title = postFetched.title;
          this.question.description = postFetched.content;
        })
        .catch((err) => {
          console.log(err);
          window.alert(
            "Erreur : la question n'a pu être chargée, veuillez réessayer"
          );
          history.back();
        });
    },
    async setAnswersByPostId(questionId) {
      ReplyService.getAnswersByPostId(questionId).then((ans) => {
        //TODO: translate date & map voteCount
        //ans = ans.map((a) => Utils.convertTimestampToHumanReadable(a.date));
        this.answers = ans;
      });
    },
  },
  async mounted() {
    await this.setQuestion(this.$route.params.id);
    await this.setAnswersByPostId(this.$route.params.id);
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

h3 {
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
  padding: 0 0 1vh;
  border-bottom: #e2e2e2 solid 1px;
}

.no-answer {
  margin-top: 5vh;
  margin-bottom: 5vh;
  color: #4971ff;
}

.administration {
  margin-top: 9vh;
}

.delete-question {
  margin-top: 2vh;
  padding: 1vh 2vw;
  font-size: 1rem;
  color: white;
  background-color: #ff7c94;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;
}

.delete-question:hover {
  background-color: #ff4869;
}

.question-categories {
  margin-top: 3vh;
}

.categorie {
  display: inline-block;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 5px;
  padding: 0.7vh 1vw;
  text-align: center;
  background-color: #f8f9ff;
  color: #6a8bff;
  margin-right: 1vw;
}
</style>
