import { IGroup } from "@/types/IGroup";
import { Category } from "@/types/Category";

export class Group implements IGroup {
  constructor(
    public id: string = "",
    public schoolId: string = "",
    public label: string = "",
    public description: string = "",
    public categories: Category[] = new Array<Category>()
  ) {}

  isEmpty(): boolean {
    return (
      [
        this.id,
        this.schoolId,
        this.label,
        this.description,
        this.categories,
      ] === ["", "", "", "", []]
    );
  }
}
