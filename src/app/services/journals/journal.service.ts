import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journal } from 'src/app/interface/journals/journal';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private http: HttpClient) {
    this.search_index = 0;
  }

  getJournal() {
    return this.http.get<Array<Journal>>(`${env.urlAPI}/magazines`);
  }

  createJournal(journal, token) {
    const fData = new FormData();
    fData.append('title', journal.title);
    fData.append('description', journal.description);
    fData.append('image', journal.image);
    fData.append('section', journal.depa);
    let url = `${env.urlAPI}/createMagazine?token=${token}`;
    return this.http.post<any>(url, fData);
  }

  editJournal(journal, id_Journal, token) {
    const fData = new FormData();
    fData.append('image', journal.image);
    fData.append('description', journal.description);
    fData.append('title', journal.title);
    fData.append('department', journal.department);

    let url = `${env.urlAPI}/updateMagazine/${id_Journal}?token=${token}`;
    return this.http.post<any>(url, fData);
  }

  deleteJournal(id_Journal, token) {
    let url = `${env.urlAPI}/deleteMagazine/${id_Journal}?token=${token}`;
    return this.http.get<any>(url);
  }

  search: any[];
  search_index: number;
  search_arr(data) {
    this.search = data;
  }
}
