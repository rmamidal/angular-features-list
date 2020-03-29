import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSearchComponent } from './example-search.component';

describe('ExampleSearchComponent', () => {
  let component: ExampleSearchComponent;
  let fixture: ComponentFixture<ExampleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
