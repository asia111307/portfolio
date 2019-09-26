import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.css']
})
export class AppProjectsComponent implements OnInit {

  currentLang: string;
  currentPack: any;

  constructor(private changeLangService: ChangeLangService) {
    this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
    this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
  }

  ngOnInit() {
  }

}
