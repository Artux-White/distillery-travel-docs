import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-button-dialog',
  templateUrl: './user-button-dialog.component.html',
  styleUrls: ['./user-button-dialog.component.scss']
})
export class UserButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private messageService: MessageService,
    public afAuth: AngularFireAuth,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.messageService.add({ severity: 'warn', summary: 'Cierre de Sesión', detail: 'Su sesión se ha cerrado' });
    this.dialogRef.close();
  }

  goToSection(url: string): void{
    this.router.navigate([url]);
    this.dialogRef.close();
  }

}
