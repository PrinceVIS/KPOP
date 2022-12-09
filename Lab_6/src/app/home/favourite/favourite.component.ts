import { Component, HostBinding, HostListener, Inject ,Input,OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  
    private _favouriteRows : Array<CityRow>;
    private counter : number;

    get favouriteRows() : Array<CityRow> {
      return this._favouriteRows;
    }

    constructor(private storage: Storage){
      this._favouriteRows = new Array<CityRow>();
      this.counter = 0;
    }

    pushData(cityName : string, savedRow : string) : void{
      let compressedData : CityRow = new CityRow(cityName, savedRow);
      this.storage.set(this.counter.toString(), compressedData);
      this.storage.get(this.counter.toString()).then((data : CityRow) => {
        let newRow : CityRow = new CityRow(data['_cityName'], data['_rowData']);
        console.log(data);
        if(newRow != null){
          this._favouriteRows.push(newRow);
        }
        
      });
      this.counter++;
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
