import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FriendsComponent } from './friends/friends.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './toolbox/dialog/instruction/instruction.component';
import { HtmlComponent } from './toolbox/dialog/html/html.component';
import { CssComponent } from './toolbox/dialog/css/css.component';
import { JsComponent } from './toolbox/dialog/js/js.component';
import { AngularComponent } from './toolbox/dialog/angular/angular.component';
import { TsComponent } from './toolbox/dialog/ts/ts.component';
import { JavaComponent } from './toolbox/dialog/java/java.component';
import { PythonComponent } from './toolbox/dialog/python/python.component';
import { CComponent } from './toolbox/dialog/c/c.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutMeComponent,
    ExperienceComponent,
    ToolboxComponent,
    FriendsComponent,
    HobbiesComponent,
    ContactComponent,
    HomeComponent,
    InstructionComponent,
    HtmlComponent,
    CssComponent,
    JsComponent,
    AngularComponent,
    TsComponent,
    JavaComponent,
    PythonComponent,
    CComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatProgressBarModule,
    DragDropModule,
    MatDialogModule,
    MatBadgeModule,
    MatStepperModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
