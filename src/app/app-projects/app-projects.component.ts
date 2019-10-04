import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.css']
})
export class AppProjectsComponent {
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
    this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
}
