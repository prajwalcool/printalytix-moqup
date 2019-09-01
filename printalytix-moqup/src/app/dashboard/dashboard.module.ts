import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MainStreamOfferingsComponent } from "./main-stream-offerings/main-stream-offerings.component";
import { AddOnOfferingsComponent } from "./add-on-offerings/add-on-offerings.component";
import { AboutComponent } from "./about/about.component";
import { FeaturesComponent } from "./features/features.component";
import { TeamComponent } from "./team/team.component";

@NgModule({
  declarations: [
    HomeComponent,
    MainStreamOfferingsComponent,
    AddOnOfferingsComponent,
    AboutComponent,
    FeaturesComponent,
    TeamComponent
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    MainStreamOfferingsComponent,
    AddOnOfferingsComponent,
    AboutComponent,
    FeaturesComponent,
    TeamComponent
  ]
})
export class DashboardModule {}
