import axios from "axios";
import { ISchool } from "@/types/ISchool";

const API_URL = "http://localhost:8080/api/schools";

class SchoolService {
  getSchoolById(schoolId: string): Promise<ISchool> {
    return axios
      .get(API_URL + "/" + schoolId)
      .then((response) => response.data as ISchool);
  }
}

export default new SchoolService();
