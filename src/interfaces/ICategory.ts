import type { IToy } from "./IToy";

export interface ICategory{
    id: number | null;
    name: string;
    shortDescription: string;
    toys: IToy[] | null;
}