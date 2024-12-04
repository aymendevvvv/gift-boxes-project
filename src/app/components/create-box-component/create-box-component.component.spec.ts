import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoxComponentComponent } from './create-box-component.component';

describe('CreateBoxComponentComponent', () => {
  let component: CreateBoxComponentComponent;
  let fixture: ComponentFixture<CreateBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBoxComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
