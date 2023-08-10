import { Injectable, inject } from '@angular/core';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Vecino } from '../modelo/vecino.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VecinoService {
  vecinosDb: Observable<Vecino[]> | undefined;
  vecinoDoc: AngularFirestoreDocument<Vecino> | undefined;

  constructor(private db: AngularFirestore) {
  }

  agregarVecino(vecino: any): Promise <any>{
    return this.db.collection('vecinos').add(vecino);
  }

  getAll(): Observable <any>{
    return this.db.collection('vecinos').snapshotChanges();
  }

  delete(id:string): Promise <void> {
    this.vecinoDoc = this.db.doc(`vecinos/${id}`);
    return this.vecinoDoc.delete().catch(
      error => console.log(error)
    );
  }

  getByName(nombreVecino: string): Observable <any>{
    return this.db.collection('vecinos', ref => ref.where('personales.nombre', '>=' , nombreVecino) .where('personales.nombre', '<=' , nombreVecino+ '\uf8ff')).valueChanges({ idField: 'id' });
  }
}
