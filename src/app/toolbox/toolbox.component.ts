import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InstructionComponent } from './dialog/instruction/instruction.component';
import { HtmlComponent } from './dialog/html/html.component';
import { CssComponent } from './dialog/css/css.component';
import { JsComponent } from './dialog/js/js.component';
import { AngularComponent } from './dialog/angular/angular.component';
import { TsComponent } from './dialog/ts/ts.component';
import { JavaComponent } from './dialog/java/java.component';
import { PythonComponent } from './dialog/python/python.component';
import { CComponent } from './dialog/c/c.component';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  dragPosition = {x: 30, y: 50};
  dialogMap = {
    'html': HtmlComponent,
    'css': CssComponent,
    'js': JsComponent,
    'angular': AngularComponent,
    'ts': TsComponent,
    'java': JavaComponent,
    'python': PythonComponent,
    'c': CComponent
  };

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.showInstruction();
  }

  showInstruction(): void {
    this.dialog.open(InstructionComponent);
  }

  loadDialog(language: string): void {
    this.dialog.open(this.dialogMap[language]);
  }
}