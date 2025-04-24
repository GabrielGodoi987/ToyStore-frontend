import type { UserRole } from "../enums/UserRole";
import type { IImageFile } from "./IImageFile";

export interface IUser {
  id?: number | null;
  name: string;
  userRole: UserRole;
  email: string;
  password: string;
  photo: IImageFile[];
}