import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-tabs-extra',
  templateUrl: './tabs-extra.component.html',
  styleUrls: ['./tabs-extra.component.scss'],
})
export class TabsExtraComponent implements OnInit {

  currentCity = '苏州';
  currentCityPrice = 20081;
  currentYear;
  lastMonth;
  currentPlaceName: string;
  currentPlacePrice: number;

  housePriceCountiesData = [
    {name: '工业园区', price: 20250},
    {name: '平江区', price: 19914},
    {name: '高新区', price: 16978},
    {name: '沧浪区', price: 22646},
    {name: '金阊区', price: 14183},
    {name: '吴中区', price: 23081},
    {name: '相城区', price: 20455},
    {name: '吴江区', price: 17275},
    {name: '姑苏区', price: 27897},
    {name: '虎丘区', price: 27849},
    {name: '常熟', price: 16509},
    {name: '张家港', price: 10406},
    {name: '太仓', price: 12510},
    {name: '昆山', price: 21032},
  ];

  firstFives = [
    {name: '苏州桃花源', price: 84616},
    {name: '拙政别墅', price: 71512},
    {name: '御园别墅', price: 69566},
    {name: '九龙仓国宾1号别墅', price: 65913},
    {name: '桃坞郡府', price: 41726},
  ];
  lastFives = [
    {name: '东始新村', price: 3657},
    {name: '湖东会馆', price: 4572},
    {name: '华东商业城商务公寓', price: 5152},
    {name: '雪枫公寓', price: 5344},
    {name: '新枫公馆', price: 5518},
  ];

  showMore = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getCurrentTime();
  }

  getCurrentTime() {
    const myTime = new Date();
    this.currentYear = myTime.getFullYear();
    this.lastMonth = myTime.getMonth();
    if (this.lastMonth === 0) {
      this.lastMonth = 12;
    }
  }

  getCurrentPlacePrice(county) {
    this.currentPlaceName = county.name;
    this.currentPlacePrice = county.price;
  }

  removeCurrentPlacePrice() {
    this.currentPlaceName = this.currentCity;
    this.currentPlacePrice = this.currentCityPrice;
  }

  goToCounty() {
    if (this.currentPlaceName !== this.currentCity) {
      return;
      // return this.router.navigate(['/house/county', {cityname: this.currentCity, countyname: this.currentPlaceName, countyprice: this.currentPlacePrice}]);
    }
  }

}


