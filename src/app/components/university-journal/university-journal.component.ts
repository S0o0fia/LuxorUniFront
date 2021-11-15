import { JournalService } from './../../services/journals/journal.service';
import { Journal } from './../../interface/journals/journal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-journal',
  templateUrl: './university-journal.component.html',
  styleUrls: ['./university-journal.component.css'],
})
export class UniversityJournalComponent implements OnInit {
  jouranls: Array<Journal>;
  defualtImage: string;

  month: number = 5;

  view: Array<any>;

  char_month: string = 'مايو';

  constructor(private alljounal: JournalService) {
    this.defualtImage = 'https://via.placeholder.com/100';
  }

  ngOnInit(): void {
    this.alljounal.getJournal().subscribe((data) => {
      this.jouranls = data.reverse();
      this.month = new Date().getMonth() + 1;
      this.view = this.jouranls.filter((data) => {
        return data;
      });
      this.num_of_page_start = this.jouranls.length / 6 - 1;
      this.num_of_page_end = this.jouranls.length / 6;
      this.next();
      this.prev();
      for (let index = 0; index < this.view.length; index++) {
        if (this.view[index].image.length > 0) {
          this.view[index].image =
            'https://universityqwer.000webhostapp.com/images/' +
            this.view[index].image;
        }
      }
    });
  }

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
    if (this.jouranls.length <= this.end) {
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
    this.start += 6;
    this.end += 6;
    if (this.jouranls.length <= this.end) {
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

    if (this.jouranls.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
  }

  viewMonth(m) {
    this.char_month = m ? m : 'مايو';
    switch (m) {
      case 'يناير':
        this.month = 1;
        break;
      case 'فبراير':
        this.month = 2;
        break;
      case 'مارس':
        this.month = 3;
        break;
      case 'ابريل':
        this.month = 4;
        break;
      case 'مايو':
        this.month = 5;
        break;
      case 'يونيو':
        this.month = 6;
        break;
      case 'يوليو':
        this.month = 7;
        break;
      case 'اغسطس':
        this.month = 8;
        break;
      case 'سبتمبر':
        this.month = 9;
        break;
      case 'اكتوبر':
        this.month = 10;
        break;
      case 'نوفمبر':
        this.month = 11;
        break;
      case 'ديسمبر':
        this.month = 12;
        break;
      default:
        this.month = 5;
        break;
    }

    console.log(this.view, this.month, Number(this.jouranls[0].created_at[6]));
    this.view = this.jouranls.filter((data) => {
      if (Number(data.created_at[6]) != undefined)
        return Number(data.created_at[6]) == this.month;
      else return [];
    });
  }

  track(item, index: number) {
    return item.index;
  }
}
