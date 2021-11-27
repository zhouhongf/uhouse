import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { houseServiceTypeData, landTypeOfficialData, landUsageOfficialData, houseTypeOfficialData, houseUsageOfficialData, ownerTypeData, houseTypeData, evaluatePurposeData } from 'src/app/model/house';
import {map, startWith} from 'rxjs/operators';
import {BaseService} from '../../providers/base.service';

@Component({
  selector: 'app-tabs-main',
  templateUrl: './tabs-main.component.html',
  styleUrls: ['./tabs-main.component.scss'],
})
export class TabsMainComponent implements OnInit {
  countyName: string;

  filteredOptions: Observable<string[]>;
  nameLocations;
  nameLocationsCounty;
  theFormSimple: FormGroup;
  theFormPro: FormGroup;

  showFormSimple = false;
  showFormPro = false;

  houseServiceTypeData = houseServiceTypeData;
  landTypeOfficialData = landTypeOfficialData;
  landUsageOfficialData = landUsageOfficialData;
  houseTypeOfficialData = houseTypeOfficialData;
  houseUsageOfficialData = houseUsageOfficialData;
  ownerTypeData = ownerTypeData;
  houseTypeData = houseTypeData;
  evaluatePurposeData = evaluatePurposeData;

  housepriceAvg: number;
  // 简单评估变量
  floorVar: number;
  priceVar = 100;
  housepriceSimple: number;
  houseValueSimple: number;

