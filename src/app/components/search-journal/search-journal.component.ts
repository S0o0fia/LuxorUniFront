import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journals/journal.service';

@Component({
  selector: 'app-search-journal',
  templateUrl: './search-journal.component.html',
  styleUrls: ['./search-journal.component.css'],
})
export class SearchJournalComponent implements OnInit {
  defualtImage: string;

  constructor(private searchJournal: JournalService, private router: Router) {
    this.defualtImage = 'https://via.placeholder.com/100';
  }

  title: string =
    this.searchJournal.search[this.searchJournal.search_index].title;
  photo: string =
    this.searchJournal.search[this.searchJournal.search_index].image;
  time: string =
    this.searchJournal.search[this.searchJournal.search_index].created_at;
  depa: string =
    this.searchJournal.search[this.searchJournal.search_index].section;
  content: string =
    this.searchJournal.search[this.searchJournal.search_index].description;

  ngOnInit(): void {}

  indexOfMaga: number =
    this.searchJournal.search[this.searchJournal.search_index].id;

  show: boolean = false;

  showPopup() {
    this.show = true;
    this.image = '';
    this.title = '';
    this.content = '';
    this.time = '';
    this.depa = '';
  }

  image: string = '';
  fileImg: string = '';

  close_popup() {
    this.show = false;
    this.image = '';
    this.title = '';
    this.content = '';
    this.time = '';
    this.fileImg = '';
  }

  update() {
    this.show = true;
  }

  updateItem(title, content, depa) {
    let jounal = {
      image: this.file,
      description: content.value,
      title: title.value,
      department: depa.value,
    };

    let token = localStorage.getItem('token');

    let id = this.indexOfMaga;
    this.searchJournal.editJournal(jounal, id, token).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/admin-magazine']);
    });

    this.show = false;
  }

  deleteitem() {
    this.show = false;
    let id = this.indexOfMaga;
    let token = localStorage.getItem('token');
    this.searchJournal.deleteJournal(id, token).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/admin-magazine']);
    });
  }

  file: File;
  getimg(file, fileInfo) {
    let index_of_name_imge = file.value.lastIndexOf('\\') + 1;
    this.fileImg =
      '../../../assets/photo/' + file.value.slice(index_of_name_imge);
    this.file = fileInfo.target.files[0];
  }
}
