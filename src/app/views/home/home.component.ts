import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacanca } from 'src/app/models/vacanca';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  vacances: Vacanca[] = [];

  ngOnInit(): void {
    this.vacances = this.dataService.getVacances();
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }

}
