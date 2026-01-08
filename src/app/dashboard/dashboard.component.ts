import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  loading = true;
  error = '';
  user: any;

  constructor(
    private dashboard: DashboardService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.error = '';

    this.dashboard.getUsers().subscribe({
      next: res => {
        this.users = res.users;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
