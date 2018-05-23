import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Component, OnInit, Inject } from '@angular/core';

declare const OwlCarousel: any;
declare const ParallaxSlider: any;
declare const $: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  vids = ["f9k5fxouO1Q", "BiIlQQAx70c", "vHsa4tUErPg", "rko6cb_Gq0k"]

  latestShots = [
    {
      id: 1,
      active: "active",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 2,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 3,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 4,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    }
  ]

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        OwlCarousel.initOwlCarousel();
        ParallaxSlider.initParallaxSlider();
      })
    }
  }

}
