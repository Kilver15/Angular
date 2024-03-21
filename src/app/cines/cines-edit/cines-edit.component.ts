import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { CommonModule } from '@angular/common';
import { Cine } from '../../interfaces/cine.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-cines-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cines-edit.component.html',
  styleUrl: './cines-edit.component.css',
  animations: fadeInOutAnimations
})
export class CinesEditComponent {
  cinesEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  isLoading = false;

 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cinesService: CinesService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCine();
    this.initForm();
 }

 private initForm(): void {
    this.cinesEditForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      dirección: ['', [Validators.required, Validators.minLength(10)]],
      ciudad: ['', [Validators.required, Validators.minLength(6)]],
      capacidad_total: ['', Validators.required]
    });
 }

 private loadCine(): void {
  if (this.id) {
     this.cinesService.getCineById(this.id).subscribe((cine: Cine) => {
       this.cinesEditForm.patchValue({
         nombre: cine.nombre,
         dirección: cine.dirección,
         ciudad: cine.ciudad,
         capacidad_total: cine.capacidad_total
       });
       this.cargando = false;
     });
  }
 }

 onSubmit(): void {
    if (this.cinesEditForm.valid) {
      this.isLoading = true;
      this.cinesService.updateCine(this.id, this.cinesEditForm.value).subscribe(
        response=>{
          console.log('cine editado con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/cines/index']);
        },
        error => console.error('Error al crear el cine:', error)
      );
    }
 }
}