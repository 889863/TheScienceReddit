import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

import { RedditService } from './reddit.service';

describe('RedditService', () => {
  let service: RedditService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RedditService]
    });
    service = TestBed.get(RedditService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('RedditService should be created', () => {
    const service: RedditService = TestBed.get(RedditService);
    expect(service).toBeTruthy();
  });

  
  it('should test RedditService : getThePostDetails', fakeAsync(() => {
    let response = {};
    service.getThePostDetails('new_post_url');
    const req = httpTestingController.expectOne(
      "https://www.reddit.com//r/science/"
    );
    expect(req.request.method).toEqual("GET");
    req.flush(response);
    tick();
    expect(service).toBeTruthy();
  }));

  it('should test RedditService : getAuthorBio', fakeAsync(() => {
    let response = {};
    service.getAuthorBio('subin');
    const req = httpTestingController.expectOne(
      "https://www.reddit.com//r/science/"
    );
    expect(req.request.method).toEqual("GET");
    req.flush(response);
    tick();
    expect(service).toBeTruthy();
  }));

});
