import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  originalPost:object;
  discussionItems:object;
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
  constructor(
    public dialogRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.originalPost = this.data[0].data.children[0].data;
    this.discussionItems = this.data[1].data.children;
    console.log("responseItems", this.discussionItems);

  }

  expandDiscussionThread(replies){
    console.log("+++++++++++++++++++++++++++++++", replies);
  }

}
