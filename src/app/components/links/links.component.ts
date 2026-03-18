// src/app/components/links/links.component.ts

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SocialLink } from '../../models/portfolio.model';

interface EnrichedLink extends SocialLink {
  description: string;
  color: string;
  stats?: string;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  enrichedLinks: EnrichedLink[] = [];

  private descriptions: Record<string, { description: string; color: string; stats?: string }> = {
    'GitHub': {
      description: 'Browse source code, open-source contributions, and project repositories.',
      color: '#6e40c9',
      stats: '20+ repositories'
    },
    'LinkedIn': {
      description: 'Connect professionally, view work history, endorsements, and recommendations.',
      color: '#0077b5',
      stats: '500+ connections'
    },
    'Naukri': {
      description: 'View my complete job profile, skills, and recruiter-verified work experience.',
      color: '#ff7555',
      stats: 'Active profile'
    },
    'Email': {
      description: 'Reach me directly for opportunities, collaborations, or technical discussions.',
      color: '#00d4ff',
      stats: 'Usually replies in 24h'
    }
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.enrichedLinks = this.portfolioService.socialLinks.map(link => ({
      ...link,
      description: this.descriptions[link.platform]?.description ?? '',
      color: this.descriptions[link.platform]?.color ?? '#00d4ff',
      stats: this.descriptions[link.platform]?.stats
    }));
  }
}
