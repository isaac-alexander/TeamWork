import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/feed');
    }, 3000);
  }
}
