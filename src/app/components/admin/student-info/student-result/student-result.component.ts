import { ResultService } from './../../../../services/results/result.service';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css'],
})
export class StudentResultComponent implements OnInit {
  constructor(private result: ResultService, private course: CourseService) {}
  allResult: any;
  allCourse: any;
  ngOnInit(): void {
    this.result
      .getResult(localStorage.getItem('token'), this.chooseCollege)
      .subscribe((data) => {
        this.allResult = data;
        this.num_of_page_start = this.allResult.length / 10 - 1;
        this.num_of_page_end = this.allResult.length / 10;
        this.lenthOfStudent = this.allResult.length
        this.allTermResult = this.allResult.filter((element) => {
          return Number(localStorage.getItem("studentResultId")) == element.user_id
        });

        this.next();
        this.prev();
      });

    this.course.getCourse(localStorage.getItem('token')).subscribe((data) => {
      this.allCourse = data;
      console.log(data)
    });
  }

  filterAllCourse: any;
  chooseCollege: number = 1;
  termOfYear: number = 1;
  college(e) {
    this.chooseCollege = e.target.value ? e.target.value : this.chooseCollege;
    this.result
      .getResult(localStorage.getItem('token'), this.chooseCollege)
      .subscribe((data) => {
        
        this.allResult = data;
        this.allTermResult = this.allResult.filter((element) => {
          return Number(localStorage.getItem("studentResultId")) == element.user_id
        });

        this.lenthOfStudent = this.allResult.length

      });
  }

  nameOfSubject:any
  level(e){
    console.log(e.target.value)
    this.nameOfSubject = this.allCourse.filter(element=>{
      return (Number(e.target.value) == element.level_id  && Number(localStorage.getItem('college_id') == element.college_id ))
    })
  }

  allTermResult: any;
  // term(e) {
  //   this.termOfYear = e.target.value ? e.target.value : this.termOfYear;
  //   this.allTermResult = this.allResult.filter((element) => {
  //     return Number(this.termOfYear) == element.id_number;
  //   });
  // }

  num_of_page_start: number = 1;
  num_of_page_defualt: number = 0;
  num_of_page_end: number = 10;

  // limit of for dispaly allResult
  start: number = 0;
  end: number = 10;

  //go to page
  go_page(e) {
    this.start = (e.textContent - 1) * 10;
    this.end = e.textContent * 10;
    if (this.allResult.length <= this.end) {
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
    if (this.allResult.length <= this.end) {
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

    if (this.allResult.length <= this.end) {
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

  showPopup() {
    this.show = true;
  }

  close_popup() {
    this.show = false;
  }

  track(item, index: number) {
    return item.index;
  }

  create_Course( level,name, term, grade) {
    let college = localStorage.getItem('college_id');
    let student_id = localStorage.getItem('studentResultId');
    let title = this.allCourse.find(element=>{
      if(element.title == name.value)
        return element.id
    })
    let course = {
      title: title.id,
      level: level.value,
      term: term.value,
      grade: grade.value,
      college: college,
      student_id:student_id
    };

    console.log(course)

    this.result
      .postResult(localStorage.getItem('token'), course)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
