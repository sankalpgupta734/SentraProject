import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private api = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.api);
  }
}
