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
    return await this.api.get(this.route);
  }
  async getById(id: number) {
    return await this.api.get(`${this.route}/${id}`);
  }
  // devemos madar o cockie do usuario para o backend
  async create(data: IUser) {
    return await this.api.post(this.route, data);
  }
  // devemos madar o cockie do usuario para o backend
  async update(id: number, data: IUser) {
    return await this.api.put(`${this.route}/${id}`, data);
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
