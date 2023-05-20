import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public text: string = '';

  @ViewChild('button', {static: false})
  private button: ElementRef | null = null;

  constructor( private focusMonitor: FocusMonitor) { }

  public focus(focusOrigin: FocusOrigin = 'program'): void {
    if (this.button) {
      this.focusMonitor.focusVia(this.button, focusOrigin);
    }
  }

}
