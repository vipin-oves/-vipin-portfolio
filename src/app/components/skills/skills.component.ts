// src/app/components/skills/skills.component.ts

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [];
  activeCategory = 0;
  animatedBars = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skillCategories = this.portfolioService.skillCategories;
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animatedBars) {
          this.animatedBars = true;
        }
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById('skills');
    if (el) observer.observe(el);
  }

  setActiveCategory(index: number): void {
    this.animatedBars = false;
    this.activeCategory = index;
    setTimeout(() => { this.animatedBars = true; }, 50);
  }

  getBarWidth(level: number): string {
    return this.animatedBars ? `${level}%` : '0%';
  }

  getLevelLabel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Familiar';
  }
}
