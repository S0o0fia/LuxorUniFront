import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  defualtImage:string

  constructor(private searchData:EventService,private router:Router) {
    this.defualtImage='https://via.placeholder.com/100'
  }

  photo :string=this.searchData.search[this.searchData.search_index].image
  time :string=this.searchData.search[this.searchData.search_index].created_at
  des:string=this.searchData.search[this.searchData.search_index].description
  titleEvent:string=this.searchData.search[this.searchData.search_index].title

  ngOnInit(): void {
  }
  show: boolean = false;

  images: string = '';
  desc: string = '';
  fileImg: string = '';
  indexOfEvent: number =this.searchData.search[this.searchData.search_index].id;

  addNew() {
    this.show = true;
    this.images = '';
    this.desc = '';
  }

  updateNew() {
    this.show = true
  }

  deleteNew() {
    this.show = true;
  }


  updateItem(info,titleEvent) {
    let event = {
      image: this.file,
      description: info.value,
      title:titleEvent.value,
    };

    this.show = false;

    let id = this.indexOfEvent;
    let token = localStorage.getItem('token');

    this.searchData.editEvent(event, id, token).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/admin-news'])
    });

  }

  deleteitem() {
    this.show = false;
    let id = this.indexOfEvent;
    let token = localStorage.getItem('token');
    this.searchData.deleteEvent(id, token).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/admin-news'])
    });
  }

  close_popup() {
    this.show = false;
    this.images = '';
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
}
