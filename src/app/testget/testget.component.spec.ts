import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgetComponent } from './testget.component';

describe('TestgetComponent', () => {
  let component: TestgetComponent;
  let fixture: ComponentFixture<TestgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
