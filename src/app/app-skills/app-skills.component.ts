import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-skills',
  templateUrl: './app-skills.component.html',
  styleUrls: ['./app-skills.component.css']
})
export class AppSkillsComponent implements OnInit {
  currentLang: string;
  currentPack: any;

  constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
  }

  ngOnInit() {
      window.addEventListener('scroll', function() {
          const skills = document.getElementsByClassName('skill-box-description');
          const current_window_width = window.innerWidth;
          if (current_window_width >= 1060) {
              for (let i = 0; i < (skills.length); i++) {
                  if (skills[i].getBoundingClientRect().top < (window.innerHeight * 0.8)) {
                      (<HTMLElement> skills[i]).style.opacity = '1';
                  }
              }
          }
      });
  }
}
