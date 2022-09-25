<template>
  <h1>Welcome to Redd'IMT!</h1>
  <h2>Reach out to one of the schools down below</h2>
  <div v-for="school in schools" :key="school.id" class="school">
    <router-link :to="'/school/' + school.id">
      <div class="school-link-container">
        <h3>
          {{ school.libelle }}
        </h3>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import SchoolService from "@/services/school.service";
import { defineComponent } from "vue";
import { ISchool } from "@/types/ISchool";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      schools: new Array<ISchool>(),
    };
  },
  methods: {
    async setSchools() {
      await SchoolService.getAllSchools()
        .then((_schools: ISchool[]) => {
          this.schools = _schools;
        })
        .catch((err) => {
          console.log(err);
          window.alert("ERROR : schools couldn't be loaded");
          history.back();
        });
    },
  },
  async mounted() {
    await this.setSchools();
  },
});
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: #6a8bff;
  font-size: 2.2rem;
  margin-top: 1vh;
  margin-bottom: 5vh;
}

h2 {
  font-weight: normal;
  color: #6a8bff;
  font-size: 1.8rem;
  margin-top: 1vh;
  margin-bottom: 5vh;
}

.school {
  width: 100%;
  height: 5vh;
  background-color: #f8f9ff;
  border-radius: 5px;
  margin: 2vh 0;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}
.school:hover {
  background-color: #c9d1ff;
}
.school h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #6a8bff;
  margin: 0 0 0 3vh;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.school-link-container {
  width: 100%;
  height: 100%;
}
</style>
