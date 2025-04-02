import type { AxiosInstance } from "axios";
import { axiosApi } from "../boot/Axios";
import type { ICategory } from "../interfaces/ICategory";
import type { IToy } from "../interfaces/IToy";
import type { IUser } from "../interfaces/IUser";

export class ToysService {
  private api: AxiosInstance;
  private route: string;
  constructor(route: string) {
    this.api = axiosApi;
    this.route = route;
  }

  async getAll() {
    try {
      const response = await this.api.get(this.route);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      const response = await this.api.get(`${this.route}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category by ID:", error);
      throw error;
    }
  }

  // devemos madar o cockie do usuario para o backend
  async create(data: IUser) {
    return await this.api.post(this.route, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async update(id: number, data: IToy) {
    return await this.api.put(`${this.route}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // devemos madar o cockie do usuario para o backend
  async delete(id: number) {
    try {
      const response = await this.api.delete(`${this.route}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
  }
  // devemos madar o cockie do usuario para o backend
  async deleteMany(ids: number[]) {
    try {
      const response = await this.api.delete(this.route, { data: ids });
      return response.data;
    } catch (error) {
      console.error("Error deleting categories:", error);
      throw error;
    }
  }
}
