import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './app-graphics.component.html',
  styleUrls: ['./app-graphics.component.css']
})
export class AppGraphicsComponent {
    currentLang: string;
    currentPack: any;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
    }
}
