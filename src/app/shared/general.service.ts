import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fancards } from './generic.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor( private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000/users';


postuser(val:fancards)
{
  this.http.post<fancards>('http://localhost:3000/users',val).subscribe((val)=>{
    console.log(val,"value is posted");
    // this.getusers()
  })
  

}

getsingledata(id:string|undefined)
{
  return this.http.get<fancards>(this.apiUrl +'/'+id)
}


deleteselected(userId:string|undefined)
{
   
  const url = `${this.apiUrl}/${userId}`;
  return this.http.delete(url);
}


getusers():Observable<fancards[]>
{
return  this.http.get<fancards[]>('http://localhost:3000/users') 
}


}
