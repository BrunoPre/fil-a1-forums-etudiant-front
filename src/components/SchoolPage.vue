<template>
  <div>
    <div class="path">
      <p>Ecoles</p>
    </div>
    <div class="container">
      <div class="description-container">
        <div class="question-title">
          <h1>{{ ecole }}</h1>
        </div>
        <div class="description" v-html="description"></div>
      </div>
      <div class="group-questions-container">
        <div class="group-container">
          <div class="group-header">
            <h2>Groupes</h2>
            <div class="ask-question">
              <a>Créer un nouveau groupe</a>
              <img src="../assets/new-question.svg" alt="" />
            </div>
          </div>
          <div class="group-list-container">
            <div v-for="groupe in groupes" :key="groupe" class="group">
              <router-link
                :to="'/ecole/' + this.$route.params.id + '/sujet/' + groupe.id"
              >
                <div class="group-link-container">
                  <h3>{{ groupe.label }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="administration">
      <div class="administration-header">
        <h3>Administration</h3>
      </div>
      <button class="modify-school">Modifier l'école</button>
      <button class="delete-school" @click="deleteSchool">
        Supprimer l'école
      </button>
    </div>
  </div>
</template>

<script>
import SchoolService from "@/services/school.service";
import GroupService from "@/services/group.service";

export default {
  name: "SchoolPage",

  data() {
    return {
      ecole: "",
      groupes: [],
      isAddQuestionButtonClicked: false,
      categories: [
        "Administration",
        "Mathématiques",
        "Entreprise",
        "Législation",
        "FIL",
        "ITII",
        "Projet Agile",
        "Bipbapbop",
      ],
      selectedCategorie: null,
      moreCategories: false,
      description: "",
      filteredQuestions: [],
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
          categories: ["Administration", "Législation"],
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
          categories: ["Mathématiques"],
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
    newQuestion(question) {
      this.questions.push(question);
      console.log(this.questions);
      this.isAddQuestionButtonClicked = false;
      this.filterByCategorie();
    },
    updateCategorie(categorie) {
      if (this.isCategorieSelected(categorie)) {
        this.selectedCategorie = null;
      } else {
        this.selectedCategorie = categorie;
      }
      console.log("Cat updated to : " + this.selectedCategorie);
      this.filterByCategorie();
    },
    filterByCategorie() {
      if (this.selectedCategorie === null) {
        this.filteredQuestions = [...this.questions];
        return;
      }
      this.filteredQuestions = [];
      this.questions.forEach((q) => {
        q.categories.forEach((c) => {
          if (
            c === this.selectedCategorie &&
            !this.filteredQuestions.includes(q)
          ) {
            this.filteredQuestions.push(q);
          }
        });
      });
      console.log(this.filteredQuestions);
    },
    isCategorieSelected(categorie) {
      return this.selectedCategorie === categorie;
    },
    deleteSchool() {
      // TODO DELETE request
      window.alert("Ecole supprimée !");
    },
    setSchool(schoolId) {
      SchoolService.getSchoolById(schoolId).then((res) => {
        this.ecole = res.libelle;
        this.description = res.description;
      });
    },
    setGroups(schoolId) {
      GroupService.getGroupsBySchoolId(schoolId).then(
        (res) => (this.groupes = res)
      );
    },
  },
  async mounted() {
    this.setSchool(this.$route.params.id);
    this.setGroups(this.$route.params.id);
    console.log(this.groupes);
    this.filteredQuestions = [...this.questions];
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 4vh;
  grid-template-areas: "description-container group-questions-container";
}
.description-container {
  grid-area: description-container;
}
.group-questions-container {
  grid-area: group-questions-container;
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

.group-questions-container h2 {
  font-weight: 600;
  font-size: 1.6rem;
  margin: 0;
}

.question-header,
.group-header {
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

.group-header {
  margin-bottom: 4vh;
}

.group {
  width: 100%;
  height: 5vh;
  background-color: #f8f9ff;
  border-radius: 5px;
  margin: 2vh 0;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}

.group:hover {
  background-color: #c9d1ff;
}

.group-list-container {
  margin-bottom: 8vh;
}

.group h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #6a8bff;
  margin: 0 0 0 3vh;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.group-link-container {
  width: 100%;
  height: 100%;
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

<style>
/*Style de la partie description (ne peut pas être scoped vu qu'on injecte le HTML dynamiquement)*/
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
