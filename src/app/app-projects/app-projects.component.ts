import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.css']
})
export class AppProjectsComponent implements OnInit {
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
    this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
  setEventListenerScroll() {
    window.addEventListener('scroll', function() {
      const projects = document.getElementsByClassName('project-item');
      const current_window_width = window.innerWidth;
      if (current_window_width >= 1060) {
        for (let i = 0; i < (projects.length); i++) {
          if (projects[i].getBoundingClientRect().top < (window.innerHeight * 0.8)) {
            (<HTMLElement> projects[i]).style.opacity = '1';
          }
        }
      }
    });
  };
  ngOnInit() {
    this.setEventListenerScroll();
  }
}
