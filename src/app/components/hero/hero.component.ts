// src/app/components/hero/hero.component.ts

import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('typedText', { static: true }) typedTextRef!: ElementRef;

  readonly personalInfo;
  readonly socialLinks;

  typedStrings = [
    'Java Backend Developer',
    'Spring Boot Architect',
    'Microservices Engineer',
    'API Design Expert',
    'Cloud-Native Builder'
  ];

  displayText = '';
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;

  stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Shipped' },
    { value: '8', label: 'Microservices Built' },
    { value: '3', label: 'Cloud Platforms' }
  ];

  constructor(private portfolioService: PortfolioService) {
    this.personalInfo = portfolioService.personalInfo;
    this.socialLinks = portfolioService.socialLinks.filter(l =>
      ['GitHub', 'LinkedIn', 'Naukri'].includes(l.platform)
    );
  }

  ngOnInit(): void {
    this.startTyping();
  }

  private startTyping(): void {
    const current = this.typedStrings[this.currentIndex];
    const speed = this.isDeleting ? 55 : 110;

    if (!this.isDeleting) {
      this.displayText = current.slice(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex > current.length) {
        this.isDeleting = true;
        this.typeTimer = setTimeout(() => this.startTyping(), 2000);
        return;
      }
    } else {
      this.displayText = current.slice(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.typedStrings.length;
      }
    }

    this.typeTimer = setTimeout(() => this.startTyping(), speed);
  }

  scrollToProjects(event: Event): void {
    event.preventDefault();
    this.scrollToSection('#projects', event);
  }

  scrollToSection(href: string, event?: Event): void {
    if (event) event.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    if (this.typeTimer) clearTimeout(this.typeTimer);
  }
}
