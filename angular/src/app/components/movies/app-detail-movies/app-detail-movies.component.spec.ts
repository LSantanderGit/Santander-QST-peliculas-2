import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailMoviesComponent } from './app-detail-movies.component';

describe('AppDetailMoviesComponent', () => {
  let component: AppDetailMoviesComponent;
  let fixture: ComponentFixture<AppDetailMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetailMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDetailMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
