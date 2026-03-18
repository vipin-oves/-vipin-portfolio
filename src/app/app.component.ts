// src/app/app.component.ts

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showScrollTop = false;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop = window.scrollY > 600;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
