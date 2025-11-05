import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPageComponentHtmlComponent } from './hero-page.component';

describe('HeroPageComponentHtmlComponent', () => {
  let component: HeroPageComponentHtmlComponent;
  let fixture: ComponentFixture<HeroPageComponentHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPageComponentHtmlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroPageComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
