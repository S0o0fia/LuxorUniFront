import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Event } from '../../../interface/events/event';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css'],
})
export class AdminNewsComponent implements OnInit {
  defualtImage: string;

  constructor(
    private allEvent: EventService,
    private loginRole: LoginService,
    private router: Router
  ) {
    if (
      Boolean(localStorage.getItem('hidden_instructor')) ||
      Boolean(localStorage.getItem('hidden_support_university'))
    ) {
      router.navigate(['/academic-affairs/login']);
    }
    this.defualtImage = 'https://via.placeholder.com/100';
  }
  items: Array<Event>;

  ngOnInit(): void {
    this.allEvent.getEvents().subscribe((data) => {
      console.log(data)
      this.items = data.reverse();
      this.items = this.items.filter((data) => {
        if (localStorage.getItem('specialist').toUpperCase() == 'ADMIN')
          return data;
        else
          return (
            data.specialist.toUpperCase() ==
            localStorage.getItem('specialist').toUpperCase()
          );
      });

      this.num_of_page_start = this.items.length / 6 - 1;
      this.num_of_page_end = this.items.length / 6;
      this.next();
      this.prev();
      this.length = this.items.length;

      this.lenthOfEvents = this.items.length;

      for (let index = 0; index < this.items.length; index++) {
        if (this.items[index].image.length > 0) {
          this.items[index].image =
            'https://universityqwer.000webhostapp.com/images/' +
            this.items[index].image;
        }
      }
    });
  }
  length: number = 0;

  lenthOfEvents: number;

  /*satrt search code*/
  search_text: string;
  search_data: Array<Event>;

  search() {
    this.search_data = this.items.filter((data) => {
      if (this.search_text.length > 0) {
        return data.title.includes(this.search_text);
      }
      return null;
    });
    this.allEvent.search_arr(this.search_data);
  }

  go_to_view(index) {
    this.allEvent.search_index = index;
  }

  /*end search code*/

  //number of page for items
  num_of_page_start: number = 1;
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

  // make this list is disable
  next_isdisable = false;

  // make this list is able
  prev_able = true;

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

  // go the perv page
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

  show: boolean = false;

  images: string = '';
  titles: string = '';
  desc: string = '';
  fileImg: string = '';
  indexOfEvent: number = 0;

  addNew() {
    this.show = true;
    this.images = '';
    this.titles = '';
    this.desc = '';
  }

  updateNew(image, title, des, eventId) {
    this.show = true;
    this.images = image.src;
    this.titles = title.textContent;
    this.desc = des.textContent;
    this.indexOfEvent = eventId;
  }

  deleteNew(eventId) {
    this.show = true;
    this.indexOfEvent = eventId;
  }

  additem(titleEvent, info) {
    let event = {
      image: this.file,
      title: titleEvent.value,
      description: info.value,
    };

    let token = localStorage.getItem('token');

    this.allEvent.createEvent(event, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });

    this.show = false;
    this.images = '';
    this.titles = '';
    this.desc = '';
    this.fileImg = '';
  }

  updateItem(titleEvent, info) {
    let event = {
      image: this.file,
      description: info.value,
      title: titleEvent.value,
    };

    this.show = false;

    let id = this.indexOfEvent;
    let token = localStorage.getItem('token');

    this.allEvent.editEvent(event, id, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

  deleteitem() {
    this.show = false;
    let id = this.indexOfEvent;
    let token = localStorage.getItem('token');
    this.allEvent.deleteEvent(id, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

  close_popup() {
    this.show = false;
    this.images = '';
    this.titles = '';
    this.desc = '';
    this.fileImg = '';
  }

  file: File;
  getimg(file, fileInfo) {
    let index_of_name_imge = file.value.lastIndexOf('\\') + 1;
    this.fileImg =
      '../../../assets/photo/' + file.value.slice(index_of_name_imge);
    this.file = fileInfo.target.files[0];
  }

  track(item, index: number) {
    return item.index;
  }
}
