import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinesService } from '../../cines/cines.service';
import { SalasService } from '../salas.service';
import { CommonModule } from '@angular/common';
import { Cine } from '../../interfaces/cine.interface';
import { Sala } from '../../interfaces/sala.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-salas-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './salas-edit.component.html',
  styleUrl: './salas-edit.component.css',
  animations: fadeInOutAnimations
})
export class SalasEditComponent {
  salasEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  cines: Cine[] = [];

 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cinesService: CinesService,
    private salasService: SalasService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSala();
    this.initForm();
    this.cinesService.indexcine().subscribe(cines => {
      this.cines = cines;
   });
 }

 private initForm(): void {
    this.salasEditForm = this.formBuilder.group({
      cine_id: ['',[ Validators.required]],
      numero_sala: ['',[ Validators.required]],
      capacidad: ['',[ Validators.required, Validators.minLength(1)]],
    });
 }

 private loadSala(): void {
  if (this.id) {
     this.salasService.getSalaById(this.id).subscribe((sala: Sala) => {
       this.salasEditForm.patchValue({
         cine_id: sala.cine_id,
         numero_sala: sala.numero_sala,
         capacidad: sala.capacidad
       });
       this.cargando = false;
     });
  }
 }

 onSubmit(): void {
    if (this.salasEditForm.valid) {
      this.salasService.updateSala(this.id, this.salasEditForm.value).subscribe(
        response=>{
          console.log('sala editada con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/salas/index']);
        },
        error => console.error('Error al crear la sala:', error)
      );
    }
 }
}