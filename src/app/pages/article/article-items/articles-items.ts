import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { articleInterface } from '../../../articleInterface';

@Component({
  selector: 'app-articles-items',
  imports: [CommonModule],
  templateUrl: './articles-items.html',
  styleUrl: './articles-items.css'
})
export class ArticlesItems {
  @Input() article!: articleInterface;
  @Output() emitUpdateArticle: EventEmitter<articleInterface> = new EventEmitter();

  title: string = '';
  content: string = '';
  id!: number;

  

  constructor() {
    const localArticle = localStorage.getItem('article')
    const article = JSON.parse(localArticle!);
  }

  updateArticle(article: any) {

    const updated = {
      id: this.id,
      title: this.title,
      content: this.content
    };

    this.emitUpdateArticle.emit(updated);
  }

}
