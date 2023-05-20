import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { FocusBoxComponent } from '../focus-box/focus-box.component';
import { FocusKeyManager } from '@angular/cdk/a11y'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterViewInit {

  @ViewChildren('focusableItem')
  public focusableItems: QueryList<FocusBoxComponent> | null = null;

  private keyManager: FocusKeyManager<FocusBoxComponent> | null = null;

  public boxTitleList: Array<string> = ['box1', 'box2', 'box3', 'box4'];

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
