import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayPageComponent } from './cosplay-page.component';

describe('CosplayPageComponent', () => {
  let component: CosplayPageComponent;
  let fixture: ComponentFixture<CosplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosplayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
