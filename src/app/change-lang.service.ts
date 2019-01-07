import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {STRINGS_ENG} from '../strings_ENG';
import {STRINGS_PL} from '../strings_PL';

@Injectable({
  providedIn: 'root'
})
export class ChangeLangService {
    currentLanguage$: Observable<string>;
    currentLanguagePack$: Observable<any>;
    private currentLangSubject: BehaviorSubject<string>;
    private currentPackSubject: BehaviorSubject<any>;
    defaultlang = 'PL';
    defaultPack = STRINGS_PL;

    constructor() {
        this.currentLangSubject = new BehaviorSubject<string>(this.defaultlang);
        this.currentLanguage$ =  this.currentLangSubject.asObservable();
        this.currentPackSubject = new BehaviorSubject<any>(this.defaultPack);
        this.currentLanguagePack$ =  this.currentPackSubject.asObservable();
    }
   changeLangToENG() {
        this.currentLangSubject.next('ENG');
        this.currentPackSubject.next(STRINGS_ENG);
    }
   changeLangToPL() {
       this.currentLangSubject.next('PL');
       this.currentPackSubject.next(STRINGS_PL);
    }
}
