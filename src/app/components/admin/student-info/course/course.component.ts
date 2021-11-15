import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(private course: CourseService) {}
  allCourse: any;

  ngOnInit(): void {
    this.course.getCourse(localStorage.getItem('token')).subscribe((data) => {
      this.allCourse = data;

      this.allCourse = this.allCourse.filter((element) => {
        return element.college_id == localStorage.getItem('college_id');
      });

      this.lenthOfStudent = this.allCourse.length;
      this.num_of_page_start = this.allCourse.length / 10 - 1;
      this.num_of_page_end = this.allCourse.length / 10;

      this.next();
      this.prev();
    });
  }

  filterAllCourse: any;
  chooseCollege: number = 1;
  college(e) {
    this.chooseCollege = e.target.value ? e.target.value : this.chooseCollege;
    this.filterAllCourse = this.allCourse.filter((element) => {
      return element.level_id == Number(this.chooseCollege);
    });
  }

  num_of_page_start: number = 1;
  num_of_page_defualt: number = 0;
  num_of_page_end: number = 10;

  // limit of for dispaly allCourse
  start: number = 0;
  end: number = 10;

  //go to page
  go_page(e) {
    this.start = (e.textContent - 1) * 10;
    this.end = e.textContent * 10;
    if (this.allCourse.length <= this.end) {
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
    if (this.allCourse.length <= this.end) {
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

    if (this.allCourse.length <= this.end) {
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

  create_Course(name, level, hours, grade) {
    let college=localStorage.getItem("college_id")
    let course={
      title:name.value,
      level:level.value,
      hours:hours.value,
      grade:grade.value,
      college:college
    }

    this.course.postCourse(localStorage.getItem("token"),course).subscribe(data=>{
      console.log(data)
    })
  }
}
