// src/app/components/contact/contact.component.ts

import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly personalInfo;

  constructor(private portfolioService: PortfolioService) {
    this.personalInfo = portfolioService.personalInfo;
  }
}