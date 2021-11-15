import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { Event } from '../../interface/events/event';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css'],
})
export class ViewAllNewsComponent implements OnInit {
  defualtImage: string;

  constructor(private allEvent: EventService) {
    this.defualtImage = 'https://via.placeholder.com/100';
  }

  items: Array<any>;
  ngOnInit(): void {
    this.allEvent.getEvents().subscribe((data) => {
      this.items = data;
      this.num_of_page_start = this.items.length / 6 - 1;
      this.num_of_page_end = this.items.length / 6;
      this.next()
      this.prev()

      for (let index = 0; index < this.items.length; index++) {
        if (this.items[index].image.length > 0) {
          this.items[index].image =
            'https://universityqwer.000webhostapp.com/images/' +
            this.items[index].image;
        }
      }
    });
  }

  // make this list is disable
  next_isdisable = false;

  // make this list is able
  prev_able = true;

  //number of page for items
  num_of_page_start: number = 0;
  num_of_page_defualt: number = 0;
  num_of_page_end: number = 6;

  // limit of for dispaly items
  start: number = 0;
  end: number = 6;

  //go to page
  go_page(e) {
    this.start = (e.textContent - 1) * 6;
    this.end = e.textContent * 6;
    if (this.items.length <= this.end) {
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

  // go the next page
  next() {
    this.start += 6;
    this.end += 6;
    if (this.items.length <= this.end) {
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

  prev() {
    this.start -= 6;
    this.end -= 6;
    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }

    if (this.items.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
  }

  track(item, index: number) {
    return item.index;
  }

  getIndex(i) {
    this.allEvent.getOneEvent(i);
  }
}
