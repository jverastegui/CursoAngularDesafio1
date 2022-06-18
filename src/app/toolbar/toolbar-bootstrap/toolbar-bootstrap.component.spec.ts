import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBootstrapComponent } from './toolbar-bootstrap.component';

describe('ToolbarBootstrapComponent', () => {
  let component: ToolbarBootstrapComponent;
  let fixture: ComponentFixture<ToolbarBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
