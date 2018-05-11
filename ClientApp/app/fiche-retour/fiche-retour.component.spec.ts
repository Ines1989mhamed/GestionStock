import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheRetourComponent } from './fiche-retour.component';

describe('FicheRetourComponent', () => {
  let component: FicheRetourComponent;
  let fixture: ComponentFixture<FicheRetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheRetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
