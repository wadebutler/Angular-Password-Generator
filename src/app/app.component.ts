import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  addLetters = false;
  addSymbols = false;
  addNumbers = false;
  length = 0;
  password = '';

  useLetters() {
    this.addLetters = !this.addLetters;
  }

  useSymbols() {
    this.addSymbols = !this.addSymbols;
  }

  useNumbers() {
    this.addNumbers = !this.addNumbers;
  }

  handleLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  handleClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const sybmbols = '!@#$%^&*()';
    let validChars = '';

    if (this.addLetters) {
      validChars += letters;
    }

    if (this.addNumbers) {
      validChars += numbers;
    }

    if (this.addSymbols) {
      validChars += sybmbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
