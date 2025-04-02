import type { IToy } from "./IToy";

export interface ICategory{
    id: number | null;
    name: string;
    toys: IToy[] | null;
}