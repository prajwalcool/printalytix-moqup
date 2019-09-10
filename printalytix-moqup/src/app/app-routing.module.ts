import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./pages/services/services.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { ProtoEnquiryComponent } from "./forms/proto-enquiry/proto-enquiry.component";
import { DesignEnquiryComponent } from "./forms/design-enquiry/design-enquiry.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
