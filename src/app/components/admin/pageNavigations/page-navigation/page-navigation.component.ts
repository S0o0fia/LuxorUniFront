import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
})
export class PageNavigationComponent implements OnInit {
  constructor() {
    console.log(this.arr)
  }


  @Input() arr;

  ngOnInit(): void {
  }

  
  //number of page for items
  
  num_of_page_start: number = 1;
  num_of_page_end: number = 6;
  num_of_page_defualt: number = 0;

  // limit of for dispaly items
  start: number = 0;
  end: number = 6;

  //go to page
  go_page(e) {
    this.start = (e.textContent - 1) * 6;
    this.end = e.textContent * 6;
    if (this.arr.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }
  }

  // make this list is disable
  next_isdisable = false;

  // make this list is able
  prev_able = true;

  // go the next page
  next() {
    console.log(this.arr)
    this.num_of_page_start = this.arr.length / 6 - 1;
    this.num_of_page_end = this.arr.length / 6;
    this.start += 6;
    this.end += 6;
    if (this.arr.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }

    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }
  }

  // go the perv page
  prev() {
    this.start -= 6;
    this.end -= 6;
    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }

    if (this.arr.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
  }

}
