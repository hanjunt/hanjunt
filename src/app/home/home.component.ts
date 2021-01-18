import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.scroll();
  }

  scroll(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  openSnackBar() {
    this.snackBar.open('already at home :)', 'ah! I see', {
      duration: 3500,
    });
  }
}
