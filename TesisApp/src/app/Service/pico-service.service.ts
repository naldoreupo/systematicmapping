import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PicoServiceService {

constructor(private http: HttpClient) { 
}

  GetSearchString(language : string){  
    return this.http.get(`${environment.baseService}/api/Pico/GetSearchString?language=${language}`);
  }
}