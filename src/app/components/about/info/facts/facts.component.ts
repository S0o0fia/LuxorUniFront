import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  defualtImage:string
  image:string
  constructor() {
    this.defualtImage='https://via.placeholder.com/100'
    this.image="../../../../../assets/photo/37fwNOPW_400x400.jpg"
  }

  ngOnInit(): void {
  }

}
