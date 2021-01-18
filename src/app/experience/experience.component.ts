import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.guideMessage();
  }

  guideMessage(): void {
    this.snackBar.open('click on 📖 and 📘 to expand and collapse', 'okay okay', {
      duration: 10000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  openSnackBar(): void {
    this.snackBar.open('btw more details in the Toolbox section', '😎', {
      duration: 15000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
