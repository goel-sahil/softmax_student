// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Environment
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    // Authentication/Authorization
    login(data) {
        return this.http.post('http://localhost:8000/api/student/login', data);
    }
}
