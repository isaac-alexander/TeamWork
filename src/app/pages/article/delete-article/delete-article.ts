import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { articleInterface } from '../../../articleInterface';

@Component({
  selector: 'app-delete-article',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './delete-article.html',
  styleUrl: './delete-article.css'
})
export class DeleteArticle {
  @Output() onDeleteArticle: EventEmitter<articleInterface> = new EventEmitter();
  article!: articleInterface;
  articles: articleInterface[] = [];

  constructor() {
    
  }

  onDelete(article: articleInterface) {
    this.onDeleteArticle.emit(article)
  }
}
