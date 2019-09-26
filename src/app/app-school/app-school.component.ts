import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-school',
  templateUrl: './app-school.component.html',
  styleUrls: ['./app-school.component.css']
})
export class AppSchoolComponent {
    currentLang: string;
    currentPack: any;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
    }
}
