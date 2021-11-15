import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/students/student.service';
import { ResultService } from 'src/app/services/results/result.service';

@Component({
  selector: 'app-admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css'],
})
export class AdminResultComponent implements OnInit {
  constructor(
    private router: Router,
    private student: StudentService,
    private result: ResultService
  ) {}

  allStudents: any;
  ngOnInit(): void {
    this.student.getStudnts(localStorage.getItem('token')).subscribe((data) => {
      this.allStudents = data;
      this.allStudents = this.allStudents.users;
      console.log(this.allStudents);

      this.allStudents = this.allStudents.filter((element) => {
        return (
          element.college_id == localStorage.getItem('college_id') &&
          element.role_id == 4
        );
      });
      this.lenthOfStudent = this.allStudents.length;
      this.num_of_page_start = this.allStudents.length / 10 - 1;
      this.num_of_page_end = this.allStudents.length / 10;

      this.next();
      this.prev();
    });
  }

  goToCourse() {
    this.router.navigate(['/admin/studnet-info/course']);
  }

  goToResult(studId) {
    localStorage.setItem('studentResultId', studId);
    this.router.navigate(['/admin/studnet-info/student-result']);
  }
  num_of_page_start: number = 1;
  num_of_page_defualt: number = 0;
  num_of_page_end: number = 10;

  // limit of for dispaly allStudents
  start: number = 0;
  end: number = 10;

  //go to page
  go_page(e) {
    this.start = (e.textContent - 1) * 10;
    this.end = e.textContent * 10;
    if (this.allStudents.length <= this.end) {
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
    this.start += 10;
    this.end += 10;
    if (this.allStudents.length <= this.end) {
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
    this.start -= 10;
    this.end -= 10;
    if (this.start > 0) {
      this.prev_able = false;
    } else {
      this.prev_able = true;
    }

    if (this.allStudents.length <= this.end) {
      this.next_isdisable = true;
    } else {
      this.next_isdisable = false;
    }
  }

  lenthOfStudent: number;

  name: string = '';
  email: string = '';
  gpa: number = 0;
  credit: number = 0;
  id_student: number = 0;
  password_student = '';
  phone_student: string = '';
  ssd_student: string = '';
  role: string = '';
  idOFCollage: number = 0;

  show: boolean = false;

  showPopupAdd() {
    this.show = true;
  }

  showPopup(
    nameing: string,
    emailing: string,
    gpaing: number,
    crediting: number,
    password: string,
    phone: string,
    ssd: string,
    id: number
  ) {
    this.show = true;
    this.name = nameing;
    this.email = emailing;
    this.id_student = id;
    this.password_student = password;
    this.phone_student = phone;
    this.ssd_student = ssd;
  }

  close_popup() {
    this.show = false;
  }

  track(item, index: number) {
    return item.index;
  }
}
