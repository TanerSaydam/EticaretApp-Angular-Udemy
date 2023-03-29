import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  api: string = "http://localhost:5000/api";
  constructor(
    private _http: HttpClient,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService
  ) { }

  get<T>(api: string, callBack: (res:T)=> void){
    this._spinner.show();
    this._http.get<T>(`${this.api}/${api}`).subscribe({
      next: (res:T)=> {
        callBack(res);
        this._spinner.hide();
      },
      error: (err:HttpErrorResponse) => {
        console.log(err);
        this._toastr.error(err.error.message);
        this._spinner.hide();
      }
    });
  }

  post<T>(api: string,model:any,callBack: (res:T)=> void){
    this._spinner.show();
    this._http.post<T>(`${this.api}/${api}`, model, {}).subscribe({
      next: (res:T)=> {
        callBack(res);
        this._spinner.hide();
      },
      error: (err:HttpErrorResponse) => {
        console.log(err);
        this._toastr.error(err.error.message);
        this._spinner.hide();
      }
    });
  }
}
