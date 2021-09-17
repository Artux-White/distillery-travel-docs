import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserButtonDialogComponent } from '../user-button-dialog/user-button-dialog.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    dialogStatus: boolean = false;
    dialogRef: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    public afAuth: AngularFireAuth,
    public authService: AuthService
    ) {}

  userMenu() {
    this.dialogStatus = !this.dialogStatus;
    if (this.dialogStatus) {
      this.dialogRef = this.dialog.open(UserButtonDialogComponent, {
        position: { top: '55px', right: '5px' },
        width: '295px',
        backdropClass: 'backdropUserMenu',
        panelClass: 'dialogUserMenu'
      });
      this.dialogStatus = true;
    } else {
      this.dialogRef.close();
    }
    this.dialogStatus = !this.dialogStatus;
  }

}
