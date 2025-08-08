type Rate = {
    count: number;
    rate: number;
}

// Type from API
export type ResponseProducts = {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: Rate;
}

// Type Base
export type Products = {
    id: number;
    title: string;
    img: string;
    price: number;
    description: string;
};

// Response from API
export type ResponseApi = {
    message: string;
    status: number;
    data: ResponseProducts[];
}