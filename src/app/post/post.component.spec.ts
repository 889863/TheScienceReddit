import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RoundToThousandPipe } from '../round-to-thousand.pipe';
import { PostComponent } from './post.component';
const data: any = require('../test_data/testData.json');

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent, RoundToThousandPipe],
      providers: [PostComponent,
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: dialogMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Post Component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should test Post Component - Testing the color code for Psychology Category', () => {
    expect(component.catagoryColor['Psychology']).toEqual('#041c3f');
  });

  it('should test Post Component - Testing the color code for Physics Category', () => {
    expect(component.catagoryColor['Physics']).toEqual('#d08dd2');
  });

  it('should test Post Component - Testing the color code for Environment Category', () => {
    expect(component.catagoryColor['Environment']).toEqual('#7dd284');
  });

  it('should test Post Component - Testing the color code for Earth Science Category', () => {
    expect(component.catagoryColor['Earth Science']).toEqual('#cea67a');
  });
});
