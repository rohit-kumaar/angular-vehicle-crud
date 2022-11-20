import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisteredVehicleComponent } from './components/registered-vehicle/registered-vehicle.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddVehicleComponent,
    ViewComponent,
    RegisteredVehicleComponent,
    EditComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
