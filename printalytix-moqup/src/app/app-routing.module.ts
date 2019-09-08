import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./pages/services/services.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { StepProgressBarComponent } from "./components/step-progress-bar/step-progress-bar.component";

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
    component: StepProgressBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
