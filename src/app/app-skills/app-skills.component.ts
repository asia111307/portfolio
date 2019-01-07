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
    maintitle: string;
    description: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.maintitle = this.currentPack[28];
        this.description = this.currentPack[29];
    }
}
