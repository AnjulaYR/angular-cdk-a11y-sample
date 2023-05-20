import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public text: string = '';

  @Output()
  public textOut: EventEmitter<string> = new EventEmitter();

  @ViewChild('button', {static: false})
  private button: ElementRef | null = null;

  constructor( private focusMonitor: FocusMonitor) { }

  public focus(focusOrigin: FocusOrigin = 'program'): void {
    if (this.button) {
      this.focusMonitor.focusVia(this.button, focusOrigin);
    }
  }

  public clickEnter(): void {
    this.textOut.emit(this.text);
  }

}
