<template>
  <div class="path">
    <p>Ecoles</p>
  </div>
  <h1>Modifier une école</h1>
  <div class="modify-school-container">
    <div class="title">
      <label for="school-title">Nom de l'école</label>
      <input id="school-title" type="text" v-model="title" />
    </div>
    <div class="description">
      <label for="school-title">Description de l'école</label>
      <trumbowyg
        v-model="description"
        :config="config"
        class="form-control"
        name="content"
      ></trumbowyg>
    </div>
    <div class="buttons">
      <button class="save-modifications" @click="save">Enregistrer</button>
      <button class="cancel-modifications">Annuler</button>
    </div>
  </div>
</template>

<script>
import Trumbowyg from "vue-trumbowyg";
import "trumbowyg/dist/ui/trumbowyg.css";
import GroupService from "@/services/group.service";
import SchoolService from "@/services/school.service";

export default {
  name: "ModifySchool",
  components: {
    Trumbowyg,
  },
  data() {
    return {
      title: "",
      description: "",
      school_type: "",
      config: {
        autogrow: true,
        removeformatPasted: true,
        // Limit toolbar buttons
        btns: [
          ["viewHTML"],
          ["strong", "em", "del"],
          ["unorderedList", "orderedList"],
          ["formatting"],
          ["link"],
          ["fullscreen"],
        ],
      },
    };
  },
  methods: {
    async save() {
      console.log("old description = ", this.description);

      await SchoolService.updateSchool(
        this.$route.params.id,
        this.title,
        this.school_type,
        this.description
      );
      console.log("new description = ", this.description);
      window.alert("Ecole mise à jour !");
      history.back();
    },
    async setAttrs() {
      await SchoolService.getSchoolById(this.$route.params.id).then((res) => {
        this.title = res.libelle;
        this.description = res.description;
        this.school_type = res.school_type;
      });
    },
  },
  async mounted() {
    try {
      await this.setAttrs();
    } catch {
      await this.$router.push(this.$route.fullPath.split("/")[0] + "/error");
    }
  },
};
</script>

<style>
.trumbowyg-box,
.trumbowyg-editor {
  height: 40vh;
}

.trumbowyg-editor-visible {
  height: 45vh;
}

.trumbowyg-button-pane {
  background: #f5f8ff;
  border-bottom: 1px solid #e2e2e2;
}
</style>

<style scoped>
h1 {
  font-weight: bold;
  color: #6a8bff;
  font-size: 2.2rem;
  margin-top: 1vh;
  margin-bottom: 5vh;
}

.modify-school-container {
  margin-left: 12.5%;
  margin-right: auto;
  width: 60%;
}

.title input {
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1vh 1vw;
  color: #6a8bff;
}

.path {
  font-size: 0.9rem;
  font-weight: lighter;
}

input {
  margin-bottom: 3vh;
  box-sizing: border-box;
}

label {
  margin-bottom: 1vh;
  display: inline-block;
}

.description {
  width: 100%;
}

.buttons {
  margin-top: 2vh;
}

.save-modifications,
.cancel-modifications {
  margin-top: 2vh;
  padding: 1vh 2vw;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;
}

.save-modifications {
  color: white;
  background-color: #a6b9ff;
  margin-right: 2vw;
}

.cancel-modifications {
  color: #6a8bff;
  background-color: #f5f8ff;
}

.cancel-modifications:hover {
  background-color: #c9d1ff;
}

.save-modifications:hover {
  background-color: #6a8bff;
}
</style>
