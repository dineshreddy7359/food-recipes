import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderModel } from 'src/app/shared/loader/loader.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _isLoading: boolean;
  private loader = new Subject<any>();
  loader$ = this.loader.asObservable();

  constructor() { }
    
  startLoader(data?: LoaderModel) {
    if (data === undefined) {
      data = new LoaderModel();
      data.isLoading = true;
      data.pageLoad = true;
      data.message = 'Please wait loading...';
    }
    this.isLoading = true;
    this.loader.next(data);
  }

  stop(data?: LoaderModel) {
    if (!data) {
      data = new LoaderModel();
      data.isLoading = false;
    }
    this.loader.next(data);
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }

}
