import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./pages/services/services.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { ProtoEnquiryComponent } from "./forms/proto-enquiry/proto-enquiry.component";
import { DesignEnquiryComponent } from "./forms/design-enquiry/design-enquiry.component";
import { LoginformComponent } from './auth/loginform/loginform.component';
import { RegisterformComponent } from './auth/registerform/registerform.component';
import { PProgressComponent } from './pages/p-progress/p-progress.component';
import { SideScreensComponent } from './forms/side-screens/side-screens.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "progress",
    component: ProgressComponent
  },
  {
    path: "step",
    component: ProtoEnquiryComponent
  },
  {
    path: "de",
    component: DesignEnquiryComponent
  },
  {
    path: "login",
    component: LoginformComponent
  },
  {
    path: "register",
    component: RegisterformComponent
  },
  {
    path: 'd-enquiry',
    component: DesignEnquiryComponent
  },
  {
    path: 'd-progress',
    component: ProgressComponent
  },
  {
    path: 'p-progress',
    component: PProgressComponent
  },
  {
    path: 'side-screens',
    component: SideScreensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
