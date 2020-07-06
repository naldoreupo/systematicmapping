import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Paper, PaperDTO } from '../components/papers/paper';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PapersService {

constructor(private http: HttpClient) { }


GetPapers(paper : PaperDTO) : Observable<any> {
    //debugger;    
    const IsLower2005 : boolean = false;    
    const ce1 : boolean = false; 
    const ce7 : boolean = false;
    let param =`?IsLower2005=${IsLower2005}`;
    if(paper.title != null && paper.title.length > 0 ) {param += `&title=${paper.title}`};
    if(paper.ce1 != null) {param += `&ce1=${paper.ce1}`};
    if(paper.ce2 != null) {param += `&ce2=${paper.ce2}`};
    if(paper.ce3 != null) {param += `&ce3=${paper.ce3}`};
    if(paper.ce4 != null) {param += `&ce4=${paper.ce4}`};
    if(paper.ce5 != null) {param += `&ce5=${paper.ce5}`};
    if(paper.ce6 != null) {param += `&ce6=${paper.ce6}`};
    if(paper.ce7 != null) {param += `&ce7=${paper.ce7}`};
    if(paper.ce8 != null) {param += `&ce8=${paper.ce8}`}; 

    const urlTesis=`${environment.baseService}/api/Papers/GetPapers${param}`;  

    return this.http.get(urlTesis);
}

GetPaper(id : number) : Observable<any> {    

  const urlTesis=`${environment.baseService}/api/Papers/GetPaper?id=${id}`;  

  return this.http.get(urlTesis);
}

UpdatPapers(paper : Paper) : Observable<any> {    

    const body = JSON.stringify(paper);
    const urlTesis=`${environment.baseService}/api/Papers/UpdatePapers`;  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }

    return this.http.put(urlTesis,body,httpOptions).pipe(
      map((data)=>{
        console.log("UpdatPapers data",data);
      }),
      catchError((err) => {
        console.error("UpdatPapers error",err);
        return this.handleError(err);    //Rethrow it back to component
      })
    )
}

private handleError(err) {
  console.log(err);
  return Observable.throw(err || 'Server error');
}
}
