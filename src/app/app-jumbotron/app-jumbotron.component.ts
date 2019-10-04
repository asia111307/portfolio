import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './app-jumbotron.component.html',
  styleUrls: ['./app-jumbotron.component.css']
})
export class AppJumbotronComponent {
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
      this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
}
