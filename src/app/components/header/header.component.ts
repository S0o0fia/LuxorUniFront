import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {
    this.showing = false;
  }

  ngOnInit(): void {
    setInterval(function () {
      if (window.innerWidth > 991) {
        this.showing = false;
      }
    });
  }
  showing: boolean;

  toggleClass() {
    this.showing = !this.showing;
  }
}
