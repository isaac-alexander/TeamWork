import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { articleInterface } from '../../../articleInterface';
import { AddArticleComments } from "../articleComment/add-article-comments/add-article-comments";
import { commentInterface } from '../../../commentInterface';
import { CommentService } from '../../../services/comment.service';


@Component({
  selector: 'app-article-details',
  imports: [CommonModule, RouterModule, AddArticleComments],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css'
})
export class ArticleDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleService = inject(ArticleService);
  article!: articleInterface;
  article_id!: number;
  comment!: commentInterface
  value!: string;
  error = '';
  success = '';


  constructor(private router: Router, private commentService: CommentService) {
    this.article_id = Number(this.route.snapshot.params['id']);
    this.articleService.getArticlesById(this.article_id).subscribe((res) => {
      this.article = res.data;
    })
  }


  //The function adds comment
  addComment(comment: commentInterface, article_id: string) {

    this.error = '';
    this.success = '';

    this.comment = comment;

    this.commentService.postComment(this.comment, this.article_id).subscribe({
      next: (res) => {
        this.article.comments?.push(this.comment);
        
        this.success = 'Comment posted successfully';

      },
      error: (err) => {
        this.error = 'Unable to post comment';
      }
    },);

  }


  deleteArticle(article_id: string) {
    this.articleService.deleteArticle(this.article_id).subscribe(() => {
      this.router.navigate(['/feed']);
    })
  }

  formatDate(value: string) {
    let myDate = Date.parse(value);
    const d = new Date(myDate);
    const standardDate = String(d).substring(0, 25);
    return standardDate;
  }
}
