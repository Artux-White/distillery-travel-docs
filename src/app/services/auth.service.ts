import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { State } from '../travel-info/state';
import { TravelInfoPageActions } from '../travel-info/state/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<firebase.User | null> = new BehaviorSubject<firebase.User | null>(null);
  constructor(public afAuth: AngularFireAuth, private store: Store<State>) {
    this.afAuth.authState.subscribe(user => {
        this.user.next(user);
        this.store.dispatch(TravelInfoPageActions.setCurrentUserId({currentUserUid: user?.uid || null}))
      });
   }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider;
    provider.setCustomParameters({prompt: 'select_account'});
    return this.afAuth.signInWithPopup(provider)
      .then((credential) => {
        console.log(credential);
      });
  }

  logout(){
    this.afAuth.signOut();
  }
}
