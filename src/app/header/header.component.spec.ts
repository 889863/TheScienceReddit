import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let menuVisible: boolean = false;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Header Component', () => {
    expect(component).toBeTruthy();
    expect(component.menuVisible).toEqual(false);
  });

  it('should test Header Component - toggleNavigation method', () => {
    expect(component).toBeTruthy();
    component.toggleNavigation();
    expect(component.menuVisible).toEqual(true);
  });

});
