import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacanca } from 'src/app/models/vacanca';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  vacanca: Vacanca = {} as Vacanca;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location  
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.vacanca = this.dataService.getVacancesById(id);
  }

  goBack(): void {
    this.location.back();
  }

}
