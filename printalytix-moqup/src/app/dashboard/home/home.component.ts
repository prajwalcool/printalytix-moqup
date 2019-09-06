import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    $(".main_home_slider").owlCarousel({
      responsiveClass: true,
      autoplay: true,
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      navText: [
        "<i class='lnr lnr-chevron-left'></i>",
        "<i class='lnr lnr-chevron-right'></i>"
      ],
      autoplayHoverPause: true
    });
   }

  ngOnInit() {
  }

}
