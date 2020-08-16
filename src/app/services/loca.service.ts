
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Local, Person } from '../interfaces/local.interface';

@Injectable({
    providedIn: 'root'
})
export class LocalService{

    private data: Object;
    private url: string;

    constructor(
        private http: HttpClient
    ){
        this.url = '../../assets/database/data-app.json';
    }

    public get getTeam(): Observable<Person[]>{
        return this.http.get<Local>(this.url)
                        .pipe( map( data => data.team ))
    }

    public get getLocal(): Observable<Local>{
        return this.http.get<Local>(this.url);
    }

}