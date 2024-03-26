import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanformComponent } from './fanform.component';

describe('FanformComponent', () => {
  let component: FanformComponent;
  let fixture: ComponentFixture<FanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
