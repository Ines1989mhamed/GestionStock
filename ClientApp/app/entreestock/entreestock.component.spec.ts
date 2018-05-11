import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreestockComponent } from './entreestock.component';

describe('EntreestockComponent', () => {
  let component: EntreestockComponent;
  let fixture: ComponentFixture<EntreestockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreestockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
