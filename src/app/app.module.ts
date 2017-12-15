import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './components/Main/app.component';
import { Home } from "./components/Home/home";
import { About } from "./components/About/about";
import { LogIn } from "./components/Login/logIn";


const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'logIn', component: LogIn },
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
    LogIn
    
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