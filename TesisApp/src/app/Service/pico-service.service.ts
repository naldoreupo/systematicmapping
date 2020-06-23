import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PicoServiceService {

constructor(private http: HttpClient) { 
}

GetSearchString(language : string){  
  return this.http.get('https://tesisservice.azurewebsites.net/api/Pico/GetSearchString?language='+language);
}
}