import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/loca.service';
import { Person } from '../../interfaces/local.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private team: Person[];
  constructor(
    private localService: LocalService,
    private dataService: DataService
  ){
    this.dataService.getTeam.subscribe( team => this.team = team );
  }

  ngOnInit(): void {
  }

  public get getTeam(): Person[]{
    return this.team;
  }

}
