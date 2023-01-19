import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceCoverPageComponent } from './dancecover-page.component';

describe('DancecoverPageComponent', () => {
  let component: DanceCoverPageComponent;
  let fixture: ComponentFixture<DanceCoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceCoverPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceCoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
