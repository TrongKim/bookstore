export interface IHttpResponse<T> {
    status: number;
    data: T;
    message: string;
}