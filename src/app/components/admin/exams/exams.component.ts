import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/interface/exams/exam';
import { ExamService } from 'src/app/services/exams/exam.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
  allExams: any;

  defualtImage: string;
  constructor(
    private loginRole: LoginService,
    private exam: ExamService,
    private router: Router
  ) {
    if (
      Boolean(localStorage.getItem('hidden_instructor')) ||
      Boolean(localStorage.getItem('hidden_mediacenter_university')) ||
      Boolean(localStorage.getItem('hidden_admin'))
    ) {
      router.navigate(['/academic-affairs/login']);
    }
    this.defualtImage = 'https://via.placeholder.com/100';
  }

  ngOnInit(): void {
    this.exam.getExams().subscribe((data) => {
      this.allExams = data.exams_table;
      this.allExams = this.allExams.filter((data) => {
        return (
          data.specialist.toUpperCase() ==
          localStorage.getItem('specialist').toUpperCase()
        );
      });

      this.lenthOfExams=this.allExams.length
    });
  }

  lenthOfExams:number

  addExam(file) {
    let exam = {
      image: this.file,
    };

    let token = localStorage.getItem('token');

    this.exam.createExam(exam, token).subscribe((data) => {
      console.log(data);
      location.reload();
    });

    this.show = false;
    file.value = '';
    this.fileImg = '';
  }

  deleteExams() {
    this.show = false;
    let id = this.indexOfExam;
    let token = localStorage.getItem('token');
    this.exam.deleteExam(token, id).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }

  show: boolean = false;
  indexOfExam: number = 0;
  fileImg: string = '';

  openPopUp() {
    this.show = true;
  }

  close_popup() {
    this.show = false;
    this.fileImg = '';
  }

  deleteExam(id) {
    this.show = true;
    this.indexOfExam = id;
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
