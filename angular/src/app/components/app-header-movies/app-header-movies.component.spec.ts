import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderMoviesComponent } from './app-header-movies.component';

describe('AppHeaderMoviesComponent', () => {
  let component: AppHeaderMoviesComponent;
  let fixture: ComponentFixture<AppHeaderMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeaderMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
