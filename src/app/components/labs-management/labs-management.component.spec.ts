import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsManagementComponent } from './labs-management.component';

describe('LabsManagementComponent', () => {
  let component: LabsManagementComponent;
  let fixture: ComponentFixture<LabsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
