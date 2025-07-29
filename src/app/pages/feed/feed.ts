import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedItem } from '../../feed-item';
import { FeedService } from '../../services/feed.service';
import { Header } from '../header/header';
import { commentInterface } from '../../commentInterface';
import { ArticleService } from '../../services/article.service';



@Component({
  standalone: true,
  selector: 'app-feed',
  imports: [CommonModule, RouterModule, FormsModule, Header],
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})
export class Feed {
  feeds: FeedItem[] = [];
  comment!: string;
  comments: commentInterface[] = [];
  article_id!: number;
  article!: any;



  constructor(private router: Router,
    private feedService: FeedService,
    private articleService: ArticleService
  ) {
    this.getFeed();
  }

  getFeed() {
    this.feedService.getFeed().subscribe(res => {
      this.feeds = res.data
    });
  }

  editPost() {
    this.router.navigate(['/article']);
  }

  formatDate(value: string) {
    let myDate = Date.parse(value);
    const d = new Date(myDate);
    const standardDate = String(d).substring(0, 25);
    return standardDate;
  }
}
