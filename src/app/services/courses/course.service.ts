import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Course } from './../../interface/courses/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourse(token) {
    return this.http.get<Course>(`${env.urlAPI}/courses?token=${token}`);
  }

  postCourse(token,course){
    let mess = `title=${course.title}&level_id=${course.level}&credit=${course.hours}&college_id=${course.college}&grade=${course.grade}`;
    console.log(mess)
    let url =`${env.urlAPI}/createCourse?${mess}&token=${token}`
    return this.http.post<any>(url, null);
  }
}
