import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
    
  },
  {
    path:'home',component:HomeComponent
    
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'review',component:ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
