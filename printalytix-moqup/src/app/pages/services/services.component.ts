import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
// import "../../../assets/js/circle_menu";
declare var CircleMenuFx: any;

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  @ViewChild("circle_menu", { static: true }) el: ElementRef;
  constructor() {
    // console.log(this.el.nativeElement);
    // new CircleMenuFx(this.el.nativeElement);
  }

  ngOnInit() {
    console.log(this.el.nativeElement);
    new CircleMenuFx(this.el.nativeElement);
  }
}
