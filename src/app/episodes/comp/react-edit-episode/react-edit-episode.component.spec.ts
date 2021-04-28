import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactEditEpisodeComponent } from './react-edit-episode.component';

describe('ReactEditEpisodeComponent', () => {
  let component: ReactEditEpisodeComponent;
  let fixture: ComponentFixture<ReactEditEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactEditEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactEditEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
