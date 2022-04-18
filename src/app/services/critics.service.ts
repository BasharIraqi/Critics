import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { critic } from '../interfaces/critic';

@Injectable({
  providedIn: 'root'
})
export class CriticsService {

  constructor(private http:HttpClient) {

   }

   getSpecificCritic(id:number){
      return this.http.get<critic>('http://localhost:3000/critics/'+id);
   }

   getCritics(){
      return this.http.get('http://localhost:3000/critics');
   }

   postCritic(critic:critic){
     return this.http.post('http://localhost:3000/critics',critic);
   }

    deleteCritic(id:number){
      return this.http.delete('http://localhost:3000/critics/'+id);
    }

    updateCritic(critic:critic,id:number){
      return this.http.put('http://localhost:3000/critics/'+id,critic);
    }
}
