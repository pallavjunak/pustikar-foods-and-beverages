import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMiniComponent } from './about-mini.component';

describe('AboutMiniComponent', () => {
  let component: AboutMiniComponent;
  let fixture: ComponentFixture<AboutMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
