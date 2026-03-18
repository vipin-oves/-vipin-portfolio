// src/app/components/contact/contact.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  charCount = 0;
  readonly maxChars = 1000;

  readonly personalInfo;

  private subs = new Subscription();

  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioService
  ) {
    this.personalInfo = portfolioService.personalInfo;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.maxLength(120)]],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(this.maxChars)]]
    });

    this.subs.add(
      this.contactForm.get('message')!.valueChanges.subscribe((val: string) => {
        this.charCount = val?.length ?? 0;
      })
    );
  }

  get name(): AbstractControl { return this.contactForm.get('name')!; }
  get email(): AbstractControl { return this.contactForm.get('email')!; }
  get subject(): AbstractControl { return this.contactForm.get('subject')!; }
  get message(): AbstractControl { return this.contactForm.get('message')!; }

  isInvalid(ctrl: AbstractControl): boolean {
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

  getError(ctrl: AbstractControl): string {
    if (ctrl.hasError('required')) return 'This field is required.';
    if (ctrl.hasError('email')) return 'Please enter a valid email address.';
    if (ctrl.hasError('minlength')) {
      const req = ctrl.getError('minlength').requiredLength;
      return `Minimum ${req} characters required.`;
    }
    if (ctrl.hasError('maxlength')) {
      const max = ctrl.getError('maxlength').requiredLength;
      return `Maximum ${max} characters allowed.`;
    }
    return '';
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const { subject: _s, ...formData } = this.contactForm.value;

    this.subs.add(
      this.portfolioService.submitContactForm(formData).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          this.charCount = 0;
          setTimeout(() => { this.submitSuccess = false; }, 6000);
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = true;
          setTimeout(() => { this.submitError = false; }, 6000);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
