import { Component, Input} from '@angular/core';
import { ChangeLangService } from '../change-lang.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './app-top-nav.component.html',
  styleUrls: ['./app-top-nav.component.css']
})
export class AppTopNavComponent {
  constructor(private changeLangService: ChangeLangService) {}
  changeLangToENG() {
      this.changeLangService.changeLangToENG();
  }
  changeLangToPL() {
    this.changeLangService.changeLangToPL();
  }

}
