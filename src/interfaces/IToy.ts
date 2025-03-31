export interface IToy {
    id: number | null;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    // teste
    images: File[] | [];
}