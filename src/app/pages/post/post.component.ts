import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  data:any[] = [];
  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts:any[''])=>{
      this.data = posts;
    });
  }

}
