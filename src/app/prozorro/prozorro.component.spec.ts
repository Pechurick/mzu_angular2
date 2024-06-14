import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProzorroComponent } from './prozorro.component';

describe('ProzorroComponent', () => {
  let component: ProzorroComponent;
  let fixture: ComponentFixture<ProzorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProzorroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProzorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
