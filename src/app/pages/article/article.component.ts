import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private id: string;

  constructor(
    private activedRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
  }

}
