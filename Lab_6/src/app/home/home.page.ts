import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { switchMap } from 'rxjs';
import { FavouriteComponent } from './favourite/favourite.component';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(FavouriteComponent) 
  private favouriteBlock !: FavouriteComponent;  

  @ViewChild(PopupComponent) 
  private popup !: PopupComponent;
  private _title : string = 'Weather forecast';
  private _data : any;
  
  private _isFavouriteVisible : boolean;
  
  private _city : string;
  private _htmlElement !: string;

  set city(newCity : string){
    this._city = newCity;
  }

  get city() : string {
    return this._city;
  }

  get title() : string{
    return this._title;
  }
  
  get data() : object {
    return this._data;
  }

  get htmlElement() : string{
    return this._htmlElement;
  }

  get isFavouriteVisible() : boolean {
    return this._isFavouriteVisible;
  }

  constructor(private http: HttpClient) {
      this._data = [];
      this._city = '';
      this._isFavouriteVisible = false;
  }
  
  getData() : void{
    this.http.get(`https://geocoding-api.open-meteo.com/v1/search?name=${this.city}`).pipe(
      switchMap((geoData : any) => {
        console.log(geoData);
        const URL : string = `https://api.open-meteo.com/v1/forecast?` +
                                                    `latitude=${geoData.results[0]['latitude']}` +
                                                    `&longitude=${geoData.results[0]['longitude']}` +
                                                    `&daily=temperature_2m_max&timezone=${geoData.results[0]['timezone']}` +
                                                    `&hourly=temperature_2m`;
        console.log(URL);
        let data : any = this.http.get(URL);
        return data;
      }))
      .subscribe(res => {
        this._data = res;
        console.log(this.data);
      })
      
  }

  addToFavourite() : void {
    this.favouriteBlock.pushData(this._city, this._htmlElement);
  }

  startPopup(event : any) : void {
    if(!this._isFavouriteVisible){
      this._isFavouriteVisible = true;
    }
    this._htmlElement = event.currentTarget.innerHTML;
    this.popup.open(event)
  }

  getPropertyCount(obj : object) : number {
    return Object.keys(obj).length;
  }

  isArray(obj : any) : boolean {
    return Array.isArray(obj);
  }

  getArray(obj : any) : Array<object> {
    return Array.from(obj);
  }

  hasArray(obj : any) : boolean {
    let keys : Array<string> = Object.keys(obj);
    let isArray : boolean = false;

    for (let key of keys){
      isArray = this.isArray(obj[key]);
      if(isArray){
        break;
      }
    }
    return isArray;
  }
  

}


