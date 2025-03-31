import type { AxiosInstance } from "axios";
import type { ICategory } from "../interfaces/ICategory";
import { axiosApi } from "../boot/Axios";

export class CategoryService {
  private api: AxiosInstance;
  private route: string;
  constructor(route: string) {
    this.api = axiosApi;
    this.route = route;
  }

  // Define your methods and properties here
  async getCategories() {
    return await this.api.get(this.route);
  }

  // enviar multipart/form-data para cadastrar todas as imagens que desejamos enviar
  async addCategory(category: ICategory) {
    // Logic to add a new category
    return await this.api.post(this.route, category, {});
  }

  updateCategory(categoryId: number, updatedData: ICategory) {
    // Logic to update an existing category
  }

  deleteCategory(categoryId: number) {
    // Logic to delete a category
  }
  deleteManyCategories(categoryIds: number[]) {
    // Logic to delete multiple categories
  }
}
