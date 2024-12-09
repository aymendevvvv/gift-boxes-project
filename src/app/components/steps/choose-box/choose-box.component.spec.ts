import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBoxComponent } from './choose-box.component';

describe('ChooseBoxComponent', () => {
  let component: ChooseBoxComponent;
  let fixture: ComponentFixture<ChooseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
