import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  public token;
  public endPoint = environment.api_url;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getNotices(page) {
    this.token = localStorage.getItem('token');
    return this.http.get(this.endPoint + '/notices?page=' + page, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
