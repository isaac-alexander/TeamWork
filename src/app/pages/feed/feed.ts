import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedItem } from '../../feed-item';
import { FeedService } from '../../services/feed.service';
import { Header } from '../header/header';
import { commentInterface } from '../../commentInterface';
import { CommentService } from '../../services/comment.service';
import { CommentResponse } from '../../CommentResponse';
import { AddArticleComments } from '../article/articleComment/add-article-comments/add-article-comments';



@Component({
  standalone: true,
  selector: 'app-feed',
  imports: [CommonModule, RouterModule, FormsModule, AddArticleComments, Header],
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})
export class Feed {
  feeds: FeedItem[] = [];
  comment!: commentInterface;
  comments: commentInterface[] = [];
  airticle_id!: number;



  constructor(private router: Router, private feedService: FeedService, private commentService: CommentService) {
    // call feed api endpoitn,set to allfeeds varaible
    this.getFeed();
  }

  getFeed() {
    this.feedService.getFeed().subscribe(res => {
      this.feeds = res.data
    });
  }

  //The function adds comment
  addComment(comment: commentInterface) {
    const localArticle = localStorage.getItem('article')
    const article = JSON.parse(localArticle!);
    this.airticle_id = article.articleId;

    this.commentService.postComment(comment, this.airticle_id).subscribe({
      next: (res: CommentResponse) => {

        this.comments.push(comment);
        alert('Comment posted successfully')
      },
      error: (err) => {
        console.error(err.message);
        console.error('Failed to post comment:', err);
      }
    });
  }


  editPost() {
    this.router.navigate(['/article']);
  }
}
