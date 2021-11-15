import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataExams } from 'src/app/interface/exams/exams';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  getExams() {
    return this.http.get<DataExams>(
      `${env.urlAPI}/allExamTables`
    );
  }

  deleteExam(token, id_Exams) {
    let url = `${env.urlAPI}/deleteExamTables/${id_Exams}?token=${token}`;
    return this.http.get<any>(url);
  }

  createExam(exam, token) {
    const fData = new FormData();
    fData.append('image', exam.image);
    fData.append('specialist', localStorage.getItem('specialist'));
    let url = `${env.urlAPI}/addExamTables?token=${token}`;
    return this.http.post<any>(url, fData);
  }
}
