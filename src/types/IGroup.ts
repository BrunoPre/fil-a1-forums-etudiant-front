import { ICategory } from "@/types/ICategory";

export interface IGroup {
  id: string;
  schoolId: string;
  label: string;
  description: string;
  categories: ICategory[];
}
