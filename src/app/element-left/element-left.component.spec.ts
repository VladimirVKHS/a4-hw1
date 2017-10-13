import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLeftComponent } from './element-left.component';

describe('ElementLeftComponent', () => {
  let component: ElementLeftComponent;
  let fixture: ComponentFixture<ElementLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
