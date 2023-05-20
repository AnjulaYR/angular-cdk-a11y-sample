import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-focus-box',
  templateUrl: './focus-box.component.html',
  styleUrls: ['./focus-box.component.scss']
})
export class FocusBoxComponent {

  @Input()
  public title: string = '';

  @Output()
  public textOut: EventEmitter<string> = new EventEmitter();

  @ViewChild('box', {static: false})
  private box: ElementRef | null = null;

  constructor(private focusMonitor: FocusMonitor){ }

  public focus(focusOrigin: FocusOrigin = 'program'): void {
    if (this.box) {
      this.focusMonitor.focusVia(this.box, focusOrigin);
    }
  }

  public clickEnter(): void {
    this.textOut.emit(this.title);
  }

}
