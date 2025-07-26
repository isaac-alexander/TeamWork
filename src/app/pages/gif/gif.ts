import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddGifs } from "./add-gifs/add-gifs";
import { gifInterface } from '../../gifInterface';
import { GifResponse } from '../../GifResponse';
import { GifService } from '../../services/gif.service';
import { Header } from '../header/header';



@Component({
  selector: 'app-gif',
  imports: [CommonModule, FormsModule, RouterModule, AddGifs, Header],
  templateUrl: './gif.html',
  styleUrl: './gif.css'
})
export class Gif {

  gif!: gifInterface;
  gifs: gifInterface[] = [];

  constructor(private gifService: GifService) { }


  addGif(gif: gifInterface) {
    this.gifService.postGif(gif).subscribe({
      next: (res: GifResponse) => {

        localStorage.setItem('gif', JSON.stringify(res.data));

        this.gifs.push(gif);
        alert('Gif posted successfully')
      },
      error: (err) => {
        console.error('Failed to post gif:', err);
      }
    });
  }


}
