import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClint : HttpClient) { }

  users(){
    this.httpClint.get("https://dummyapi.online/api/users").subscribe((resdata)=>{
      console.log(resdata);
    });
  }
}
