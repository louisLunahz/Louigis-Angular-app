import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCardInformationComponent } from './enter-card-information.component';

describe('EnterCardInformationComponent', () => {
  let component: EnterCardInformationComponent;
  let fixture: ComponentFixture<EnterCardInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCardInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
