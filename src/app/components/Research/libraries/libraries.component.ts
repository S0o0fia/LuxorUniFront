import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {

  defualtImage:string
  image:string
  constructor() {
    this.image="../../../../assets/photo/stock-photo-greenville-sc-usa-may-james-b-duke-library-at-furman-university-on-may-in-1409605454.jpg"
    this.defualtImage='https://via.placeholder.com/100'}

  ngOnInit(): void {
  }

}
