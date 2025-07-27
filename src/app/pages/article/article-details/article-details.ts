import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FeedService } from '../../../services/feed.service';
import { ArticleService } from '../../../services/article.service';
import { ArticleResponse } from '../../../ArticleResponse';
import { AddArticleComments } from "../../comments/add-article-comments/add-article-comments";
import { FeedItem } from '../../../feed-item';

@Component({
  selector: 'app-article-details',
  imports: [CommonModule, RouterModule,AddArticleComments],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css'
})
export class ArticleDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  feedService = inject(FeedService);
  articleService = inject(ArticleService);
  article!: ArticleResponse ;
  feedItem!: FeedItem[];
  articleId!: number;

  constructor() {
    this.articleId = Number(this.route.snapshot.params['id']);
    this.articleService.getArticlesById(this.articleId).subscribe((res) => {
      this.article = res;
    })

    this.getFeed();
  }

  getFeed() {
    this.feedService.getFeed().subscribe(res => {
      this.feedItem = res.data
    });
  }

}
