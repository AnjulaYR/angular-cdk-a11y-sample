import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  public boxTitleList: Array<string> = ['box1', 'box2', 'box3', 'box4'];

}
