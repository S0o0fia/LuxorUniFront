import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ExamResult } from './../../interface/result/exam-result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) {}

  getResult(token,level_id) {
    return this.http.get<ExamResult>(`${env.urlAPI}/examResult/${level_id}?token=${token}`);
  }

  postResult(token,course){
    let mess = `course_id=${Number(course.title)}&level_id=${Number(course.level)}&user_id=${Number(course.student_id)}&id_number=${Number(course.term)}&college_id=${Number(course.college)}&total_grade=${Number(course.grade)}`;
    console.log(mess)
    let url =`${env.urlAPI}/createExamResult?${mess}&token=${token}`
    return this.http.post<any>(url, null);
  }
}
