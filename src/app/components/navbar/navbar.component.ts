// src/app/components/navbar/navbar.component.ts

import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';

  navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#certifications' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly personalInfo;

  private scrollHandler!: () => void;
  private observer!: IntersectionObserver;

  constructor(private portfolioService: PortfolioService) {
    this.personalInfo = this.portfolioService.personalInfo;
  }

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(href: string): void {
    this.closeMobileMenu();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  private setupIntersectionObserver(): void {
    const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'resume', 'links', 'contact'];
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
    );

    setTimeout(() => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) this.observer.observe(el);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
