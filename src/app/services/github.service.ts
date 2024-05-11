import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepos(username: string, page: number = 1, perPage: number = 10): Observable<any[]> {
    const url = `${this.apiUrl}/users/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get<any[]>(url);
  }
}

