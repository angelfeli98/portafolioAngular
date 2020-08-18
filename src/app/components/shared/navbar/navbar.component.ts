import { Component, OnInit } from '@angular/core';
import { Local } from '../../../interfaces/local.interface';
import { LocalService } from '../../../services/loca.service';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private local: Local;

  constructor(
    private localService: LocalService,
    private dataService: DataService,
    private router: Router
  ){
    this.localService.getLocal.subscribe( local => this.local = local )
   }

  ngOnInit(): void {
  }

  public searchItem = (term: any): void=>{
    if(term.value.length > 0)
      this.router.navigateByUrl(`/search/${term.value}`);
    term.value = '';
  }

  public get getLocal(): Local{
    return this.local;
  }

}
