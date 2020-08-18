
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Person, Product, ProInd } from '../interfaces/local.interface';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService{

    private team: AngularFirestoreCollection;
    private productIndex: AngularFireList<any>;
    private prodcuts: AngularFireList<any>;

    constructor(
        private http: HttpClient,
        private fireStore: AngularFirestore,
        private fireDB: AngularFireDatabase
    ){
        this.team = this.fireStore.collection('team');
        this.productIndex = this.fireDB.list('productInd');
        this.prodcuts = this.fireDB.list('producs');
    }

    public get getTeam(): Observable<any[]>{
        return this.team.valueChanges();
    }

    public get getProductIndex(): Observable<any>{
        return this.productIndex.valueChanges();
    }

    public getItemByName = (name: string): Observable<any> =>{
        return this.productIndex.valueChanges()
                            .pipe( map(res => res.filter( (product: ProInd) => product.titulo.toLowerCase().match(name.toLowerCase()))))
    }

    public getProducts = (id: string): Observable<any> =>{
       return this.fireDB.list('producs', ref => ref.orderByKey().equalTo(id) ).valueChanges()
                        .pipe( map( res => res[0] ));
    }
}