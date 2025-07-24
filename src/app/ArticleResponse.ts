export interface ArticleResponse {
    status: string;
    data: {
        message: string;
        articleId: number;
        createdOn: number;
        title: string;
        article: string;
    }
}