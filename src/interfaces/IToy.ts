import type { IImageFile } from "./IImageFile";

export interface IToy {
    id?: number | null;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    images: IImageFile[];
}