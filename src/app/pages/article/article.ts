import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { articleInterface } from '../../articleInterface';
import { ArticleResponse } from '../../ArticleResponse';
import { ArticleService } from '../../services/article.service';
import { AddArticles } from "./addArticles/add-articles";
import { ArticlesItems } from "./article-items/articles-items";

@Component({
  selector: 'app-article',
  imports: [CommonModule, FormsModule, RouterModule, AddArticles, ArticlesItems],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {

  article!: articleInterface;
  articles: articleInterface[] = [];
  editingPost: (articleInterface & { id: number }) | null = null;

  constructor(private articleService: ArticleService) {}


  addArticle(article: articleInterface) {
    this.articleService.postArticle(article).subscribe({
      next: (res: ArticleResponse) => {

        localStorage.setItem('article', JSON.stringify(res.data));

        this.articles.push(article);
        alert('Article posted successfully')
      },
      error: (err) => {
        console.error('Failed to post article:', err);
      }
    });
  }

  editArticle(article: articleInterface) {
    this.articleService.updateArticle(article).subscribe({
      next: (res) => {
        
        const index = this.articles.findIndex(a => a.id === article.id);
        if (index !== -1) {
          this.articles[index] = { ...article };
        }
        alert('Article updated successfully');
      },
      error: (err) => {
        console.error('Failed to update article:', err);
      }
    });
  }

}
