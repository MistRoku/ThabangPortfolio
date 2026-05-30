import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';

declare const emailjs: any;  // Bypasses TypeScript checking

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor() {
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
      emailjs.init(environment.emailJS.publicKey);
    }
  }

  async sendContactForm(name: string, email: string, message: string): Promise<any> {
    // Load the script dynamically if not already loaded
    if (typeof emailjs === 'undefined') {
      await this.loadScript();
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    return emailjs.send(
      environment.emailJS.serviceId,
      environment.emailJS.templateId,
      templateParams,
      environment.emailJS.publicKey
    );
  }

  private loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        emailjs.init(environment.emailJS.publicKey);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
}
