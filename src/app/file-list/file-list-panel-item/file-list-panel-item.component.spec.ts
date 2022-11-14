import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListPanelItemComponent } from './file-list-panel-item.component';

describe('FileListPanelItemComponent', () => {
  let component: FileListPanelItemComponent;
  let fixture: ComponentFixture<FileListPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileListPanelItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileListPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
