// src/app/components/resume/resume.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Subscription } from 'rxjs';

interface UploadState {
  data: string | null;
  fileName: string | null;
  uploadDate: string | null;
  fileSize: string | null;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {
  resumeState: UploadState = { data: null, fileName: null, uploadDate: null, fileSize: null };
  coverLetterState: UploadState = { data: null, fileName: null, uploadDate: null, fileSize: null };

  resumeDragOver = false;
  coverLetterDragOver = false;
  toastMessage = '';
  showToast = false;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  private subs = new Subscription();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.subs.add(
      this.portfolioService.resume$.subscribe(data => {
        if (data) {
          this.resumeState = this.buildState(data, 'resume');
        } else {
          this.resumeState = { data: null, fileName: null, uploadDate: null, fileSize: null };
        }
      })
    );
    this.subs.add(
      this.portfolioService.coverLetter$.subscribe(data => {
        if (data) {
          this.coverLetterState = this.buildState(data, 'cover-letter');
        } else {
          this.coverLetterState = { data: null, fileName: null, uploadDate: null, fileSize: null };
        }
      })
    );
  }

  private buildState(data: string, type: string): UploadState {
    const metaKey = `portfolio_${type}_meta`;
    let meta: { name: string; date: string; size: string } = {
      name: `${type}.pdf`,
      date: new Date().toLocaleDateString('en-IN'),
      size: this.estimateSize(data)
    };
    try {
      const raw = localStorage.getItem(metaKey);
      if (raw) meta = JSON.parse(raw);
    } catch { /* use defaults */ }
    return { data, fileName: meta.name, uploadDate: meta.date, fileSize: meta.size };
  }

  private estimateSize(base64: string): string {
    const bytes = (base64.length * 3) / 4;
    return `${(bytes / 1024).toFixed(0)} KB`;
  }

  onFileSelected(event: Event, type: 'resume' | 'cover-letter'): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.processFile(input.files[0], type);
  }

  onDrop(event: DragEvent, type: 'resume' | 'cover-letter'): void {
    event.preventDefault();
    type === 'resume' ? (this.resumeDragOver = false) : (this.coverLetterDragOver = false);
    const file = event.dataTransfer?.files?.[0];
    if (file) this.processFile(file, type);
  }

  onDragOver(event: DragEvent, type: 'resume' | 'cover-letter'): void {
    event.preventDefault();
    type === 'resume' ? (this.resumeDragOver = true) : (this.coverLetterDragOver = true);
  }

  onDragLeave(type: 'resume' | 'cover-letter'): void {
    type === 'resume' ? (this.resumeDragOver = false) : (this.coverLetterDragOver = false);
  }

  private processFile(file: File, type: 'resume' | 'cover-letter'): void {
    if (file.type !== 'application/pdf') {
      this.showToastMsg('❌ Only PDF files are accepted.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.showToastMsg('❌ File size must be under 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      const meta = {
        name: file.name,
        date: new Date().toLocaleDateString('en-IN'),
        size: `${(file.size / 1024).toFixed(0)} KB`
      };
      try {
        localStorage.setItem(`portfolio_${type}_meta`, JSON.stringify(meta));
      } catch { /* ignore */ }

      if (type === 'resume') {
        this.portfolioService.saveResume(base64);
      } else {
        this.portfolioService.saveCoverLetter(base64);
      }
      this.showToastMsg(`✅ ${type === 'resume' ? 'Resume' : 'Cover letter'} uploaded successfully!`);
    };
    reader.readAsDataURL(file);
  }

  viewDocument(state: UploadState): void {
    if (!state.data) return;
    const win = window.open();
    if (win) {
      win.document.write(`
        <html><head><title>${state.fileName}</title></head>
        <body style="margin:0">
          <embed width="100%" height="100%" src="${state.data}" type="application/pdf"/>
        </body></html>
      `);
    }
  }

  downloadDocument(state: UploadState, defaultName: string): void {
    if (!state.data) return;
    const a = document.createElement('a');
    a.href = state.data;
    a.download = state.fileName ?? defaultName;
    a.click();
  }

  clearDocument(type: 'resume' | 'cover-letter'): void {
    if (type === 'resume') {
      this.portfolioService.clearResume();
      localStorage.removeItem('portfolio_resume_meta');
    } else {
      this.portfolioService.clearCoverLetter();
      localStorage.removeItem('portfolio_cover-letter_meta');
    }
    this.showToastMsg(`🗑️ ${type === 'resume' ? 'Resume' : 'Cover letter'} removed.`);
  }

  private showToastMsg(message: string): void {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastMessage = message;
    this.showToast = true;
    this.toastTimer = setTimeout(() => { this.showToast = false; }, 3500);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }
}
