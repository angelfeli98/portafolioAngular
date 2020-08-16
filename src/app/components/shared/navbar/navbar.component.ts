import { Component, OnInit } from '@angular/core';
import { Local } from '../../../interfaces/local.interface';
import { LocalService } from '../../../services/loca.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private local: Local;

  constructor(
    private localService: LocalService
  ){
    this.localService.getLocal.subscribe( local => this.local = local )
   }

  ngOnInit(): void {
  }

  public get getLocal(): Local{
    return this.local;
  }

}
