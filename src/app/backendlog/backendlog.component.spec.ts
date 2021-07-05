import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendlogComponent } from './backendlog.component';

describe('BackendlogComponent', () => {
  let component: BackendlogComponent;
  let fixture: ComponentFixture<BackendlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
