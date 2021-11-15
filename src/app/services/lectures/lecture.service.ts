import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataLectures } from 'src/app/interface/lectures/lectures';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LectureService {
  constructor(private http: HttpClient) {}

  getLectures() {
    return this.http.get<DataLectures>(
      `${env.urlAPI}/allLectureTables`
    );
  }

  deleteLecture(token, id_Lectures) {
    let url = `${env.urlAPI}/deleteLectureTables/${id_Lectures}?token=${token}`;
    return this.http.get<any>(url);
  }

  createLecture(lecture, token) {
    const fData = new FormData();
    fData.append('image', lecture.image);
    fData.append('specialist', localStorage.getItem('specialist'));
    let url = `${env.urlAPI}/addLectureTables?token=${token}`;
    return this.http.post<any>(url, fData);
  }
}
