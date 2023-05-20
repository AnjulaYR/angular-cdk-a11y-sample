import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { FocusBoxComponent } from '../focus-box/focus-box.component';
import { FocusKeyManager } from '@angular/cdk/a11y'
import { ButtonComponent } from '../button/button.component';

type FocusItems = FocusBoxComponent | ButtonComponent;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterViewInit {

  @ViewChildren('focusableItem')
  public focusableItems: QueryList<FocusItems> | null = null;

  private keyManager: FocusKeyManager<FocusItems> | null = null;

  public boxTitleList: Array<string> = ['box1', 'box2', 'box3', 'box4'];
  public buttonTitleList: Array<string> = ['button1', 'button2'];

  public ngAfterViewInit(): void {
    if (this.focusableItems) {
      this.keyManager = new FocusKeyManager(this.focusableItems).withHorizontalOrientation('ltr').withWrap(true);
    }
  }

  public getPagefocus(): void {
    this.keyManager?.setFirstItemActive();
  }
  
  public onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      this.keyManager?.onKeydown(event);
    }
  }

}
