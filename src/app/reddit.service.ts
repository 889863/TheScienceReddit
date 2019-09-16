import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Post } from './home/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  serviceEndPoint: string = environment.redditUrl;
  subreddit: string = environment.subreddit;
  constructor(private http: HttpClient) { }

  getUpdatedRedditFeeds(option) : Observable<Post[]>{
    let url = this.serviceEndPoint + this.subreddit+option+'.json?sort='+option;
    return this.http.get<Post[]>(url);
  }

  getThePostDetails(postUrl) : Observable<any>{
    let url = this.serviceEndPoint+postUrl.slice(0, -1)+'.json';
    console.log("URL called", url);
    return this.http.get<any>(url);
  }

  getAuthorBio(userName) : Observable<any>{
    let url = this.serviceEndPoint+'user/'+userName+'/about.json';
    return this.http.get<any>(url);
  }
  getAuthorInfo(userName) : Observable<any>{
    let url = this.serviceEndPoint+'user/'+userName+'.json';
    return this.http.get<any>(url);
  }
  getPopularSubreddits() : Observable<any>{
    let url = this.serviceEndPoint+'subreddits/popular.json';
    return this.http.get<any>(url);
  }
}
