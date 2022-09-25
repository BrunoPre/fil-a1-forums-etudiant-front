import { ICategory } from "@/types/ICategory";

export class Category implements ICategory {
  constructor(
    public id: string = "",
    public libelle: string = "",
    public description: string = ""
  ) {}

  public isEmpty(): boolean {
    return [this.id, this.libelle, this.description] === ["", "", ""];
  }

  public isEqual(comparedCat: Category): boolean {
    return (
      this.id === comparedCat.id &&
      this.libelle === comparedCat.libelle &&
      this.description === comparedCat.description
    );
  }
}
