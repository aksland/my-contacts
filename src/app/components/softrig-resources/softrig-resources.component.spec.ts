import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftrigResourcesComponent } from './softrig-resources.component';

describe('SoftrigResourcesComponent', () => {
  let component: SoftrigResourcesComponent;
  let fixture: ComponentFixture<SoftrigResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftrigResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftrigResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
