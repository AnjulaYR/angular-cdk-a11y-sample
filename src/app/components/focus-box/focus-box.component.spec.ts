import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusBoxComponent } from './focus-box.component';

describe('FocusBoxComponent', () => {
  let component: FocusBoxComponent;
  let fixture: ComponentFixture<FocusBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusBoxComponent]
    });
    fixture = TestBed.createComponent(FocusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
