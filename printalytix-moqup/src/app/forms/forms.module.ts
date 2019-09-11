import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProtoEnquiryComponent } from "./proto-enquiry/proto-enquiry.component";
import { DesignEnquiryComponent } from "./design-enquiry/design-enquiry.component";
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ProtoEnquiryComponent, DesignEnquiryComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ProtoEnquiryComponent, DesignEnquiryComponent]
})
export class Forms1Module { }
