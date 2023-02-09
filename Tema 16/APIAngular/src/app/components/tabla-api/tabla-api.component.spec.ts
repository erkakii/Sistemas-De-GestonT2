import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaApiComponent } from './tabla-api.component';

describe('TablaApiComponent', () => {
  let component: TablaApiComponent;
  let fixture: ComponentFixture<TablaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
