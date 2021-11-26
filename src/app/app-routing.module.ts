import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthenComponent } from './authen/authen.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { ListsejourComponent } from './listsejour/listsejour.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'sejour',component:ListsejourComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'authen',component:AuthenComponent},
  {path:'search',component:SearchComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'**',component:ErreurComponent}
  
];
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
