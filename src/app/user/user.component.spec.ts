import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RoundToThousandPipe } from '../round-to-thousand.pipe';
import { RedditService } from '../reddit.service';
import { UserComponent } from './user.component';
const data: any = require('../test_data/userBio_testData.json');
const userPosts: any = require('../test_data/userPosts_testData.json');
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };
  const dialogMock = {
    close: () => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserComponent,
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MAT_DIALOG_DATA, useValue: data.data },
        { provide: MatDialogRef, useValue: dialogMock }
      ],
      declarations: [UserComponent, RoundToThousandPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create User component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should test User component - Testing the color code for Psychology Category', () => {
    expect(component.catagoryColor['Psychology']).toEqual('#041c3f');
  });

  it('should test User component - Testing the color code for Physics Category', () => {
    expect(component.catagoryColor['Physics']).toEqual('#d08dd2');
  });

  it('should test User component - Testing the color code for Environment Category', () => {
    expect(component.catagoryColor['Environment']).toEqual('#7dd284');
  });

  it('should test User component - Testing the color code for Earth Science Category', () => {
    expect(component.catagoryColor['Earth Science']).toEqual('#cea67a');
  });

  it("should test User component - getAuthorInfo method - Success", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getAuthorInfo').and.returnValue(of(userPosts))
    component.getAuthorInfo('url_post');
    fixture.detectChanges();
    expect(component.recentPosts.length).toEqual(1);
  }));

  it("should create User component - getAuthorInfo method - Failure", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getAuthorInfo').and.returnValue(throwError(new Error('Test error')));
    component.getAuthorInfo('author_name');
    fixture.detectChanges();
    //expect(component.selectedSortOption).toEqual('hot');
  }));
});
