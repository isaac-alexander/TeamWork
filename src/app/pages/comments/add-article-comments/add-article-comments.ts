import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { commentInterface } from '../../../commentInterface';

@Component({
  selector: 'app-add-article-comments',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-article-comments.html',
  styleUrl: './add-article-comments.css'
})
export class AddArticleComments {
  @Output() onAddComment: EventEmitter<commentInterface> = new EventEmitter();
  id!: number;
  comment: string = '';

  onSubmit() {
    if (!this.comment) {
      alert('Please fill this form');
      return;
    }
    console.log("onSubnit")

    const newComment = {
      comment: this.comment
    }
    console.log("added comment and emit")

    this.onAddComment.emit(newComment);

    console.log("emit commnet")

    this.comment = '';

    console.log("cleaar comment")

  }

}
