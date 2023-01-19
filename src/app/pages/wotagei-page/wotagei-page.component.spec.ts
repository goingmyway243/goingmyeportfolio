import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WotageiPageComponent } from './wotagei-page.component';

describe('WotageiPageComponent', () => {
  let component: WotageiPageComponent;
  let fixture: ComponentFixture<WotageiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WotageiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WotageiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
