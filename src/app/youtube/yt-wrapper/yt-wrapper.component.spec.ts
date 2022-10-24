import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtWrapperComponent } from './yt-wrapper.component';

describe('YtWrapperComponent', () => {
  let component: YtWrapperComponent;
  let fixture: ComponentFixture<YtWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YtWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