  // 专业评估 变量
  realHousePrice: number;
  realHouseValue = 0;
  loftValue = 0;
  basementValue = 0;
  parkingValue = 0;
  bikeSpaceValue = 0;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private baseService: BaseService) {
  }

  ngOnInit() {
  }

  goBack() {
    this.showFormSimple = false;
    this.showFormPro = false;
  }

  startFilterOptionSimple() {
    this.filteredOptions = this.houseNameSimple.valueChanges.pipe(
        startWith(''),
        map(val => this.filter(val))
    );
  }

  startFilterOptionPro() {
    this.filteredOptions = this.name.valueChanges.pipe(
        startWith(''),
        map(val => this.filter(val))
    );
  }

  filter(val: string): string[] {
    if (this.nameLocationsCounty) {
      return this.nameLocationsCounty.filter(option =>
          option.toLowerCase().includes(val.toLowerCase()));
    }
  }

  createFormSimple() {
    this.theFormSimple = this.formBuilder.group({
      houseNameSimple: ['', Validators.required],
      buildingNumberSimple: ['', Validators.required],
      roomNumberSimple: ['', Validators.required],
      floorTotalSimple: ['', [Validators.required, Validators.min(1)]],
      floorTargetSimple: ['', [Validators.required, Validators.min(1)]],
      houseSizeSimple: ['', [Validators.required, Validators.min(1)]],
    });
  }

  get houseNameSimple() {
    return this.theFormSimple.get('houseNameSimple');
  }

  get buildingNumberSimple() {
    return this.theFormSimple.get('buildingNumberSimple');
  }

  get roomNumberSimple() {
    return this.theFormSimple.get('roomNumberSimple');
  }

  get floorTotalSimple() {
    return this.theFormSimple.get('floorTotalSimple');
  }

  get floorTargetSimple() {
    return this.theFormSimple.get('floorTargetSimple');
  }

  get houseSizeSimple() {
    return this.theFormSimple.get('houseSizeSimple');
  }


  createFormPro() {
    this.theFormPro = this.formBuilder.group({
      name: ['', Validators.required],

      houseType: ['', Validators.required],
      houseServiceType: ['', Validators.required],
      landTypeOfficial: ['', Validators.required],
      landUsageOfficial: ['', Validators.required],
      houseTypeOfficial: ['', Validators.required],
      houseUsageOfficial: ['', Validators.required],

      buildingNumber: ['', Validators.required],
      roomNumber: ['', Validators.required],

      floorTotal: ['', [Validators.required, Validators.min(1)]],
      floorTarget: ['', [Validators.required, Validators.min(1)]],
      floorHight: ['', Validators.min(2)],

      houseSize: ['', [Validators.required, Validators.min(1)]],
      landSize: ['', Validators.min(0)],

      livingroomNumber: ['', [Validators.required, Validators.min(0)]],
      balconyNumber: ['', [Validators.required, Validators.min(0)]],
      bedroomNumber: ['', [Validators.required, Validators.min(0)]],
      bedroomSouthNumber: ['', [Validators.required, Validators.min(0)]],
      washingroomNumber: ['', [Validators.required, Validators.min(0)]],
      elevatorNumber: ['', [Validators.required, Validators.min(0)]],

      loftSize: ['', Validators.min(0)],
      basementSize: ['', Validators.min(0)],
      parkingNumber: ['', Validators.min(0)],
      parkingSize: ['', Validators.min(0)],
      bikeSpaceSize: ['', Validators.min(0)],

      ownerType: ['', Validators.required],
      ownerName: ['', Validators.required],

      evaluatePurpose: ['', Validators.required],
      realEstateLicenseNumber: '',
      houseLicenseNumber: '',
      landLicenseNumber: '',

      rightHolder: ['', Validators.required],
      applier: ['', Validators.required],
      contactor: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  get name() {
    return this.theFormPro.get('name');
  }

  get houseType() {
    return this.theFormPro.get('houseType');
  }

  get houseServiceType() {
    return this.theFormPro.get('houseServiceType');
  }

  get landTypeOfficial() {
    return this.theFormPro.get('landTypeOfficial');
  }

  get landUsageOfficial() {
    return this.theFormPro.get('landUsageOfficial');
  }

  get houseTypeOfficial() {
    return this.theFormPro.get('houseTypeOfficial');
  }


  get houseUsageOfficial() {
    return this.theFormPro.get('houseUsageOfficial');
  }

  get buildingNumber() {
    return this.theFormPro.get('buildingNumber');
  }

  get roomNumber() {
    return this.theFormPro.get('roomNumber');
  }

  get floorTotal() {
    return this.theFormPro.get('floorTotal');
  }


  get floorTarget() {
    return this.theFormPro.get('floorTarget');
  }

  get floorHight() {
    return this.theFormPro.get('floorHight');
  }

  get houseSize() {
    return this.theFormPro.get('houseSize');
  }

  get landSize() {
    return this.theFormPro.get('landSize');
  }

  get livingroomNumber() {
    return this.theFormPro.get('livingroomNumber');
  }


  get balconyNumber() {
    return this.theFormPro.get('balconyNumber');
  }

  get bedroomNumber() {
    return this.theFormPro.get('bedroomNumber');
  }

  get bedroomSouthNumber() {
    return this.theFormPro.get('bedroomSouthNumber');
  }

  get washingroomNumber() {
    return this.theFormPro.get('washingroomNumber');
  }

  get elevatorNumber() {
    return this.theFormPro.get('elevatorNumber');
  }


  get loftSize() {
    return this.theFormPro.get('loftSize');
  }

  get basementSize() {
    return this.theFormPro.get('basementSize');
  }

  get parkingNumber() {
    return this.theFormPro.get('parkingNumber');
  }

  get parkingSize() {
    return this.theFormPro.get('parkingSize');
  }

  get bikeSpaceSize() {
    return this.theFormPro.get('bikeSpaceSize');
  }


  get ownerType() {
    return this.theFormPro.get('ownerType');
  }

  get ownerName() {
    return this.theFormPro.get('ownerName');
  }

  get evaluatePurpose() {
    return this.theFormPro.get('evaluatePurpose');
  }

  get realEstateLicenseNumber() {
    return this.theFormPro.get('realEstateLicenseNumber');
  }

  get houseLicenseNumber() {
    return this.theFormPro.get('houseLicenseNumber');
  }

  get landLicenseNumber() {
    return this.theFormPro.get('landLicenseNumber');
  }

  get rightHolder() {
    return this.theFormPro.get('rightHolder');
  }

  get applier() {
    return this.theFormPro.get('applier');
  }

  get contactor() {
    return this.theFormPro.get('contactor');
  }

  get phone() {
    return this.theFormPro.get('phone');
  }


  openFormSimple() {
    this.createFormSimple();
    this.startFilterOptionSimple();
    this.showFormSimple = true;
  }

  openFormPro() {
    this.createFormPro();
    this.startFilterOptionPro();
    this.showFormPro = true;
  }

  assessHouseSimple() {
    if (this.floorTargetSimple.value > this.floorTotalSimple.value) {
      return this.baseService.presentToast('所在楼层数不能超过楼层总数');
    }
    this.getCommunityData(this.houseNameSimple.value.trim(), 'Simple');
  }

  assessHousePro() {
    if (this.floorTarget.value > this.floorTotal.value) {
      return this.baseService.presentToast('所在楼层数不能超过楼层总数');
    }
    this.getCommunityData(this.name.value.trim(), 'Pro');
  }


  getCommunityData(nameLocation, assessType) {
    if (this.nameLocations) {
      for (const value of this.nameLocations) {
        if (nameLocation === value.name) {
          this.housepriceAvg = value.price;
          break;
        }
      }
    }

    if (this.housepriceAvg) {
      if (assessType === 'Pro') {
        this.calculateHouseValuePro();
      } else {
        this.calculateHouseValueSimple();
      }
    } else {
      this.baseService.presentToast('暂无数据');
    }
  }

  calculateHouseValueSimple() {
    const floorVarTemp = (this.floorTargetSimple.value / this.floorTotalSimple.value).toFixed(2);
    this.floorVar = Number(floorVarTemp) * 100;
    if (this.floorVar < 20) {
      this.priceVar = this.priceVar - 10;
    }
    if (this.floorVar > 50) {
      this.priceVar = this.priceVar + 5;
    }
    this.housepriceSimple = this.housepriceAvg * this.priceVar / 100;
    this.houseValueSimple = Math.floor(this.housepriceSimple * this.houseSizeSimple.value / 100) / 100;
    this.goToAssessResult(this.houseNameSimple.value, this.houseValueSimple);
  }

  calculateHouseValuePro() {
    const floorVarTemp = (this.floorTarget.value / this.floorTotal.value).toFixed(2);
    this.floorVar = Number(floorVarTemp) * 100;
    if (this.floorVar < 20) {
      this.priceVar = this.priceVar - 10;
    }
    if (this.floorVar > 50) {
      this.priceVar = this.priceVar + 5;
    }
    if (this.floorHight.value > 3.2) {
      this.priceVar += 1;
    }
    if (this.floorTotal.value > 20) {
      if (this.elevatorNumber.value < 2) {
        this.priceVar -= 2;
      }
    }
    if (this.floorTotal.value > 6) {
      if (this.elevatorNumber.value < 1) {
        this.priceVar -= 2;
      }
    }

    if (this.loftSize.value > 0) {
      this.loftValue = this.housepriceAvg * this.loftSize.value / 2 / 10000;
    }
    if (this.basementSize.value > 0) {
      this.basementValue = this.housepriceAvg * this.basementSize.value / 2 / 10000;
    }

    if (this.parkingNumber.value > 0) {
      this.parkingValue = this.parkingNumber.value * this.housepriceAvg * 3 / 10000;
    }
    if (this.bikeSpaceSize.value > 0) {
      this.bikeSpaceValue = this.bikeSpaceSize.value * this.housepriceAvg / 4 / 10000;
    }

    this.realHousePrice = this.housepriceAvg * this.priceVar / 100;
    const realHouseValueTemp = this.realHousePrice * this.houseSize.value / 10000;
    this.realHouseValue = Math.floor((realHouseValueTemp + this.loftValue + this.basementValue + this.parkingValue + this.bikeSpaceValue) * 100) / 100;
    this.goToAssessResult(this.name.value, this.realHouseValue);
  }

  goToAssessResult(nameLocation, assessPrice) {
    return this.router.navigate(['/house/assess', {nameLocation, assessPrice}]).then(() => {
      this.showFormSimple = false;
      this.showFormPro = false;
    });
  }

}
