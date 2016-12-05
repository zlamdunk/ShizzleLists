import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAfzvUPfKrBwEtajVzJ9RME0TW-CqeXdJo",
  authDomain: "shizzlelists.firebaseapp.com",
  databaseURL: "https://shizzlelists.firebaseio.com",
  storageBucket: "shizzlelists.appspot.com",
  messagingSenderId: "778916210062"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
