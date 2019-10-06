import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProtoEnquiryComponent } from "./proto-enquiry/proto-enquiry.component";
import { DesignEnquiryComponent } from "./design-enquiry/design-enquiry.component";
import { AppRoutingModule } from '../app-routing.module';
import { SideScreensComponent } from './side-screens/side-screens.component';

@NgModule({
  declarations: [ProtoEnquiryComponent, DesignEnquiryComponent, SideScreensComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ProtoEnquiryComponent, DesignEnquiryComponent]
})
export class Forms1Module { }
