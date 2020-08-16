import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/loca.service';
import { Person } from '../../interfaces/local.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private team: Person[];
  constructor(
    private localService: LocalService
  ){
    this.localService.getTeam.subscribe( team => this.team = team );
  }

  ngOnInit(): void {
  }

  public get getTeam(): Person[]{
    return this.team;
  }

}
