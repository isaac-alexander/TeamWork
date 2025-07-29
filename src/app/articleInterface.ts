import { commentInterface } from "./commentInterface";

export interface articleInterface {
content: any;
    id?: string;
    message?: string;
    articleId?: number;
    createdOn?: string;
    title: string;
    article: string;
    comments?: commentInterface[];
}