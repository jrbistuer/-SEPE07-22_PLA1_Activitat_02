import { Injectable } from '@angular/core';
import { Vacanca } from '../models/vacanca';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  vacances: Vacanca[] = [
    {id: 1, titol: 'Vacances a Valencia', ciutat: 'Valencia', hotel: 'Hotel Rex VI', preu: '1600€', comentaris: 'Lorem ipsum dolor...'},
    {id: 2, titol: 'Vacances a Barcelona', ciutat: 'Barcelona', hotel: 'Hotel Ritz', preu: '2600€', comentaris: 'Lorem ipsum dolor...'},
    {id: 3, titol: 'Vacances a Madrid', ciutat: 'Madrid', hotel: 'Hotel Sheraton', preu: '3600€', comentaris: 'Lorem ipsum dolor...'},
    {id: 4, titol: 'Vacances a Segovia', ciutat: 'Segovia', hotel: 'Hotel Guionea', preu: '1600€', comentaris: 'Lorem ipsum dolor...'}
  ]

  constructor() { }

  getVacances(): Vacanca[] {
    return this.vacances;
  }

  getVacancesById(id: number): Vacanca {
    return this.vacances.filter(vacanca => vacanca.id === id)[0];
  }

  addVacanca(vacanca: Vacanca): void {
    const lastId = this.vacances[this.vacances.length - 1].id;
    vacanca.id = lastId + 1;
    this.vacances.push(vacanca);
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
