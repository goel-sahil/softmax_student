import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public token;
  public endPoint = environment.api_url;

  constructor(private http: HttpClient) { }

  enableNotifications(data) {
    this.token = localStorage.getItem('token');
    return this.http.post(this.endPoint + '/notifications/endpoint', data, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    });
  }
}
