import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-research',
  templateUrl: './app-research.component.html',
  styleUrls: ['./app-research.component.css']
})
export class AppResearchComponent {
    currentLang: string;
    currentPack: any;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
    }
}
