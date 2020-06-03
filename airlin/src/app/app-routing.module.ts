import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTicketComponent} from './my-ticket/my-ticket.component';
import { NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component'
import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'
import {ItemNewsComponent} from './item-news/item-news.component'
const routes: Routes = [
  {
    path: 'ticket',
    component: MyTicketComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'item-news/:id',
    component: ItemNewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
