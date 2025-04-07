import type { UserRole } from "../enums/UserRole";
import type { IImageFile } from "./IImageFile";

export interface IUser {
  id?: number | null;
  name: string;
  type: UserRole;
  email: string;
  password: string;
  file: IImageFile[];
}