import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleResponse } from '../../ArticleResponse';
import { ArticleService } from '../../services/article.service';
import { AddArticles } from "./addArticles/add-articles";
import { Header } from '../header/header';
import { newArticleInterface } from '../../newArticleInterface';


@Component({
  selector: 'app-article',
  imports: [CommonModule, FormsModule, RouterModule, AddArticles, Header],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {

  article!: newArticleInterface;
  articles: newArticleInterface[] = [];
  error = '';
  success = '';


  constructor(private articleService: ArticleService) { }


  addArticle(article: newArticleInterface) {

    this.error = '';
    this.success = '';

    this.articleService.postArticle(article).subscribe({
      next: (res: ArticleResponse) => {

        this.articles.push(article);
        this.success = 'Article posted successfully';
      },
      error: (err) => {
        this.error = 'Failed to post article:';
      }
    });
  }

  // editArticle(article: articleInterface) {
  //   this.articleService.updateArticle(article).subscribe({
  //     next: (res) => {

  //       const index = this.articles.findIndex(a => a.id === article.id);
  //       if (index !== -1) {
  //         this.articles[index] = { ...article };
  //       }
  //       alert('Article updated successfully');
  //     },
  //     error: (err) => {
  //       console.error('Failed to update article:', err);
  //     }
  //   });
  // }

}
