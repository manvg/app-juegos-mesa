import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantilComponent } from './infantil.component';

describe('InfantilComponent', () => {
  let component: InfantilComponent;
  let fixture: ComponentFixture<InfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfantilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
