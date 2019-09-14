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

    /*let xhr = new XMLHttpRequest
    xhr.open("GET","https://www.reddit.com/r/videos/new.json",true)
    xhr.send(null)
    xhr.onreadystatechange = function() {
      if(this.status === 200) {
        console.log(xhr.responseText)
      }
    }*/
  }
}
