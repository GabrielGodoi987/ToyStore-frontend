import type { AxiosInstance } from "axios";
import { axiosApi } from "../boot/Axios";
import type { IUser } from "../interfaces/IUser";

export class UserService {
  private api: AxiosInstance;
  private route: string;
  constructor(route: string) {
    this.api = axiosApi;
    this.route = route;
  }

  async getAll() {
    try {
      const response = await this.api.get(this.route);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: number) {
    try {
      const response = await this.api.get(`${this.route}/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // devemos madar o cockie do usuario para o backend
  async create(data: FormData) {
    try {
      const response = await this.api.post(this.route, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }

  async update(id: number, data: IUser) {
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
      throw error;
    }
  }
}
