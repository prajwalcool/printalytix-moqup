import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesComponent } from "./services/services.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardModule } from "../dashboard/dashboard.module";
import { ProgressComponent } from "./progress/progress.component";
import { ComponentsModule } from "../components/components.module";
import { NgCircleProgressModule } from "ng-circle-progress";
@NgModule({
  declarations: [DashboardComponent, ServicesComponent, ProgressComponent],
  imports: [
    CommonModule,
    DashboardModule,
    ComponentsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  exports: [DashboardComponent, ServicesComponent]
})
export class PagesModule {}
