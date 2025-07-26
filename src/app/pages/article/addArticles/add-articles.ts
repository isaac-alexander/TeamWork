import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { articleInterface } from '../../../articleInterface';



@Component({
  selector: 'app-add-articles',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-articles.html',
  styleUrl: './add-articles.css'
})
export class AddArticles {
  @Output() onAddArticle: EventEmitter<articleInterface> = new EventEmitter();
  id!: number;
  title: string = '';
  content: string = '';
   

  onSubmit() {
    if (!this.title || !this.content) {
      alert('Please fill this form');
      return;
    }

    const newArticle = {
      title: this.title,
      content: this.content,
    }

    this.onAddArticle.emit(newArticle);

    this.title = '';
    this.content = '';

  }

}

