import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-skills',
  templateUrl: './app-skills.component.html',
  styleUrls: ['./app-skills.component.css']
})
export class AppSkillsComponent {
    currentLang: string;
    currentPack: any;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
    }
}
