import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorUiComponent } from './editor-ui.component';

describe('EditorUiComponent', () => {
  let component: EditorUiComponent;
  let fixture: ComponentFixture<EditorUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
