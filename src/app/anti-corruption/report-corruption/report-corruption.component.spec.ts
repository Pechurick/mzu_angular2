import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCorruptionComponent } from './report-corruption.component';

describe('ReportCorruptionComponent', () => {
  let component: ReportCorruptionComponent;
  let fixture: ComponentFixture<ReportCorruptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportCorruptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCorruptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
