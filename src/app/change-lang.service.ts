import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {STRINGS_ENG} from '../strings_ENG';
import {STRINGS_PL} from '../strings_PL';

@Injectable({
    providedIn: 'root'
})
export class ChangeLangService {
    currentLanguagePack$: Observable<any>;
    private currentPackSubject: BehaviorSubject<any>;
    defaultPack = STRINGS_PL;

    constructor() {
        this.currentPackSubject = new BehaviorSubject<any>(this.defaultPack);
        this.currentLanguagePack$ =  this.currentPackSubject.asObservable();
    }
    changeLangToENG() {
        this.currentPackSubject.next(STRINGS_ENG);
    }
    changeLangToPL() {
        this.currentPackSubject.next(STRINGS_PL);
    }
}
