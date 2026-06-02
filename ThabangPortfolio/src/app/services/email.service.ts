import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private emailJSLoaded = false;

  constructor() {
    this.loadEmailJS();
  }

  private loadEmailJS(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof (window as any).emailjs !== 'undefined') {
        this.emailJSLoaded = true;
        (window as any).emailjs.init(environment.emailJS.publicKey);
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        this.emailJSLoaded = true;
        (window as any).emailjs.init(environment.emailJS.publicKey);
        resolve();
      };
      script.onerror = () => reject(new Error('Failed to load EmailJS'));
      document.head.appendChild(script);
    });
  }

  async sendContactForm(name: string, email: string, message: string): Promise<any> {
    // Wait for EmailJS to load
    if (!this.emailJSLoaded) {
      await this.loadEmailJS();
    }

    // The keys here MUST match the placeholders in your EmailJS template
    const templateParams = {
      from_name: name,      // matches {{from_name}} in template
      from_email: email,    // matches {{from_email}}
      message: message,     // matches {{message}}
      reply_to: email
    };

    try {
      const response = await (window as any).emailjs.send(
        environment.emailJS.serviceId,
        environment.emailJS.templateId,
        templateParams,
        environment.emailJS.publicKey
      );
      return response;
    } catch (error) {
      console.error('EmailJS error:', error);
      throw error;
    }
  }
}
