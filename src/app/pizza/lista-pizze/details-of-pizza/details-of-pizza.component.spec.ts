import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfPizzaComponent } from './details-of-pizza.component';

describe('DetailsOfPizzaComponent', () => {
  let component: DetailsOfPizzaComponent;
  let fixture: ComponentFixture<DetailsOfPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOfPizzaComponent]
    });
    fixture = TestBed.createComponent(DetailsOfPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
