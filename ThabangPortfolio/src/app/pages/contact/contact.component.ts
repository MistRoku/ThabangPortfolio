import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { EmailService } from '../../services/email.service';
import { LucideMail, LucidePhone, LucideMapPin, LucideSend, LucideCircleUser } from '@lucide/angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideMail, LucidePhone, LucideMapPin, LucideSend, LucideCircleUser],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  personalInfo: any;
  formData = { name: '', email: '', message: '' };
  sending = false;
  successMsg = '';
  errorMsg = '';

  constructor(
    private data: PortfolioDataService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.personalInfo = this.data.getPersonalInfo();
  }



  async onSubmit() {
    this.sending = true;
    try {
      await this.emailService.sendContactForm(this.formData.name, this.formData.email, this.formData.message);
      this.successMsg = 'Message sent. Thank you for getting in touch.';
      this.errorMsg = '';
      this.formData = { name: '', email: '', message: '' };
    } catch {
      // Fallback: open mail client if we have an email, otherwise show error
      console.error('Send contact form failed');
      if (this.personalInfo && this.personalInfo.email) {
        window.location.href = `mailto:${this.personalInfo.email}?subject=${encodeURIComponent('Portfolio Contact from ' + this.formData.name)}&body=${encodeURIComponent(this.formData.message)}`;
        this.successMsg = 'Your email client opened. Please send the message manually.';
      } else {
        this.errorMsg = 'Failed to send message. Please try again later.';
      }
    } finally {
      this.sending = false;
    }
  }


}
