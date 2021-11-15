import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Journal } from 'src/app/interface/journals/journal';
import { JournalService } from 'src/app/services/journals/journal.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin-magazine',
  templateUrl: './admin-magazine.component.html',
  styleUrls: ['./admin-magazine.component.css'],
})
export class AdminMagazineComponent implements OnInit {
  jouranls: Array<Journal>;
  defualtImage: string;

  month: number = 5;

  view: Array<any>;

  char_month: string = 'مايو';

  constructor(
    private alljounal: JournalService,
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

  ngOnInit(): void {
    this.alljounal.getJournal().subscribe((data) => {
      this.jouranls = data.reverse();
      this.month = new Date().getMonth() + 1;
      this.view = this.jouranls.filter((data) => {
        return data;
      });
      this.num_of_page_start = this.view.length / 6 - 1;
      this.num_of_page_end = this.view.length / 6;
      this.next();
      this.prev();

      this.lenthOfJouranls = this.view.length;

      for (let index = 0; index < this.view.length; index++) {
        if (this.view[index].image.length > 0) {
          this.view[index].image =
            'https://universityqwer.000webhostapp.com/images/' +
            this.view[index].image;
        }
      }
    });
  }

  lenthOfJouranls: number;

  /* satrt section code*/

  search_text: string;
  search_data: any[];

  search() {
    this.search_data = this.jouranls.filter((data) => {
      if (this.search_text.length > 0) {
        return data.title.includes(this.search_text);
      }
      return null;
    });
    this.alljounal.search_arr(this.search_data);
  }

  go_to_view(index) {
    this.alljounal.search_index = index;
  }

  /* end section code*/

  //number of page for items
  num_of_page_start: number = 0;
  num_of_page_defualt: number = 0;
  num_of_page_end: number = 1;

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

  show: boolean = false;

  showPopup() {
    this.show = true;
    this.image = '';
    this.title = '';
    this.content = '';
    this.depa = '';
  }

  image: string = '';
  title: string = '';
  content: string = '';
  depa: string = '';
  fileImg: string = '';
  indexOfMaga: number = 0;

  close_popup() {
    this.show = false;
    this.image = '';
    this.title = '';
    this.content = '';
    this.fileImg = '';
  }

  update(image, title, content, depa, id) {
    this.show = true;
    this.image = image.src;
    this.title = title.textContent;
    this.content = content.textContent;
    this.depa = depa.textContent;
    this.indexOfMaga = id;
  }

  additem( title, content, depa) {
    let jounal = {
      image: this.file,
      description: content.value,
      title: title.value,
      depa: depa.value,
    };

    this.show = false;
    this.image = '';
    this.title = '';
    this.content = '';
    this.depa = '';
    this.fileImg = '';

    let token = localStorage.getItem('token');

    this.alljounal.createJournal(jounal, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

  updateItem( title, content,department) {
    let jounal = {
      image: this.file,
      description: content.value,
      title: title.value,
      department: department.value,
    };

    let token = localStorage.getItem('token');

    let id = this.indexOfMaga;
    this.alljounal.editJournal(jounal, id, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });

    this.show = false;
  }

  deleteitem() {
    this.show = false;
    let id = this.indexOfMaga;
    let token = localStorage.getItem('token');
    this.alljounal.deleteJournal(id, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

  file: File;
  getimg(file, fileInfo) {
    let index_of_name_imge = file.value.lastIndexOf('\\') + 1;
    this.fileImg =
      '../../../assets/photo/' + file.value.slice(index_of_name_imge);
    this.file = fileInfo.target.files[0];
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
    this.view = this.jouranls.filter((data) => {
      if (Number(data.created_at[6]) != undefined)
        return Number(data.created_at.slice(5, 7)) == this.month;
      else return [];
    });

    this.lenthOfJouranls = this.view.length;

    this.num_of_page_start = this.view.length / 6 - 1;
    this.num_of_page_end = this.view.length / 6;
  }

  track(jouranl, index: number) {
    return jouranl.index;
  }
}
