import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacanca } from '../models/vacanca';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  vacances: Vacanca[] = [];

  constructor(private httpClient: HttpClient) { }

  loadData() {
    // return this.httpClient.get<Vacanca[]>('https://14337175-4a60-4d94-a68c-f98cfd00815b.mock.pstmn.io/tester');
    return new Promise((resolve, error) => {
      this.httpClient.get<Vacanca[]>('https://14337175-4a60-4d94-a68c-f98cfd00815b.mock.pstmn.io/tester').subscribe((data: Vacanca[]) => {
        this.vacances = data;
        localStorage.setItem('vacances', JSON.stringify(this.vacances));
        resolve(this.vacances);
      }, (err) => {
        console.error(err);
        error(err);
      });  
    });
  }

  getVacances(): Vacanca[] {
    if(this.vacances.length === 0) {
      this.vacances = JSON.parse(localStorage.getItem('vacances')!);
    }
    return this.vacances;
  }

  getVacancesById(id: number): Vacanca {
    return this.vacances.filter(vacanca => vacanca.id === id)[0];
  }

  addVacanca(vacanca: Vacanca): void {
    const lastId = this.vacances.length === 0 ? 0 : this.vacances[this.vacances.length - 1].id;
    vacanca.id = lastId + 1;
    this.vacances.push(vacanca);
    localStorage.setItem('vacances', JSON.stringify(this.vacances));
  }

  removeVacanca(id: number): void {
    this.vacances.forEach((value,index)=>{
      if(value.id===id) {
        this.vacances.splice(index,1);
      }
    })
  }

  editVacanca(vacanca: Vacanca): void  {
    this.vacances.forEach((value,index)=>{
      if(value.id===vacanca.id) {
        this.vacances[index] = vacanca;
      }
    })
  }

}
