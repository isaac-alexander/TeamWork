export interface GifResponse {
    status: string;
    data: {
        message?: string;
        gifId: number;
        createdOn?: number;
        title: string;
        image: string;
    }
}