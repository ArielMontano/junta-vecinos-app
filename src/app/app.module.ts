import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

//modulos
import { AppRoutingModule } from './app-routing.module';
/* import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'; */
//import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { AppComponent } from './app.component';
import { ListVecinosComponent } from './components/vecinos/list-vecinos/list-vecinos.component';
import { CreateVecinoComponent } from './components/vecinos/create-vecino/create-vecino.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
//import { provideAuth,getAuth } from '@angular/fire/auth';
//import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ListVecinosComponent,
    CreateVecinoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'junta-vecinos-app'),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    ToastrModule.forRoot()

    /* provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
