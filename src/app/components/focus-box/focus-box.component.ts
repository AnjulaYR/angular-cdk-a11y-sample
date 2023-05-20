import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-focus-box',
  templateUrl: './focus-box.component.html',
  styleUrls: ['./focus-box.component.scss']
})
export class FocusBoxComponent {

  @Input()
  public title: string = '';

}
