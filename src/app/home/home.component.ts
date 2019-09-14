import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Post } from './post';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  sortOptions: string[] = ['hot', 'new', 'controversial', 'top', 'rising'];
  catagoryColor:object = {
    'Psychology':'#041c3f',
    'Physics':'#d08dd2',
    'Health':'#6289d1',
    'Social Science':'#e4a966',
    'Environment':'#7dd284',
    'Biology':'#79c3bb',
    'Paleontology':'#a0815f',
    'Astronomy':'#ad7fc9',
    'Animal Science':'#7ac877',
    'Medicine':'#dd7c7e',
    'Engineering':'#a8a8a8',
    'Earth Science':'#cea67a'
    
  }
  posts = new Array<Post>();
  selectedSortOption:string = 'hot';
  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.getUpdatedRedditFeeds('hot');
  }

  getUpdatedRedditFeeds(option) {
    this.selectedSortOption = option;
    console.log("Getting the reddit feed based on the sort option : ", option);
    this.redditService.getUpdatedRedditFeeds(option).subscribe((res: any) => {
      console.log("Updated Feed for the sort option : " + option, res.data.children);
      this.posts = res.data.children;
    });
  }

}
