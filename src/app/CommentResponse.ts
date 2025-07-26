export interface CommentResponse {
    status: string;
    data: {
        message: string;
        createdOn: number;
        articleTitle: string;
        article: string;
        comment: string;
    }
}