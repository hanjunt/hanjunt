import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  loadDialog(): void {
    this.dialog.open(ContactFormComponent);
  }
}
