import type { AxiosInstance } from "axios";
import { axiosApi } from "../boot/Axios";
import type { ICategory } from "../interfaces/ICategory";

export class ToysService {
  private api: AxiosInstance;
  private route: string;
  constructor(route: string) {
    this.api = axiosApi;
    this.route = route;
  }

  async getAll() {
    return await this.api.get(this.route);
  }

  async getById(id: number) {
    return await this.api.get(`${this.route}/${id}`);
  }

  // devemos madar o cockie do usuario para o backend
  async create(data: ICategory) {
    return await this.api.post(this.route, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async update(id: number, data: FormData) {
    return await this.api.put(`${this.route}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // devemos madar o cockie do usuario para o backend
  async delete(id: number) {
    return await this.api.delete(`${this.route}/${id}`);
  }
  // devemos madar o cockie do usuario para o backend
  async deleteMany(ids: number[]) {
    return await this.api.delete(this.route, { data: ids });
  }
}
