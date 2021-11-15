import { LoginService } from 'src/app/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { LectureService } from 'src/app/services/lectures/lecture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
})
export class LecturesComponent implements OnInit {
  allLectures: any;

  defualtImage: string;
  constructor(
    private loginRole: LoginService,
    private lecture: LectureService,
    private router: Router
  ) {
    if (
      Boolean(localStorage.getItem('hidden_instructor')) ||
      Boolean(localStorage.getItem('hidden_mediacenter_university')) ||
      Boolean(localStorage.getItem('hidden_admin'))
    )
      this.defualtImage = 'https://via.placeholder.com/100';
  }

  ngOnInit(): void {
    this.lecture
      .getLectures()
      .subscribe((data) => {
        this.allLectures = data.lecture_table;
        this.allLectures = this.allLectures.filter((data) => {
          return (
            data.specialist.toUpperCase() ==
            localStorage.getItem('specialist').toUpperCase()
          );
        });

      this.lenthOfLectures=this.allLectures.length

      });
  }

  lenthOfLectures:number

  addLecture(file) {
    let lecture = {
      image: this.file,
    };

    let token = localStorage.getItem('token');

    this.lecture.createLecture(lecture, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });

    this.show = false;
    file.value = '';
    this.fileImg = '';
  }

  deleteLectures() {
    this.show = false;
    let id = this.indexOfLecture;
    let token = localStorage.getItem('token');
    this.lecture.deleteLecture(token, id).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

  show: boolean = false;
  indexOfLecture: number = 0;
  fileImg: string = '';

  openPopUp() {
    this.show = true;
  }

  close_popup() {
    this.show = false;
    this.fileImg = '';
  }

  deleteLecture(id) {
    this.show = true;
    this.indexOfLecture = id;
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
