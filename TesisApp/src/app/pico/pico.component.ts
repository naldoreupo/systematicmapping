import { Component, OnInit } from '@angular/core';
import { PicoServiceService } from '../Service/pico-service.service';

@Component({
  selector: 'app-pico',
  templateUrl: './pico.component.html',
  styleUrls: ['./pico.component.css']
})
export class PicoComponent implements OnInit {

  constructor(private picoService: PicoServiceService) { }

  spanish: Boolean = false;
  english: Boolean = true;
  searchStrings: [];
  filterByLanguage:string;

  ngOnInit() { 
    this.getSearchString();
  }

 getSearchString(){

  const alllanguage :string ='A';
  const spanishlanguage :string ='S';
  const englishlanguage :string ='E';
  
  if(this.english){this.filterByLanguage = englishlanguage;}
  if(this.spanish){this.filterByLanguage = spanishlanguage;}
  if(this.english && this.spanish){this.filterByLanguage = alllanguage;}

   this.picoService.GetSearchString(this.filterByLanguage).subscribe((data)=>{
       this.searchStrings = data['list']; 
   })
 }

}
