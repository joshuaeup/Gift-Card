import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './components/Main/app.component';
import { Home } from "./components/Home/home";
import { About } from "./components/About/about";
import { LogIn } from "./components/Login/logIn";
import { SignUp } from "./components/Signup/signUp";
import { Grid } from "./components/Grid/grid";
import { Signing } from "./components/Signing/signing";
import { Purchase } from "./components/Purchase/purchase";
import { Profile } from "./components/Profile/profile";


const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'logIn', component: LogIn },
  { path: 'signUp', component: SignUp },
  { path: 'grid', component: Grid },
  { path: 'signing/:id', component: Signing },
  { path: 'purchase', component: Purchase },
  { path: 'profile/:id', component: Profile },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    LogIn,
    SignUp,
    Grid,
    Signing,
    Purchase,
    Profile

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }