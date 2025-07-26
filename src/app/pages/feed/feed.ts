import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedItem } from '../../feed-item';
import { FeedService } from '../../services/feed.service';
import { AddArticleComments } from '../comments/add-article-comments/add-article-comments';
import { Header } from '../header/header';


@Component({
  standalone: true,
  selector: 'app-feed',
  imports: [CommonModule, RouterModule, FormsModule, AddArticleComments, Header],
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})
export class Feed {
  feeds: FeedItem[] = [];

  constructor(private router: Router, private feedService: FeedService) {
    // call feed api endpoitn,set to allfeeds varaible
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
}
