// src/app/services/portfolio.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  PersonalInfo,
  SocialLink,
  SkillCategory,
  Project,
  Certification,
  ContactFormData
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  // ── Personal Info ─────────────────────────────────────────────────────
  readonly personalInfo: PersonalInfo = {
    name: 'Vipin Kumar Yadav',
    firstName: 'Vipin Kumar',
    lastName: 'Yadav',
    title: 'Java Backend Developer',
    tagline: 'Building robust microservices & cloud-native systems',
    bio: `Passionate Java Backend Developer with 4.6 years of hands-on experience architecting high-performance, 
    scalable distributed systems. I specialize in Spring Boot microservices, event-driven architectures, 
    and RESTful API design — delivering clean, testable code that scales from startup MVPs to enterprise platforms. 
    I thrive at the intersection of system design, DevOps automation, and backend engineering, 
    and I'm always exploring new patterns that make systems more resilient and maintainable.`,
    yearsOfExperience: 4.6,
    currentRole: 'Senior Software Engineer',
    currentCompany: 'Anaptyss India',
    location: 'Gurugram, India',
    email: 'vipinkryadav1998@gmail.com',
    avatarInitials: 'VY'
  };

  // ── Social Links ──────────────────────────────────────────────────────
  readonly socialLinks: SocialLink[] = [
    // {
    //   platform: 'GitHub',
    //   url: 'https://github.com/vipinkumaryadav',
    //   label: 'vipinkumaryadav',
    //   icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 
    //     0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463 
    //     -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832 
    //     .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683 
    //     -.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 
    //     1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 
    //     1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336 
    //     -.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    //   </svg>`
    // },
    {
      platform: 'LinkedIn',
      url: 'linkedin.com/in/vipinkumaryadav0506',
      label: 'vipinkumaryadav',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 
        2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 
        5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 
        13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 
        1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>`
     },
    // {
    //   platform: 'Naukri',
    //   url: 'https://naukri.com/mnjuser/profile/vipinkumaryadav',
    //   label: 'Naukri Profile',
    //   icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 
    //     3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 
    //     4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    //   </svg>`
    // },
    {
      platform: 'Email',
      url: 'mailto:vipinkryadav1998@gmail.com',
      label: 'vipinkryadav1998@gmail.com',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2 
        -2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>`
    }
  ];

  // ── Skills ────────────────────────────────────────────────────────────
  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java 8+', level: 90 },
        { name: 'Spring Boot', level: 92 },
        ///{ name: 'Spring Cloud', level: 85 },
        { name: 'Microservices', level: 95 },
        { name: 'REST API Design', level: 93 },
        //{ name: 'GraphQL', level: 72 },
        //{ name: 'Apache Kafka', level: 78 },
        //{ name: 'RabbitMQ', level: 74 },
        { name: 'Hibernate / JPA', level: 90 },
        { name: 'Maven / Gradle', level: 92 }
      ]
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server', level: 88 },
        { name: 'MySQL', level: 95 },
        { name: 'Oracle', level: 80 },
        { name: 'Redis', level: 80 },
        //{ name: 'Elasticsearch', level: 70 },
        //{ name: 'Liquibase', level: 72 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS (EC2, S3, RDS, Lambda)', level: 82 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Jenkins CI/CD', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        //{ name: 'Terraform', level: 65 },
        { name: 'Linux / Bash', level: 90 }
      ]
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular 17', level: 75 },
        { name: 'TypeScript', level: 78 },
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'RxJS', level: 72 }
      ]
    },
    {
  category: 'Security',
  icon: '🔐',
  skills: [
    { name: 'JWT (JSON Web Tokens)', level: 88 },
    { name: 'OAuth 2.0', level: 80 },
    { name: 'Basic Authentication', level: 90 },
    { name: 'Bearer Token Auth', level: 88 },
    { name: 'Spring Security', level: 85 },
    { name: 'API Authentication & Authorization', level: 87 }
  ]
},
    {
      category: 'Tools & Practices',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', level: 92 },
        { name: 'JUnit 5 / Mockito', level: 88 },
        { name: 'Postman / Swagger', level: 95 },
        { name: 'IntelliJ IDEA', level: 92 },
        { name: 'SonarQube', level: 90 },
        { name: 'Agile / Scrum', level: 90 },
        { name: 'SVN', level: 95 },
        { name: 'Hubspot', level: 95 }
      ]
    }
    
  ];

  // ── Projects ──────────────────────────────────────────────────────────
  // readonly projects: Project[] = [
  //   {
  //     id: 1,
  //     title: 'ShopWave — E-Commerce Microservices Platform',
  //     description: 'A production-grade e-commerce backend built with 8 loosely coupled microservices orchestrated via Kubernetes.',
  //     longDescription: 'ShopWave is a fully containerized, cloud-native e-commerce platform architected with Spring Cloud microservices. It features an API Gateway (Spring Cloud Gateway), service discovery (Eureka), distributed configuration (Spring Cloud Config), event-driven order processing via Apache Kafka, JWT-based authentication, and a Redis caching layer. Each service owns its own PostgreSQL database schema, following the database-per-service pattern.',
  //     techStack: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Apache Kafka', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'JWT'],
  //     githubUrl: 'https://github.com/vipinkumaryadav/shopwave-microservices',
  //     liveUrl: 'https://shopwave-demo.vipinkumaryadav.dev',
  //     featured: true,
  //     status: 'live',
  //     year: 2024,
  //     category: 'Microservices'
  //   },
  //   {
  //     id: 2,
  //     title: 'SecurePay — Banking Transaction API',
  //     description: 'High-throughput financial transaction API handling 10,000+ TPS with full ACID compliance and idempotency guarantees.',
  //     longDescription: 'SecurePay is a RESTful banking API built to handle real-world financial transaction workloads. It implements the saga pattern for distributed transactions, circuit breakers (Resilience4j), rate limiting, idempotency keys, and end-to-end encryption. The system includes a fraud detection hook, audit logging to Elasticsearch, and real-time alerts via WebSocket.',
  //     techStack: ['Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Elasticsearch', 'Resilience4j', 'WebSocket', 'AES-256'],
  //     githubUrl: 'https://github.com/vipinkumaryadav/securepay-api',
  //     featured: true,
  //     status: 'live',
  //     year: 2024,
  //     category: 'FinTech API'
  //   },
  //   {
  //     id: 3,
  //     title: 'TaskFlow — Real-Time Task Management System',
  //     description: 'Collaborative project management tool with real-time updates, role-based access, and Kanban boards.',
  //     longDescription: 'TaskFlow is a full-stack task management application built with a Spring Boot backend and Angular frontend. It features real-time collaboration via WebSocket (STOMP), RBAC with Spring Security, drag-and-drop Kanban boards, file attachments via AWS S3, email notifications, and detailed analytics dashboards. CI/CD pipeline deployed via GitHub Actions to AWS EC2.',
  //     techStack: ['Java 17', 'Spring Boot', 'Angular 17', 'WebSocket', 'PostgreSQL', 'AWS S3', 'GitHub Actions', 'Nginx'],
  //     githubUrl: 'https://github.com/vipinkumaryadav/taskflow-app',
  //     liveUrl: 'https://taskflow.vipinkumaryadav.dev',
  //     featured: true,
  //     status: 'live',
  //     year: 2023,
  //     category: 'Full Stack'
  //   },
  //   {
  //     id: 4,
  //     title: 'LogLens — Distributed Log Aggregation Service',
  //     description: 'Centralized log ingestion and search platform for microservices, processing 50M+ log events per day.',
  //     longDescription: 'LogLens provides a scalable log aggregation pipeline that ingests, parses, and indexes log events from distributed services. Built with Spring Batch for bulk processing, Kafka for streaming ingestion, and Elasticsearch for indexing and search. Features a Kibana-inspired REST API for querying, alerting rules via cron jobs, and S3-backed cold storage with tiered retention policies.',
  //     techStack: ['Java 17', 'Spring Batch', 'Apache Kafka', 'Elasticsearch', 'MongoDB', 'Docker', 'AWS S3', 'Spring Boot'],
  //     githubUrl: 'https://github.com/vipinkumaryadav/loglens',
  //     featured: false,
  //     status: 'live',
  //     year: 2023,
  //     category: 'Data Engineering'
  //   },
  //   {
  //     id: 5,
  //     title: 'AuthVault — OAuth2 / OIDC Authorization Server',
  //     description: 'Custom authorization server implementing OAuth2 / OpenID Connect from scratch using Spring Authorization Server.',
  //     longDescription: 'AuthVault is a production-ready OAuth2 and OIDC authorization server built on Spring Authorization Server 1.x. Supports authorization code flow, PKCE, refresh tokens, token introspection, and JWK Set endpoint. Includes a developer portal UI for managing OAuth2 clients, scopes, and registered applications. Deployed on Kubernetes with high availability configuration.',
  //     techStack: ['Java 17', 'Spring Security', 'Spring Authorization Server', 'PostgreSQL', 'Redis', 'Kubernetes', 'Helm'],
  //     githubUrl: 'https://github.com/vipinkumaryadav/authvault',
  //     featured: false,
  //     status: 'live',
  //     year: 2022,
  //     category: 'Security'
  //   },
  //   {
  //     id: 6,
  //     title: 'DataSync — Multi-Tenant ETL Pipeline',
  //     description: 'Cloud-native ETL service supporting 40+ connectors for data migration and real-time synchronization.',
  //     longDescription: 'DataSync is a configurable ETL platform that connects to databases, REST APIs, file systems, and SaaS tools. Built with Spring Integration and Spring Batch, it supports parallel processing, error recovery, and transformation pipelines defined via YAML configuration. Features a REST management API, webhook notifications, and a React-based status dashboard.',
  //     techStack: ['Java 17', 'Spring Integration', 'Spring Batch', 'PostgreSQL', 'RabbitMQ', 'Docker', 'YAML DSL'],
  //     githubUrl: 'https://github.com/vipinkumaryadav/datasync-etl',
  //     featured: false,
  //     status: 'in-progress',
  //     year: 2024,
  //     category: 'Data Pipeline'
  //   }
  // ];

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'POS — Point of Sale Integration Platform',
      description: 'Developed and integrated a POS system with multiple payment gateways, ERPs, CRMs, WhatsApp, and eInvoice services for real-time retail transactions.',
      longDescription: 'Built a comprehensive Point of Sale system using Spring Boot and RESTful APIs enabling secure, fast payment and business operations. Integrated payment gateways (Paytm, Pinelabs, Razorpay, Amazon Pay), ERPs (SAP, Gold), and CRMs (Ngage, Globallinker, Sage). Implemented real-time WhatsApp and eInvoice integrations for instant order updates and digital invoicing. Ensured system reliability via Spring Security, Hibernate-based persistence, and optimized MySQL queries.',
      techStack: ['Java 8', 'Spring Boot', 'Spring Security', 'JWT', 'OAuth 2.0', 'Hibernate', 'MySQL', 'REST APIs', 'Razorpay', 'Paytm', 'Git'],
      githubUrl: '#',
      featured: true,
      status: 'live',
      year: 2024,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: '6DX MDM — Master Data Management Platform',
      description: 'Centralized Java-based integration platform enabling secure REST APIs, real-time data sync, and scalable microservices for retail master data management.',
      longDescription: 'Designed and developed a centralized integration platform using Java, Spring Boot, and Microservices to enable secure RESTful API communication between multiple enterprise systems. Implemented real-time data synchronization, authentication, and error handling with Spring Security and Hibernate/JPA. Enhanced system scalability within an Agile environment, reducing manual integration efforts and improving cross-department interoperability.',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Microservices', 'Jenkins', 'JWT', 'Basic Authentication', 'REST APIs', 'JSON'],
      githubUrl: '#',
      featured: true,
      status: 'live',
      year: 2021,
      category: 'Microservices'
    },
    {
      id: 3,
      title: 'Message Box — Async Message Processing System',
      description: 'Asynchronous message-processing system using Spring Boot, CRON jobs, and REST APIs to handle high-volume transactional data reliably.',
      longDescription: 'Developed a message queue–based data processing system using Spring Boot to handle large-scale transactional logs and queued data asynchronously with scheduled CRON jobs. Implemented robust monitoring and retry mechanisms for failed queues, integrated REST APIs for data access, and used centralized logging and MySQL persistence for end-to-end traceability. Optimized for scalability and low-latency processing, reducing manual intervention across business modules.',
      techStack: ['Java 8', 'Spring Boot', 'Spring Security', 'Bearer Token', 'Hibernate', 'MySQL', 'REST APIs', 'Maven', 'Git'],
      githubUrl: '#',
      featured: true,
      status: 'live',
      year: 2023,
      category: 'Data Pipeline'
    },
    {
      id: 4,
      title: 'iTiny — URL Shortener Service',
      description: 'Scalable URL-shortening service built with Spring Boot microservices, Redis caching and MySQL for high performance and fast link resolution.',
      longDescription: 'Developed a URL-shortening application for generating short, shareable links designed with a microservices architecture for scalability and high performance. Integrated Redis caching for sub-millisecond lookups and MySQL for persistent storage. Implemented CI/CD pipelines using Jenkins for automated deployment and applied database query optimization for maximum throughput.',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Microservices', 'Redis', 'Jenkins', 'REST APIs'],
      githubUrl: '#',
      featured: false,
      status: 'live',
      year: 2024,
      category: 'Microservices'
    },
    {
      id: 5,
      title: 'HubSpot CRM Automation',
      description: 'Integrated HubSpot CRM with internal systems to fully automate lead and deal creation workflows, achieving 100% automated deal generation.',
      longDescription: 'Designed and implemented HubSpot workflow automations using custom objects, associations, and triggers to streamline marketing and sales operations across multiple business units. Integrated third-party systems with HubSpot CRM using REST APIs and custom-coded workflow actions, enabling automated data synchronization and reliable data pipelines. Reduced manual effort by 40% and improved lead management and customer engagement tracking.',
      techStack: ['Java 8', 'Spring Boot', 'HubSpot CRM API v3/v4', 'REST APIs', 'AWS', 'Agile'],
      githubUrl: '#',
      featured: false,
      status: 'live',
      year: 2025,
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'AuthGuard — Spring Security JWT Starter',
      description: 'Production-ready authentication and authorization boilerplate using Spring Security with JWT, Role-Based Access Control, and token refresh flow.',
      longDescription: 'Built a reusable Spring Boot security starter implementing complete JWT-based authentication — login, token generation, validation, expiry, and refresh token rotation. Includes Role-Based Access Control (RBAC) with USER, ADMIN, and MANAGER roles, method-level security using @PreAuthorize, and a custom UserDetailsService backed by MySQL. Follows stateless REST API design with no session management.',
      techStack: ['Java 8', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate', 'REST APIs', 'Maven'],
      githubUrl: '#',
      featured: false,
      status: 'live',
      year: 2023,
      category: 'Security'
    },
    {
      id: 7,
      title: 'OAuth2 Gateway — SSO Integration Service',
      description: 'Single Sign-On integration service supporting OAuth 2.0 Authorization Code Flow with third-party providers and Bearer token validation for downstream APIs.',
      longDescription: 'Developed an OAuth 2.0 based Single Sign-On gateway using Spring Security OAuth2 Client. Supports Authorization Code Flow with PKCE, Bearer token propagation to downstream microservices, and token introspection. Implemented a custom token filter chain to validate Bearer tokens on every request, with detailed audit logging of authentication events. Designed to act as a central auth layer in a microservices ecosystem.',
      techStack: ['Java 8', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'Bearer Token', 'REST APIs', 'MySQL', 'AWS'],
      githubUrl: '#',
      featured: false,
      status: 'live',
      year: 2024,
      category: 'Security'
    },
    {
      id: 8,
      title: 'SecureAPI — Multi-Auth REST API Framework',
      description: 'Flexible REST API security framework supporting multiple authentication strategies — JWT, Basic Auth, Bearer, and API Key — switchable per endpoint.',
      longDescription: 'Designed a multi-authentication REST API framework where each endpoint can be secured independently using JWT, HTTP Basic Authentication, Bearer tokens, or API Key headers. Built custom Spring Security filter chains for each auth strategy with a unified exception handling layer returning RFC 7807 problem details. Includes rate limiting per client, request logging, and an admin dashboard endpoint for token revocation. Used as a base template across multiple internal projects.',
      techStack: ['Java 8', 'Spring Boot', 'Spring Security', 'JWT', 'Basic Authentication', 'Bearer Token', 'MySQL', 'Hibernate', 'REST APIs'],
      githubUrl: '#',
      featured: false,
      status: 'live',
      year: 2023,
      category: 'Security'
    }
  ];

  // // ── Certifications ────────────────────────────────────────────────────
  // readonly certifications: Certification[] = [
  //   {
  //     id: 1,
  //     title: 'AWS Certified Developer – Associate',
  //     provider: 'Amazon Web Services',
  //     year: 2024,
  //     credentialId: 'AWS-DVA-C02-2024-ARJUN',
  //     verifyUrl: 'https://aws.amazon.com/verification',
  //     icon: '☁️',
  //     badgeColor: '#FF9900'
  //   },
  //   {
  //     id: 2,
  //     title: 'Pivotal Certified Professional Spring Developer',
  //     provider: 'VMware (Spring)',
  //     year: 2023,
  //     credentialId: 'PCP-SPRING-2023-0847',
  //     verifyUrl: 'https://www.credly.com/badges/example',
  //     icon: '🌿',
  //     badgeColor: '#6DB33F'
  //   },
  //   {
  //     id: 3,
  //     title: 'Oracle Certified Professional: Java SE 17 Developer',
  //     provider: 'Oracle Corporation',
  //     year: 2022,
  //     credentialId: 'OCP-JAVA-SE17-2022-ARJ',
  //     verifyUrl: 'https://catalog-education.oracle.com/verify',
  //     icon: '☕',
  //     badgeColor: '#F80000'
  //   },
  //   {
  //     id: 4,
  //     title: 'Certified Kubernetes Application Developer (CKAD)',
  //     provider: 'Cloud Native Computing Foundation',
  //     year: 2023,
  //     credentialId: 'CKAD-2023-LF-7842',
  //     verifyUrl: 'https://training.linuxfoundation.org/verify',
  //     icon: '⎈',
  //     badgeColor: '#326CE5'
  //   },
  //   {
  //     id: 5,
  //     title: 'Docker Certified Associate (DCA)',
  //     provider: 'Docker, Inc.',
  //     year: 2022,
  //     credentialId: 'DCA-2022-7291',
  //     verifyUrl: 'https://credentials.docker.com/verify',
  //     icon: '🐳',
  //     badgeColor: '#2496ED'
  //   },
  //   {
  //     id: 6,
  //     title: 'Apache Kafka Confluent Developer Certification',
  //     provider: 'Confluent',
  //     year: 2023,
  //     credentialId: 'CCDAK-2023-CF-1194',
  //     verifyUrl: 'https://www.confluent.io/training/kafka-developer/',
  //     icon: '📡',
  //     badgeColor: '#CC0000'
  //   }
  // ];

  readonly certifications: Certification[] = [
    {
      id: 1,
      title: 'Master of Computer Applications (MCA)',
      provider: 'Center for Development of Advance Computing (CDAC)',
      year: 2021,
      credentialId: 'Delhi University',
      verifyUrl: '#',
      icon: '🎓',
      badgeColor: '#00d4ff'
    },
    {
      id: 2,
      title: 'Bachelor of Science — Computer Science (Hons)',
      provider: 'Bhaskaracharya College of Applied Sciences (BCAS)',
      year: 2018,
      credentialId: 'Delhi University',
      verifyUrl: '#',
      icon: '🏛️',
      badgeColor: '#7c3aed'
    }
  ];

  // ── Resume / Cover Letter (localStorage) ─────────────────────────────
  private resumeKey = 'portfolio_resume';
  private coverLetterKey = 'portfolio_cover_letter';

  private resumeSubject = new BehaviorSubject<string | null>(this.loadFromStorage(this.resumeKey));
  private coverLetterSubject = new BehaviorSubject<string | null>(this.loadFromStorage(this.coverLetterKey));

  resume$: Observable<string | null> = this.resumeSubject.asObservable();
  coverLetter$: Observable<string | null> = this.coverLetterSubject.asObservable();

  private loadFromStorage(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  saveResume(base64: string): void {
    try {
      localStorage.setItem(this.resumeKey, base64);
      this.resumeSubject.next(base64);
    } catch (e) {
      console.warn('localStorage quota exceeded — resume not saved.', e);
    }
  }

  saveCoverLetter(base64: string): void {
    try {
      localStorage.setItem(this.coverLetterKey, base64);
      this.coverLetterSubject.next(base64);
    } catch (e) {
      console.warn('localStorage quota exceeded — cover letter not saved.', e);
    }
  }

  clearResume(): void {
    localStorage.removeItem(this.resumeKey);
    this.resumeSubject.next(null);
  }

  clearCoverLetter(): void {
    localStorage.removeItem(this.coverLetterKey);
    this.coverLetterSubject.next(null);
  }

  // ── Contact Form ──────────────────────────────────────────────────────
  submitContactForm(data: ContactFormData): Observable<boolean> {
    // In production, replace with a real HTTP POST to a backend/form service
    console.log('Contact form submission:', data);
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 1200);
    });
  }
}
