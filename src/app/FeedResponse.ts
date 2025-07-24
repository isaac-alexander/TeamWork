import { FeedItem } from "./feed-item";

export interface FeedResponse {
    status: string;
    data: FeedItem[];
}
