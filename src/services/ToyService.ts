import type { AxiosInstance } from "axios";
import { axiosApi } from "../boot/Axios";
import type { IToy } from "../interfaces/IToy";

export class ToysService {
  private api: AxiosInstance;
  private route: string;

  constructor(route: string) {
    this.api = axiosApi;
    this.route = route;
  }

  async getAll(): Promise<IToy[]> {
    try {
      const response = await this.api.get(this.route);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar brinquedos:", error);
      throw error;
    }
  }

  async getById(id: number): Promise<IToy> {
    try {
      const response = await this.api.get(`${this.route}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar brinquedo por ID:", error);
      throw error;
    }
  }

  // Envia um brinquedo novo (pode incluir imagens/mídia via multipart/form-data)
  async create(data: FormData): Promise<IToy> {
    try {
      const response = await this.api.post(this.route, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao criar brinquedo:", error);
      throw error;
    }
  }

  async update(id: number, data: FormData): Promise<IToy> {
    try {
      const response = await this.api.put(`${this.route}/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar brinquedo:", error);
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.api.delete(`${this.route}/${id}`);
    } catch (error) {
      console.error("Erro ao deletar brinquedo:", error);
      throw error;
    }
  }

  async deleteMany(ids: number[]): Promise<void> {
    try {
      await this.api.delete(this.route, {
        data: { ids },
      });
    } catch (error) {
      console.error("Erro ao deletar múltiplos brinquedos:", error);
      throw error;
    }
  }
}
