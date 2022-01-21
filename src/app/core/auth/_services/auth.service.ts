// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Environment
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {
    public endpoint = environment.api_url;
    constructor(private http: HttpClient) {
    }

    // Authentication/Authorization
    login(data) {
        return this.http.post(this.endpoint + '/login', data);
    }
}
