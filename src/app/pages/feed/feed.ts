import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedItem } from '../../feed-item';
import { FeedService } from '../../services/feed.service';


@Component({
  selector: 'app-feed',
  imports: [CommonModule, RouterModule, FormsModule],
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


  editPost(post: FeedItem) {
    localStorage.setItem('editingPost', JSON.stringify(post));
    this.router.navigate(['/post-article']);
  }
}
