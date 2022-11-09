import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListPanelComponent } from './file-list-panel.component';

describe('FileListPanelComponent', () => {
  let component: FileListPanelComponent;
  let fixture: ComponentFixture<FileListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileListPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
