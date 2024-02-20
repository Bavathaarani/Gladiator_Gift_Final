import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    // Add your logout logic here (e.g., clearing session, redirecting to login page)
    // For now, let's navigate to the login page
    this.router.navigate(['/login']);
  }
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
