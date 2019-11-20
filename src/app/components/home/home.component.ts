import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public task: string = ' ';
  public list: string[] = [
    "Learn HTML",
    "Learn Javascript",
    "Learn Typescript",
    "Learn Boostrap",
    "Learn ExpressJs",
    "Learn Docker",
    "Learn ElasticSearch",
    "Learn Firebase",
    "Learn Angular"

  ];
  constructor() { }

  ngOnInit() {
  }
  public addToList(){
    if (this.task && !this.list.includes(this.task)) {
      this.list.push(this.task);
      this.task = "";
    }

  }
  public removeFromList(x){
    this.list.splice(x,1);
  }
}
