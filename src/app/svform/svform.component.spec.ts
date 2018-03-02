import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvformComponent } from './svform.component';

describe('SvformComponent', () => {
  let component: SvformComponent;
  let fixture: ComponentFixture<SvformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
