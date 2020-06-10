import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CookieService } from "ngx-cookie-service";
import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ItemNewsComponent } from './item-news/item-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MyTicketComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ItemNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
