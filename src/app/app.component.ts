import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username = '';
  repositories: any[] = [];
  isLoading = false;
  pagination = false;
  currentPage = 1;
  pageSize = 10;
  pageSizes = [10, 25, 50, 100];
  totalPages = 0;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  searchRepositories(): void {
    this.isLoading = true;
    this.githubService.getUserRepos(this.username, this.currentPage, this.pageSize).subscribe(repos => {
      this.repositories = repos;
      this.isLoading = false;
      this.pagination = repos.length === this.pageSize;
      this.totalPages = Math.ceil(this.repositories.length / this.pageSize);
    });
  }

  loadPage(page: number): void {
    this.currentPage = page;
    this.searchRepositories();
  }
}
