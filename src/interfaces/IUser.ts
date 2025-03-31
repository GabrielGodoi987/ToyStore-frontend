export interface IUser {
  id: number | null;
  name: string;
  email: string;
  password: string;
  image: File | null;
}