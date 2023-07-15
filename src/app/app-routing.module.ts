import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'exp', component: ExpComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
