import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { StudentService } from 'src/app/services/students/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css'],
})
export class AdminStudentComponent implements OnInit {
  allStudents: any;
  constructor(
    private loginRole: LoginService,
    private student: StudentService,
    private router: Router
  ) {
    if (
      Boolean(localStorage.getItem('hidden_instructor')) ||
      Boolean(localStorage.getItem('hidden_mediacenter_university')) ||
      Boolean(localStorage.getItem('hidden_support_university'))
    ) {
      router.navigate(['/academic-affairs/login']);
    }
  }

  ngOnInit(): void {
    this.student.getStudnts(localStorage.getItem('token')).subscribe((data) => {
      this.allStudents = data;
      this.allStudents = this.allStudents.users;
      console.log(this.allStudents);

      this.allStudents = this.allStudents.filter((element) => {
        return element.role_id == 4;
      });
      this.lenthOfStudent = this.allStudents.length;
      this.num_of_page_start = this.allStudents.length / 10 - 1;
      this.num_of_page_end = this.allStudents.length / 10;

      this.next();
      this.prev();
    });
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

  create_Student(name, email, password, phone, ssd, nameOFCollage, level) {
    switch (nameOFCollage.value) {
      case 'FCI_Luxor':
        this.idOFCollage = 2;
        break;
      case 'university_Luxor':
        this.idOFCollage = 1;
        break;
      case 'Arts_Luxor':
        this.idOFCollage = 3;
        break;
      case 'Archaeology_luxor':
        this.idOFCollage = 4;
        break;
      case 'alson_Luxor':
        this.idOFCollage = 5;
        break;
      case 'hotels_luxor':
        this.idOFCollage = 6;
        break;
      default:
        break;
    }

    let create_student = {
      name: name.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      ssd: ssd.value,
      collage: this.idOFCollage,
      level: level.value,
    };
    console.log(create_student);
    let token = localStorage.getItem('token');
    this.student.createStudent(create_student, token).subscribe((data) => {
      location.reload();
    });
  }

  edit(name, email, password, phone, ssd, level) {
    let update_student = {
      name: name.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      ssd: ssd.value,
      level: level.value,
    };
    let token = localStorage.getItem('token');
    let id = this.id_student;
    this.student.editStudent(update_student, token, id).subscribe((data) => {
      location.reload();
    });
  }

  delete_student() {
    let token = localStorage.getItem('token');
    let id = this.id_student;
    this.student.deleteStudent(token, id).subscribe((data) => {
      location.reload();
    });
  }

  track(item, index: number) {
    return item.index;
  }
}
