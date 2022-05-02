import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Vacanca } from '../models/vacanca';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveDataService implements Resolve<Vacanca[]> {
  constructor(private service: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return this.service.loadData();
  }
}