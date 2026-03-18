// src/app/components/about/about.component.ts

import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly personalInfo;

  highlights = [
    { icon: '🏗️', title: 'System Architecture', desc: 'Designed scalable microservices with Spring Cloud, Kafka, and distributed tracing.' },
    { icon: '⚡', title: 'Performance Tuning', desc: 'Optimized JVM memory, query performance and achieved 10x throughput improvements.' },
    { icon: '🔐', title: 'Security First', desc: 'Implemented OAuth2/OIDC, Spring Security, rate limiting, and audit trails.' },
    { icon: '☁️', title: 'Cloud Native', desc: 'Deployed containerized services to AWS EKS with Helm charts and GitOps workflows.' }
  ];

  timeline: TimelineItem[] = [
    {
      year: 'Oct 2025 – Present',
      role: 'Senior Software Engineer',
      company: 'Anaptyss, Noida',
      description: 'Designing HubSpot workflow automations using custom objects, associations, and triggers to streamline marketing and sales operations. Integrating third-party systems with HubSpot CRM via REST APIs, reducing manual effort by 40%. Built scalable backend solutions using HubSpot CRM APIs (v3/v4) for automated enrollments and property handling.',
      tags: ['Java 8', 'Spring Cloud', 'Kafka', 'Kubernetes', 'AWS','Python','React','Hubspot','Samespace']
    },
    {
      year: 'Nov 2023 – Oct 2025',
      role: 'Associate Consultant',
      company: 'Intellect Design Arena Ltd., Delhi',
      description: 'Managing intricate software development projects focused on process enhancement and bug resolution. Facilitating seamless integration of Value-Added Services (VAS) and payment gateways through API development. Optimized BI data population processes resulting in a 50% increase in processing speed. Led transition from SVN to Git for version control.',
      tags: ['Java 8', 'Spring Boot', 'REST APIs', 'Git', 'AWS', 'Microservices']
    },
    {
      year: 'Nov 2022 – Oct 2023',
      role: 'System Engineer',
      company: 'Intellect Design Arena Ltd., Delhi',
      description: 'Managed integration of Sodexo wallets and Gold ERP systems using RESTful APIs. Developed and deployed CRM services for Loyalty and Coupon functionalities. Deployed microservices on AWS to enhance scalability and reliability. Managed data pipelines for SAP order management and returns.',
      tags: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'AWS', 'SAP', 'RESTful APIs']
    },
      {
      year: 'Aug 2021 – Oct 2022',
      role: 'System Trainee',
      company: 'Intellect Design Arena Ltd., Delhi',
      description: 'Developed and maintained IT solutions contributing to business intelligence processes. Designed and implemented Java 8 RESTful APIs for seamless SAP integration. Managed SQL to MySQL data movement pipelines. Achieved a 30% increase in BI process efficiency by integrating disparate systems.',
      tags: ['Java 8', 'RESTful APIs', 'SQL', 'MySQL', 'Spring Framework', 'SVN']
    }
  ];

  constructor(private portfolioService: PortfolioService) {
    this.personalInfo = portfolioService.personalInfo;
  }
}
