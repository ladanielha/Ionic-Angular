import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Rumahsakit } from '../rumahsakit';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class RumahsakitService {

  private dbPath = '/rumahsakit';
  RsData: any;
  rumahsakitRef: AngularFireList<Rumahsakit> = null;
  key:string;
  
  constructor(
    private db: AngularFireDatabase,
    private db2: AngularFirestore) {
    this.rumahsakitRef = db.list(this.dbPath);
   }

  getAll(): AngularFireList<Rumahsakit>{
    return this.rumahsakitRef;
  }

  
  create(rumahsakit: Rumahsakit): any{
    return this.rumahsakitRef.push(rumahsakit);
  }

  delete(key: string): Promise<void> {
    return this.rumahsakitRef.remove(key);
  }
}
