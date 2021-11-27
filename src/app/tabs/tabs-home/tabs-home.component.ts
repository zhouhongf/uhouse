import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tabs-home',
  templateUrl: './tabs-home.component.html',
  styleUrls: ['./tabs-home.component.scss'],
})
export class TabsHomeComponent implements OnInit {

  @ViewChild('headerHome') header;

  slides;
  slideOpts = {
    effect: 'flip',
    loop: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  currentYear;
  lastMonth;

  housePriceMap = 'assets/images/housePriceMap.png';
  photo1 =  'assets/images/homePageAds/house6.jpg';
  photo2 =  'assets/images/homePageAds/house7.jpg';
  photo3 =  'assets/images/homePageAds/house8.jpg';


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.initSlides();
  }

  scrollEvent(e) {
    const opacity = (e.detail.scrollTop - 300) / 300; // 设置滚动距离300的时候导航栏出现
    // this.header._elementRef.nativeElement.style.opacity = opacity;
  }

  initSlides() {
    this.slides = [
      {
        title: '【广告位一】',
        description: '',
        image: 'url(assets/images/homePageAds/house1.jpg)',
      },
      {
        title: '【广告位二】',
        description: '',
        image: 'url(assets/images/homePageAds/house2.jpg)',
      },
      {
        title: '【广告位三】',
        description: '',
        image: 'url(assets/images/homePageAds/house3.jpg)',
      },
      {
        title: '【广告位四】',
        description: '',
        image: 'url(assets/images/homePageAds/house4.jpg)',
      },
      {
        title: '【广告位五】',
        description: '',
        image: 'url(assets/images/homePageAds/house5.jpg)',
      },
    ];
  }

  getData() {
    const myTime = new Date();
    this.currentYear = myTime.getFullYear();
    this.lastMonth = myTime.getMonth();
    if (this.lastMonth === 0) {
      this.lastMonth = 12;
    }
  }

  goToHouseHome() {
    return this.router.navigate(['/house']);
  }

}
