import {Injectable, Output, EventEmitter, OnInit} from '@angular/core';
import {STRINGS_ENG} from '../strings_ENG';
import {STRINGS_PL} from '../strings_PL';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLangService implements OnInit {
    currentLang = 'PL';
    getCurrentLanguage$: Subject<string> = new Subject<string>();
   changeLangToENG() {
        const elementsPL = document.getElementsByClassName('lang-pl');
        for (let i = 0; i < elementsPL.length; i++) {
            (<HTMLElement>elementsPL[i]).style.display = 'none';
        }
        const elementsENG = document.getElementsByClassName('lang-eng');
        for (let i = 0; i < elementsENG.length; i++) {
            (<HTMLElement>elementsENG[i]).style.display = 'block';
        }
        this.currentLang = 'ENG';
        console.log(this.currentLang);
        this.getCurrentLanguage$.next(this.currentLang);
    }
   changeLangToPL() {
        const elementsENG = document.getElementsByClassName('lang-eng');
        for (let i = 0; i < elementsENG.length; i++) {
            (<HTMLElement>elementsENG[i]).style.display = 'none';
        }
        const elementsPL = document.getElementsByClassName('lang-pl');
        for (let i = 0; i < elementsPL.length; i++) {
            (<HTMLElement>elementsPL[i]).style.display = 'block';
        }
        this.currentLang = 'PL';
        console.log(this.currentLang);
       this.getCurrentLanguage$.next(this.currentLang);
    };

    getLang() {
        return this.currentLang;
    }
    ngOnInit() {;
        this.getCurrentLanguage$.next(this.currentLang);
    }
}
