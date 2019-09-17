import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RoundToThousandPipe } from '../round-to-thousand.pipe';
import { RedditService } from '../reddit.service';
import { PostComponent } from '../post/post.component';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from './home.component';
import { reject } from 'q';
const redditFeed = { "kind": "Listing", "data": { "modhash": "", "dist": 25, "children": [{ "kind": "t3", "data": { "approved_at_utc": null, "subreddit": "todayilearned", "selftext": "", "author_fullname": "t2_15r42i", "saved": false, "mod_reason_title": null, "gilded": 0, "clicked": false, "title": "TIL there were no showers on board German U-Boats in WWII. During an entire two month patrol, the crew never bathed and instead cleaned themselves by swabbing with alcohol.", "link_flair_richtext": [], "subreddit_name_prefixed": "r/todayilearned", "hidden": false, "pwls": 6, "link_flair_css_class": null, "downs": 0, "thumbnail_height": null, "hide_score": true, "name": "t3_d1rjzc", "quarantine": false, "link_flair_text_color": "dark", "author_flair_background_color": null, "subreddit_type": "public", "ups": 2, "total_awards_received": 0, "media_embed": {}, "thumbnail_width": null, "author_flair_template_id": null, "is_original_content": false, "user_reports": [], "secure_media": null, "is_reddit_media_domain": false, "is_meta": false, "category": null, "secure_media_embed": {}, "link_flair_text": null, "can_mod_post": false, "score": 2, "approved_by": null, "thumbnail": "default", "edited": false, "author_flair_css_class": null, "steward_reports": [], "author_flair_richtext": [], "gildings": {}, "content_categories": null, "is_self": false, "mod_note": null, "created": 1568067736, "link_flair_type": "text", "wls": 6, "banned_by": null, "author_flair_type": "text", "domain": "msichicago.org", "allow_live_comments": false, "selftext_html": null, "likes": null, "suggested_sort": null, "banned_at_utc": null, "view_count": null, "archived": false, "no_follow": false, "is_crosspostable": false, "pinned": false, "over_18": false, "all_awardings": [], "media_only": false, "can_gild": false, "spoiler": false, "locked": false, "author_flair_text": null, "visited": false, "num_reports": null, "distinguished": null, "subreddit_id": "t5_2qqjc", "mod_reason_by": null, "removal_reason": null, "link_flair_background_color": "", "id": "d1rjzc", "is_robot_indexable": true, "report_reasons": null, "author": "AspireAgain", "num_crossposts": 0, "num_comments": 0, "send_replies": true, "whitelist_status": "all_ads", "contest_mode": false, "mod_reports": [], "author_patreon_flair": false, "author_flair_text_color": null, "permalink": "/r/todayilearned/comments/d1rjzc/til_there_were_no_showers_on_board_german_uboats/", "parent_whitelist_status": "all_ads", "stickied": false, "url": "https://www.msichicago.org/fileadmin/assets/whats_here/exhibits/U505/U-505_Instructors_Manual.pdf", "subreddit_subscribers": 21450674, "created_utc": 1568038936, "discussion_type": null, "media": null, "is_video": false } }], "after": "t3_d1pb33", "before": null } };
const popularSubreddit = {"kind":"Listing","data":{"modhash":"","dist":25,"children":[],"after":"t5_2w844","before":null}};
const errorData = { "headers": { "normalizedNames": {}, "lazyUpdate": null, "headers": {} }, "status": 0, "statusText": "Unknown Error", "url": "http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/", "ok": false, "name": "HttpErrorResponse", "message": "Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error", "error": { "isTrusted": true } };
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined,
    open: (): void => undefined
  };

  const dialogMock = {
    close: () => { },
    open: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HomeComponent, PostComponent, UserComponent, RedditService,
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: dialogMock }],
      imports: [HttpClientModule],
      declarations: [HomeComponent, RoundToThousandPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should test HomeComponent - 3 dot menu visibility', () => {
    expect(component.menuVisible).toBe(false);
  });

  it('should test HomeComponent - First Sort Option', () => {
    expect(component.sortOptions[0]).toBe('hot');
  });

  it('should test HomeComponent - Sort options available', () => {
    expect(component.sortOptions).toEqual(['hot', 'new', 'controversial', 'top', 'rising']);
  });

  it('should test HomeComponent - Testing the color code for Psychology Category', () => {
    expect(component.catagoryColor['Psychology']).toEqual('#041c3f');
  });

  it('should test HomeComponent - Testing the color code for Physics Category', () => {
    expect(component.catagoryColor['Physics']).toEqual('#d08dd2');
  });

  it('should test HomeComponent - Testing the color code for Environment Category', () => {
    expect(component.catagoryColor['Environment']).toEqual('#7dd284');
  });

  it('should test HomeComponent - Testing the color code for Earth Science Category', () => {
    expect(component.catagoryColor['Earth Science']).toEqual('#cea67a');
  });

  it('should test HomeComponent - selectedSortOption', () => {
    expect(component.selectedSortOption).toEqual('hot');
  });

  it('should test HomeComponent - toggleNavigation method', () => {
    component.toggleNavigation();
    expect(component.menuVisible).toEqual(true);
  });

  it("should test HomeComponent - getUpdatedRedditFeeds method - option new", async(() => {
    //const response: User[] = [];
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getUpdatedRedditFeeds').and.returnValue(of(redditFeed))
    component.getUpdatedRedditFeeds('new');
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('new');
  }));

  it("should test HomeComponent - getUpdatedRedditFeeds method - Failure", async(() => {
    //const response: User[] = [];
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getUpdatedRedditFeeds').and.returnValue(throwError(new Error('Test error')));
    component.getUpdatedRedditFeeds('new');
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('new');
  }));

  it("should test HomeComponent - getPopularSubreddits method", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getPopularSubreddits').and.returnValue(of(popularSubreddit))
    component.getPopularSubreddits();
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('hot');
  }));

  
  it("should test HomeComponent - getPopularSubreddits Failure", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getPopularSubreddits').and.returnValue(throwError(new Error('Test error')));
    component.getPopularSubreddits();
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('hot');
  }));


  it("should test HomeComponent - getAuthorBio method - Success", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getAuthorBio').and.returnValue(of(redditFeed))
    component.getAuthorBio('name');
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('hot');
  }));

  it("should test HomeComponent - getAuthorBio method - Failure", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getAuthorBio').and.returnValue(throwError(new Error('Test error')));
    component.getAuthorBio('name');
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('hot');
  }));

  it("should test HomeComponent - getThePostDetails method - Success", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getThePostDetails').and.returnValue(of(redditFeed))
    component.getThePostDetails('url_post');
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('hot');
  }));

  it("should test HomeComponent - getThePostDetails method - Failure", async(() => {
    let redditService = TestBed.get(RedditService);
    spyOn(redditService, 'getThePostDetails').and.returnValue(throwError(new Error('Test error')));
    component.getThePostDetails('url_post');
    fixture.detectChanges();
    expect(component.selectedSortOption).toEqual('hot');
  }));


});
