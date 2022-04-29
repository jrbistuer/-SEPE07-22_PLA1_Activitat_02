import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vacanca } from 'src/app/models/vacanca';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vacancaForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  vacances: Vacanca[] = [];

  ngOnInit(): void {
    this.vacances = this.dataService.getVacances();
    this.createForm();
  }

  createForm(): void {
    this.vacancaForm = new FormGroup({
      titol: new FormControl({value: '', disabled: false}, [Validators.required]),
      ciutat: new FormControl({value: '', disabled: false}, [Validators.required]),
      hotel: new FormControl({value: '', disabled: false}, [Validators.required]),
      preu: new FormControl({value: '', disabled: false}, [Validators.required]),
      comentaris: new FormControl({value: '', disabled: false}, []),
    });
  }

  resetForm(): void  {
    this.vacancaForm.markAsPristine();
    this.vacancaForm.markAsUntouched();
    this.vacancaForm.get('titol')?.setValue('');
    this.vacancaForm.get('ciutat')?.setValue('');
    this.vacancaForm.get('hotel')?.setValue('');
    this.vacancaForm.get('preu')?.setValue('');
    this.vacancaForm.get('comentaris')?.setValue('');
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
  
  removeVacanca(id: number) {
    this.dataService.removeVacanca(id);
  }

  addVacanca() {
    const vacanca: Vacanca = {} as Vacanca;
    vacanca.titol = this.vacancaForm.get('titol')?.value;
    vacanca.ciutat = this.vacancaForm.get('ciutat')?.value;
    vacanca.hotel = this.vacancaForm.get('hotel')?.value;
    vacanca.preu = this.vacancaForm.get('preu')?.value;
    vacanca.comentaris = this.vacancaForm.get('comentaris')?.value;
    this.dataService.addVacanca(vacanca);
    this.resetForm();
  }

  editVacanca(vacanca: Vacanca) {

  }

}