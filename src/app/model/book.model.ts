export interface IBook {
    id: string;
    name: string;
    genres: string;
    price: number;
    description: string;
    pages: number;
    length: number;
    images: string;
    publisher: string;
    language: string;
    isbn_10: string;
    dimensions: string;
    who_like: string;
    message: string;
    about_author: string;
    amount: number;
    author_id: string;
}

export interface IBookInCartCookie {
    id: string;
    total: number;
}