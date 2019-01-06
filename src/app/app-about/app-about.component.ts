import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {STRINGS_ENG} from '../../strings_ENG';
import {STRINGS_PL} from '../../strings_PL';
import {ChangeLangService} from '../change-lang.service';
import {SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent implements OnInit, OnChanges {
  @Input() currentLang: string;
  header: string;
  description: string;
  constructor(private changeLangService: ChangeLangService) { }
  setTexts() {
    if (this.currentLang === 'PL') {
      this.header = STRINGS_PL[0];
      this.description = STRINGS_PL[1];
    } else if (this.currentLang === 'ENG') {
        this.header = STRINGS_ENG[0];
        this.description = STRINGS_ENG[1];
    }
  }
  ngOnInit() {
      this.currentLang = this.changeLangService.currentLang;
      this.setTexts();
      this.changeLangService.getCurrentLanguage$.subscribe(
          (currentLang) => {
              this.currentLang = this.changeLangService.getLang();
          }
      );
  }

  ngOnChanges(changes: SimpleChanges) {
      this.setTexts();
  }
}
