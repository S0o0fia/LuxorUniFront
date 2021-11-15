import { DataStudents } from './../../interface/students/students';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudnts(token) {
    return this.http.get<DataStudents>(
      `${env.urlAPI}/adminUsers?token=${token}`
    );
  }

  editStudent(student, token, id_student) {
    let student_one = `name=${student.name}&init_password=${student.password}&phone=${student.phone}&info=${student.info}&ssd=${student.ssd}&level_id=${student.level}&role_id=4`;
    let url =
      `${env.urlAPI}/adminUpdateUser/${id_student}?${student_one}` +
      '&token=' +
      token;
    return this.http.post<any>(url, null);
  }

  deleteStudent(token, id_student) {
    let url = `${env.urlAPI}/adminDeleteUser/${id_student}?token=` + token;
    return this.http.get<any>(url);
  }

  createStudent(student, token) {
    let student_one = `name=${student.name}&email=${student.email}&phone=${student.phone}&college_id=${student.collage}
    &init_password=${student.password}&ssd=${student.ssd}&level_id=${student.level}&role_id=4`;
    console.log(student_one)
    let url = `${env.urlAPI}/addUser?${student_one}&token=${token}`;
    return this.http.post<any>(url, null);
  }
}
