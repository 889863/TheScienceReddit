import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgxSpinnerService } from "ngx-spinner";
import { RedditService } from '../reddit.service';
import { PostComponent } from '../post/post.component';
import { UserComponent } from '../user/user.component';
import { Post } from './post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  menuVisible: boolean = false;
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
  popularSubreddits:any[] = [];
  selectedSortOption:string = 'hot';
  featuredPost:object;
  constructor(private redditService: RedditService,  public dialog: MatDialog, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getUpdatedRedditFeeds('hot');
    this.getPopularSubreddits();
  }

  /* This method is to get the latest post based on the selected sort option */
  getUpdatedRedditFeeds(option:string) {
    //this.enableLoading();
    this.spinner.show();
    this.selectedSortOption = option;
    this.menuVisible = false;
    console.log("Getting the reddit feed based on the sort option : ", option);
    this.redditService.getUpdatedRedditFeeds(option).subscribe((res: any) => {
      console.log("Updated Feed for the sort option : " + option, res.data.children);
      this.featuredPost = res.data.children.shift();
      this.posts = res.data.children;
      this.spinner.hide();
    },
      (error) =>{
        console.log("Getting updated Feed for the sort option FAILED : " + option, error);
        this.spinner.hide();
      }
    );
  }

  /*This method is to get all the details about the selected post*/
  getThePostDetails(postUrl:string) {
    this.spinner.show();
    console.log("Selected post Id : ", postUrl);
    this.redditService.getThePostDetails(postUrl).subscribe((data) => {
      console.log("Post Details for the selected Post: - postUrl, "+postUrl, data);
      this.spinner.hide();
      const dialogRef = this.dialog.open(PostComponent, {
        width: '95%',
        disableClose: false,
        data: data
      });
    },
      (error) => {
        console.log("Error while retreving the selected Post: - postUrl, "+postUrl, error);
        this.spinner.hide();
      }
    );
  }

   /*This method is to get the Author Bio*/
   getAuthorBio(userName:string){
    this.spinner.show();
    console.log("Selected User Name : ", userName);
    this.redditService.getAuthorBio(userName).subscribe((data) => {
      console.log("Author Bio for the selected Author: -, "+userName, data);
      const dialogRef = this.dialog.open(UserComponent, {
        width: '90%',
        disableClose: false,
        data: data.data
      });
      this.spinner.hide();
    },
      (error) => {
        console.log("Error while retreving Author Bio for  the Author:- , "+userName, error);
        this.spinner.hide();
      }
    );
  }

  /*Get Popular subreddits list*/
  getPopularSubreddits(){
    this.redditService.getPopularSubreddits().subscribe((data) => {
      console.log("Getting the Popular Subreddits information: -, ", data);
      this.popularSubreddits = data.data.children;
    },
      (error) => {
        console.log("Error getting the Popular Subreddits information:-", error);
      }
    );
  }

  toggleNavigation(){
    this.menuVisible = !this.menuVisible;       
  }

}
