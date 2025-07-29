import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { gifInterface } from '../../../gifInterface';

@Component({
  selector: 'app-add-gifs',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-gifs.html',
  styleUrl: './add-gifs.css'
})
export class AddGifs {
  @Output() onAddGif: EventEmitter<gifInterface> = new EventEmitter();
  id!: number;
  title: string = '';
  image: string = '';

  constructor() {

  }

  postGif() {
    if (!this.title || !this.image) {
      alert('Please fill this form');
      return;
    }

    const newGif = {
      title: this.title,
      image: this.image,
    }

    this.title = '';
    this.image = '';

  }


  onFileSelected(event: any) {

    const file: Blob = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64String = e.target?.result;
      const result = base64String?.toString();
      const newString = result?.slice(result.indexOf(',') + 1);
      this.image = newString!;

    };
    reader.readAsDataURL(file);
  }
}


