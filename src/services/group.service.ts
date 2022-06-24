import axios from "axios";
import { IGroup } from "@/types/IGroup";
import { RouteParamValue } from "vue-router";

const API_URL = "http://localhost:8080/api/groups";

class GroupService {
  getGroupsBySchoolId(schoolId: string): Promise<IGroup[]> {
    return axios
      .get(API_URL, { params: { schoolId: schoolId } })
      .then((response) => response.data as IGroup[]);
  }

  getGroupById(groupId: string | RouteParamValue[]): Promise<IGroup> {
    return axios
      .get(API_URL + "/" + groupId)
      .then((response) => response.data as IGroup);
  }

  updateGroup(
    groupId: string,
    schoolId: string,
    label: string,
    description: string
  ) {
    return axios.put(API_URL, {
      id: groupId,
      schoolId: schoolId,
      label: label,
      description: description,
    });
  }

  /*
  {
        "id": "1",
        "schoolId": "1",
        "label": "FIL",
        "description": "groupe FIL de école IMT",
        "categories": [
            {
                "id": "1",
                "libelle": "Administration",
                "description": "ceci est la catégorie formation"
            },
            {
                "id": "2",
                "libelle": "Informations Generale",
                "description": "ceci est la catégorie info g"
            },
            {
                "id": "3",
                "libelle": "Autres",
                "description": "ceci est la catégorie autres"
            }
        ]
    },
   */
}

export default new GroupService();
