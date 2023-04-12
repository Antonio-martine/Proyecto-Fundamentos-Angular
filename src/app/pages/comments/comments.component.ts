import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
/*import { CommentsService } from 'src/app/services/comments.service';*/

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
/*
export class CommentsComponent implements OnInit{

  comment:any[] = [];
  constructor(private commentsService:CommentsService){}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments:any[''])=>{
      this.comment = comments;
    })
  }

}*/

export class CommentsComponent implements OnInit{

  comment:any[] = [];
  constructor(private commentsService:DataService){}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments:any[''])=>{
      this.comment = comments;
    })
  }

}