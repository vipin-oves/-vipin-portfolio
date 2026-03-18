// src/app/components/projects/projects.component.ts

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = 'all';
  expandedId: number | null = null;

  filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Featured', value: 'featured' },
    { label: 'Microservices', value: 'Microservices' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'Security', value: 'Security' },
    { label: 'Data', value: 'Data' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.allProjects = this.portfolioService.projects;
    this.filteredProjects = [...this.allProjects];
  }

  setFilter(value: string): void {
    this.activeFilter = value;
    if (value === 'all') {
      this.filteredProjects = [...this.allProjects];
    } else if (value === 'featured') {
      this.filteredProjects = this.allProjects.filter(p => p.featured);
    } else if (value === 'Data') {
      this.filteredProjects = this.allProjects.filter(p =>
        p.category.toLowerCase().includes('data') || p.category.toLowerCase().includes('pipeline')
      );
    } else {
      this.filteredProjects = this.allProjects.filter(p => p.category === value);
    }
    this.expandedId = null;
  }

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      'live': '● Live',
      'in-progress': '◐ In Progress',
      'archived': '○ Archived'
    };
    return map[status] ?? status;
  }
}
