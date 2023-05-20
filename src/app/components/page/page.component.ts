import { AfterViewInit, ChangeDetectionStrategy, Component, QueryList, ViewChildren } from '@angular/core';
import { FocusBoxComponent } from '../focus-box/focus-box.component';
import { FocusKeyManager } from '@angular/cdk/a11y'
import { ButtonComponent } from '../button/button.component';

type FocusItems = FocusBoxComponent | ButtonComponent;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PageComponent implements AfterViewInit {

  @ViewChildren('focusableItem')
  public focusableItems: QueryList<FocusItems> | null = null;

  private keyManager: FocusKeyManager<FocusItems> | null = null;

  public boxTitleList: Array<string> = ['box1', 'box2', 'box3', 'box4'];
  public buttonTitleList: Array<string> = ['button1', 'button2'];

  public output: string = '';
  public value: string = '';

  constructor() { }

  public ngAfterViewInit(): void {
    if (this.focusableItems) {
      this.keyManager = new FocusKeyManager(this.focusableItems).withHorizontalOrientation('ltr').withWrap(true);
    }
  }

  public getPagefocus(): void {
    this.keyManager?.setFirstItemActive();
    this.output = "Focus on Parent";
  }
  
  public onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      this.keyManager?.onKeydown(event);
      this.output = 'Arrow Clicked';
      this.setText('');
    }
    if (event.key === 'Enter') {
      if (this.keyManager?.activeItem instanceof FocusBoxComponent) {
        this.keyManager.activeItem.clickEnter();
      }
      if (this.keyManager?.activeItem instanceof ButtonComponent) {
        this.keyManager.activeItem.clickEnter();
      }
      this.output = 'Enter Clicked';
      
    }
  }

  public setText(event: string): void {
    this.value = event;
  }

}
