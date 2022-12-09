import { Component, HostBinding, HostListener, Inject ,Input,OnInit} from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  
    private _favouriteRows : Array<CityRow>;

    get favouriteRows() : Array<CityRow> {
      return this._favouriteRows;
    }

    constructor(){
      this._favouriteRows = new Array<CityRow>();
    }

    pushData(cityName : string, savedRow : string) : void{
      this._favouriteRows.push(new CityRow(cityName, savedRow));
    }


}

class CityRow{
  private _cityName : string;
  private _rowData : string;

  get cityName() : string {
    return this._cityName;
  }

  get rowData() : string {
    return this._rowData;
  }

  set cityName(name : string) {
    this._cityName = name;
  }

  set rowData(data : string) {
    this._rowData = data;
  }

  constructor(name : string, data : string){
    this._cityName = name;
    this._rowData = data;
  }
}
