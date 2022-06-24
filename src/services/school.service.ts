import axios from "axios";
import { ISchool } from "@/types/ISchool";
import { RouteParamValue } from "vue-router";

const API_URL = "http://localhost:8080/api/schools";

class SchoolService {
  getSchoolById(schoolId: string | RouteParamValue[]): Promise<ISchool> {
    return axios
      .get(API_URL + "/" + schoolId)
      .then((response) => response.data as ISchool);
  }

  updateSchool(
    schoolId: string,
    libelle: string,
    school_type: string,
    description: string
  ) {
    return axios.put(API_URL, {
      id: schoolId,
      libelle: libelle,
      school_type: school_type,
      description: description,
    });
  }
}

export default new SchoolService();
