import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardMoviesComponent } from './app-card-movies.component';

describe('AppCardMoviesComponent', () => {
  let component: AppCardMoviesComponent;
  let fixture: ComponentFixture<AppCardMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCardMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCardMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
