<template>
  <div>
    <div class="path">
      <p>Schools / IMT Atlantique</p>
    </div>
    <div class="container">
      <div class="description-container">
        <div class="question-title">
          <h1>{{ groupe.label }}</h1>
        </div>
        <div class="description" v-html="groupe.description"></div>
      </div>
      <div class="questions-container">
        <div class="question-header">
          <h2>Most relevant questions</h2>
          <div
            v-if="!isAddQuestionButtonClicked"
            @click="clickAddQuestion"
            class="ask-question"
          >
            <a>Ask a question</a>
            <img src="../assets/new-question.svg" alt="" />
          </div>
          <div v-else @click="clickAddQuestion" class="ask-question">
            <a>Cancel</a>
            <img src="../assets/new-question-cancel.svg" alt="" />
          </div>
        </div>
        <CreateQuestion
          v-if="isAddQuestionButtonClicked"
          @new-question="newQuestion"
          :categories="groupe.categories"
          :init-selected-category="selectedCategory"
        ></CreateQuestion>
        <div class="categories" v-if="!isAddQuestionButtonClicked">
          <div class="categories-container" v-if="!moreCategories">
            <!-- TODO: add slice(0,4) -->
            <button
              v-for="category in groupe.categories"
              :key="category"
              @click="updateCategory(category)"
              :class="
                selectedCategory.isEqual(category)
                  ? 'selected-category'
                  : 'category-button'
              "
            >
              {{ category.libelle }}
            </button>
          </div>
          <div class="categories-container" v-else>
            <button
              v-for="category in groupe.categories"
              :key="category"
              @click="updateCategory(category)"
              :class="
                selectedCategory.isEqual(category)
                  ? 'selected-category'
                  : 'category-button'
              "
            >
              {{ category.libelle }}
            </button>
          </div>
          <div class="more-categories">
            <p v-if="moreCategories === false" @click="moreCategories = true">
              Show more categories ↓
            </p>
            <p v-else @click="moreCategories = false">Show less categories ↑</p>
          </div>
        </div>
        <div class="questions">
          <div v-for="question in filteredQuestions" :key="question">
            <QuestionCard
              :question-prop="question"
              :category-name="selectedCategory.libelle"
            ></QuestionCard>
          </div>
        </div>
      </div>
    </div>
    <div class="administration">
      <div class="administration-header">
        <h3>Administration</h3>
      </div>
      <router-link
        :to="
          '/school/' +
          this.$route.params.id1 +
          '/subject/' +
          this.$route.params.id2 +
          '/edit'
        "
      >
        <button class="modify-school">Edit the subject</button>
      </router-link>
      <button class="delete-school" @click="deleteSubject">
        Remove the subject
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import QuestionCard from "@/components/QuestionCard.vue";
import CreateQuestion from "@/components/CreateQuestion.vue";
import GroupService from "@/services/group.service";
import PostService from "@/services/post.service";
import { defineComponent } from "vue";
import { MockData } from "@/assets/mockData/MockData";
import { ICategory } from "@/types/ICategory";
import { Category } from "@/types/Category";
import { IPostFetched } from "@/types/IPostFetched";
import { Group } from "@/types/Group";

export default defineComponent({
  name: "SubjectPage",
  components: { QuestionCard, CreateQuestion },

  data() {
    return {
      groupe: new Group(),
      subject: "Formations",
      isAddQuestionButtonClicked: false,
      categories: MockData.categories,
      selectedCategory: new Category(),
      moreCategories: false,
      description: MockData.description,
      filteredQuestions: new Array<IPostFetched>(),
      questions: new Array<IPostFetched>(),
    };
  },
  methods: {
    clickAddQuestion() {
      this.isAddQuestionButtonClicked = !this.isAddQuestionButtonClicked;
    },
    newQuestion(question: any) {
      this.questions.push(question);
      this.isAddQuestionButtonClicked = false;
      this.filterByCategory();
    },
    updateCategory(category: Category) {
      if (this.isCategorySelected(category)) {
        this.selectedCategory = new Category();
      } else {
        this.selectedCategory = category;
      }
      this.filterByCategory();
    },
    async filterByCategory() {
      if (this.selectedCategory.isEmpty()) {
        this.filteredQuestions = [...this.questions];
        return;
      }
      let groupId = this.$route.params.id2;
      await PostService.getQuestionsByCategoryId(
        groupId,
        this.selectedCategory.id
      ).then((questions) => (this.filteredQuestions = questions));
    },
    isCategorySelected(category: Category) {
      return this.selectedCategory.isEqual(category);
    },
    deleteSubject() {
      // TODO DELETE request
      window.alert("Subject successfully deleted");
    },
    async setGroup() {
      let groupId: string = this.$route.params.id2 as string;
      await GroupService.getGroupById(groupId).then((group: Group) => {
        this.groupe = group;
      });
    },
    initSelectedCategory() {
      if (this.groupe.isEmpty()) {
        return;
      }
      const _cat: Category = this.groupe.categories[0];
      this.selectedCategory = new Category(
        _cat.id,
        _cat.libelle,
        _cat.description
      );
    },
  },
  async mounted() {
    await this.setGroup();
    this.initSelectedCategory();
    await this.filterByCategory();
  },
});
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

.categories {
  margin-top: 2vh;
  margin-bottom: 6vh;
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vh;
  row-gap: 0.5vw;
}

.category-button {
  background-color: #f8f9ff;
  color: #6a8bff;
}

.category-button:hover {
  background-color: #c9d1ff;
}

.categories p {
  color: #6a8bff;
  font-weight: 500;
}

.selected-category {
  background-color: #6a8bff;
  color: white;
}

.category-button,
.selected-category {
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

.administration {
  margin-top: 9vh;
}

.administration h3 {
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
  padding: 0 0 1vh;
  border-bottom: #e2e2e2 solid 1px;
}

.delete-school,
.modify-school {
  margin-top: 2vh;
  padding: 1vh 2vw;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;
}

.delete-school {
  background-color: #ff7c94;
}

.modify-school {
  background-color: #a6b9ff;
  margin-right: 2vw;
}

.delete-school:hover {
  background-color: #ff4869;
}

.modify-school:hover {
  background-color: #6a8bff;
}
</style>
