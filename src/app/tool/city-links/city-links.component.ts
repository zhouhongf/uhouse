import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActionSheetController} from '@ionic/angular';

export class CityInstance {
  constructor(public code: string, public name: string) { }
}

@Component({
  selector: 'app-city-links',
  templateUrl: './city-links.component.html',
  styleUrls: ['./city-links.component.scss'],
})
export class CityLinksComponent {
  private _elementContent: string;
  @Output() onSelectorsKeyup = new EventEmitter();

  @Input()
  set elementContent(theContent: string) {
    this._elementContent = theContent;
    if (this._elementContent !== null && this._elementContent !== undefined) {
      const thePlaceData = this._elementContent.split('-');
      this.peopleSelectedData = [new CityInstance('1', thePlaceData[1])];
      this.childrenSelectedData = [new CityInstance('2', thePlaceData[2])];
      this.grandChildrenSelectedData = [new CityInstance('3', thePlaceData[3])];

      this.parent.patchValue(thePlaceData[0]);
      this.person.patchValue(thePlaceData[1]);
      this.child.patchValue(thePlaceData[2]);
      this.grandChild.patchValue(thePlaceData[3]);
    }
  }

  get elementContent(): string {
    return this._elementContent;
  }

  theForm: FormGroup;

  parentsData: Array<object>;
  peopleData: Array<object>;
  childrenData: Array<object>;
  grandChildrenData: Array<object>;

  peopleSelectedData: Array<object>;
  childrenSelectedData: Array<object>;
  grandChildrenSelectedData: Array<object>;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private actionSheetController: ActionSheetController) {
    this.createForm();
    this.getData();
  }

  getData() {
    this.getProvinces();
    this.getCities();
    this.getAreas();
    this.getStreets();
  }

  getProvinces() {
    this._http.get<any>('assets/jsons/pcas/provinces_cn.json').subscribe(data => {
      this.parentsData = data;
    });
  }

  getCities() {
    this._http.get<any>('assets/jsons/pcas/cities_cn.json').subscribe(data => {
      this.peopleData = data;
    });
  }

  getAreas() {
    this._http.get<any>('assets/jsons/pcas/areas_cn.json').subscribe(data => {
      this.childrenData = data;
    });
  }

  getStreets() {
    return this._http.get<any>('assets/jsons/pcas/streets_cn.json').subscribe(data => {
      this.grandChildrenData = data;
    });
  }

  createForm() {
    this.theForm = this.formBuilder.group({
      parent: '',
      person: '',
      child: '',
      grandChild: ''
    });
  }

  get parent() {
    return this.theForm.get('parent');
  }

  get person() {
    return this.theForm.get('person');
  }

  get child() {
    return this.theForm.get('child');
  }

  get grandChild() {
    return this.theForm.get('grandChild');
  }

  selectParent(code: string) {
    this.person.reset();
    this.child.reset();
    this.grandChild.reset();
    this.childrenSelectedData = undefined;
    this.grandChildrenSelectedData = undefined;
    this.peopleSelectedData = this.getPeopleSelected(code);
  }

  getPeopleSelected(code: string) {
    if (this.peopleData !== undefined) {
      const result = [];
      for (let i = 0; i < this.peopleData.length; i++) {
        const value = this.peopleData[i];
        if (value['provinceCode'] === code) {
          result.push(value);
        }
      }
      return result;
    }
  }


  selectPerson(code: string) {
    this.child.reset();
    this.grandChild.reset();
    this.grandChildrenSelectedData = undefined;
    this.childrenSelectedData = this.getChildrenSelected(code);
  }

  getChildrenSelected(code: string) {
    if (this.childrenData !== undefined) {
      const result = [];
      for (let i = 0; i < this.childrenData.length; i++) {
        const value = this.childrenData[i];
        if (value['cityCode'] === code) {
          result.push(value);
        }
      }
      return result;
    }
  }


  selectChild(code: string) {
    this.grandChild.reset();
    this.grandChildrenSelectedData = this.getGrandchildrenSelected(code);
  }

  getGrandchildrenSelected(code: string) {
    if (this.grandChildrenData !== undefined) {
      const result = [];
      for (let i = 0; i < this.grandChildrenData.length; i++) {
        const value = this.grandChildrenData[i];
        if (value['areaCode'] === code) {
          result.push(value);
        }
      }
      return result;
    }
  }


  selectGrandChild() {
    const allCityValue = this.parent.value + '-' + this.person.value + '-' + this.child.value + '-' + this.grandChild.value;
    this.onSelectorsKeyup.emit(allCityValue);
  }

  resetData() {
    this.theForm.reset();
  }

}
