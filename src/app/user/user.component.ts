import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RedditService } from '../reddit.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  recentPosts: any[] = [];
  catagoryColor: object = {
    'Psychology': '#041c3f',
    'Physics': '#d08dd2',
    'Health': '#6289d1',
    'Social Science': '#e4a966',
    'Environment': '#7dd284',
    'Biology': '#79c3bb',
    'Paleontology': '#a0815f',
    'Astronomy': '#ad7fc9',
    'Animal Science': '#7ac877',
    'Medicine': '#dd7c7e',
    'Engineering': '#a8a8a8',
    'Earth Science': '#cea67a'

  }
  constructor(
    private redditService: RedditService,
    public dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    /*Getting Author recent activities for the selected user*/
    this.getAuthorInfo(this.data.name)
  }

  /*This method is to get the user details*/
  getAuthorInfo(userName) {
    console.log("Selected User Name : ", userName);
    this.redditService.getAuthorInfo(userName).subscribe((data) => {
      console.log("User details for the selected user: -, " + userName, data);
      console.log("User details for the selected user: -, " + userName, data);
      this.recentPosts = data.data.children;
      console.log(this.recentPosts);
    },
      (error) => {
        console.log("Error while retreving user information for  the user:- , " + userName, error);
      }
    );
  }
}
