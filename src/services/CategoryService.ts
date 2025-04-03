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
    try {
      const response = await this.api.get(this.route);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }

  // enviar multipart/form-data para cadastrar todas as imagens que desejamos enviar
  async addCategory(category: ICategory) {
    // Logic to add a new category
    try {
      const response = await this.api.post(this.route, category);
      return response;
    } catch (error) {
      console.error("Error adding category:", error);
      throw error;
    }
  }

  async updateCategory(categoryId: number, updatedData: ICategory) {
    // Logic to update an existing category
    try {
      const response = await this.api.put(
        `${this.route}/${categoryId}`,
        updatedData
      );
      return response;
    } catch (error) {
      console.error("Error updating category:", error);
      throw error;
    }
  }

  async deleteCategory(categoryId: number) {
    try {
      const response = await this.api.delete(`${this.route}/${categoryId}`);
      return response;
    } catch (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
  }
  async deleteManyCategories(categoryIds: number[]) {
    // Logic to delete multiple categories
    try {
      const response = await this.api.delete(this.route, {
        data: {
          ids: categoryIds,
        },
      });

      return response;
    } catch (error) {
      console.error("Error deleting categories:", error);
      throw error;
    }
  }
}
