import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dark-mode-app';
  isDarkModeOn = false;
  timeNow = new Date();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.checkUsersTheme();
  }

  checkUsersTheme() {
    const userHasDarkMode = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    userHasDarkMode ? this.document.body.classList.add('dark') : this.document.body.classList.add('light');
  }

  toggleDarkMode() {
    this.isDarkModeOn = !this.isDarkModeOn;
    this.document.body.classList.toggle('dark');
    this.document.body.classList.toggle('light');
  }
}
