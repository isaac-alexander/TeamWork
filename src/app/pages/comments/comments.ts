import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { commentInterface } from '../../commentInterface';
import { CommentResponse } from '../../CommentResponse';
import { CommentService } from '../../services/comment.service';
import { AddArticleComments } from './add-article-comments/add-article-comments';

@Component({
  selector: 'app-comments',
  imports: [CommonModule, RouterModule, FormsModule, AddArticleComments],
  templateUrl: './comments.html',
  styleUrl: './comments.css'
})
export class Comments {
  comment!: commentInterface;
  comments: commentInterface[] = [];
  airticle_id!: number; 

  constructor(private commentService: CommentService) {
    const localArticle = localStorage.getItem('article')
    const article = JSON.parse(localArticle!);
    console.log("article ", article)
    this.airticle_id = article.articleId;

   }

  //The function is not entering
  addComment(comment: commentInterface) {
    console.log("comenet => ")
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

}
