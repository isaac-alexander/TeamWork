import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TeamWork';

  constructor(private modalService: NgbModal) { }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
