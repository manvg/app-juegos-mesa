import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuraComponent } from './aventura.component';

describe('AventuraComponent', () => {
  let component: AventuraComponent;
  let fixture: ComponentFixture<AventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AventuraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
