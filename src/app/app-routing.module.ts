import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FriendsComponent } from './friends/friends.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'toolbox', component: ToolboxComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent },  

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
