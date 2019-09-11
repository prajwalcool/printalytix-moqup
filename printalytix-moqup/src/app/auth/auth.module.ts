import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginformComponent, RegisterformComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[LoginformComponent,RegisterformComponent]
})
export class AuthModule { }
