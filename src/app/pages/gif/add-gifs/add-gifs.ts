import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { gifInterface } from '../../../gifInterface';
import { ReplaySubject } from 'rxjs';
import { Observable, } from 'rxjs';

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
  base64Output!: string;

  constructor() {
    
  }

  postGif() {
    if (!this.title || !this.image) {
      alert('Please fill this form');
      return;
    }

    const newGif = {
      title: this.title,
      image: this.base64Output,
    }

    this.onAddGif.emit(newGif);

    this.title = '';
    this.image = '';

  }

  //to base64 function 
  onFileSelected(event: any): void {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
      console.log(this.base64Output);
      
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (event) => result.next(btoa(event.target!.result!.toString()));
    return result;
  }
}


