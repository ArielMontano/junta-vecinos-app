import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VecinoService } from 'src/app/services/vecino.service';

@Component({
  selector: 'app-create-vecino',
  templateUrl: './create-vecino.component.html',
  styleUrls: ['./create-vecino.component.css']
})
export class CreateVecinoComponent {
  formVecino: FormGroup;
  submitted = false;
  loading = false;
  checkArray: any[] = [];

  constructor(private fb: FormBuilder,
    private _vecinoService: VecinoService,
    private router: Router,
    private toastr: ToastrService) { 
    this.formVecino = this.fb.group({
      nombre: ['', Validators.required],
      rut: '',
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: '',
      cantidad: '',
      ninios: '',
      edad1: '',
      edad2: '',
      edad3: '',
      edad4: '',
      reducida: '',
      mayores: '',
      acceso_porton_playa:'',
      numero_acceso_porton_playa1:'',
      numero_acceso_porton_playa2:'',
      numero_acceso_porton_playa3:'',
      acceso_porton_llano:'',
      control_porton_llano:'',
      llave_porton_llano:'',
      acceso_puerta_playa:'',
      acceso_puerta_llano:'',
      acceso_puerta_cachapoal:'',
      acceso_furgon_escolar:'',
      furgon_control_porton_llano:'',
      furgon_llave_porton_llano:'',
      patente1:'',
      patente2:'',
      patente3:''
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    this.submitted = true;
    if(this.formVecino.invalid){
      this.toastr.warning('Por favor llenar el formulario correctamente', 'Validación de formulario', {
        positionClass:'toast-bottom-left'
      });
      return;
    }
    const vecino: any = Object.assign({}, {
      personales: {
        nombre: this.formVecino.value.nombre,
        rut: this.formVecino.value.rut,
        direccion: this.formVecino.value.direccion,
        email: this.formVecino.value.email,
        telefono: this.formVecino.value.telefono
      },
      integrantes: {
        cantidad: this.formVecino.value.cantidad,
        ninios: this.formVecino.value.ninios,
        edades: [{
          edad1: this.formVecino.value.edad1,
          edad2: this.formVecino.value.edad2,
          edad3: this.formVecino.value.edad3,
          edad4: this.formVecino.value.edad4
        }],
        reducida: this.formVecino.value.reducida,
        mayores: this.formVecino.value.mayores
      },
      accesos: {
        acceso_porton_playa: this.formVecino.value.acceso_porton_playa? this.formVecino.value.acceso_porton_playa : "",
        numeros_asociados: [{
          numero_acceso_porton_playa1: this.formVecino.value.numero_acceso_porton_playa1,
          numero_acceso_porton_playa2: this.formVecino.value.numero_acceso_porton_playa2,
          numero_acceso_porton_playa3: this.formVecino.value.numero_acceso_porton_playa3
        }],
        acceso_porton_llano: this.formVecino.value.acceso_porton_llano? this.formVecino.value.acceso_porton_llano : "",
        control_porton_llano: this.formVecino.value.control_porton_llano? this.formVecino.value.control_porton_llano: "",
        llave_porton_llano: this.formVecino.value.llave_porton_llano? this.formVecino.value.llave_porton_llano : "",
        acceso_puerta_playa: this.formVecino.value.acceso_puerta_playa? this.formVecino.value.acceso_puerta_playa : "",
        acceso_puerta_llano: this.formVecino.value.acceso_puerta_llano? this.formVecino.value.acceso_puerta_llano: "",
        acceso_puerta_cachapoal: this.formVecino.value.acceso_puerta_cachapoal? this.formVecino.value.acceso_puerta_cachapoal : "",
        acceso_furgon_escolar: this.formVecino.value.acceso_furgon_escolar? this.formVecino.value.acceso_furgon_escolar : "",
        furgon_control_porton_llano: this.formVecino.value.furgon_control_porton_llano? this.formVecino.value.furgon_control_porton_llano : "",
        furgon_llave_porton_llano: this.formVecino.value.furgon_llave_porton_llano? this.formVecino.value.furgon_llave_porton_llano : "",
        patentes_vehiculos: [{
          patente1: this.formVecino.value.patente1,
          patente2: this.formVecino.value.patente2,
          patente3: this.formVecino.value.patente3
        }]
      }
    });
    this.loading = true;
    this._vecinoService.agregarVecino(vecino).then(() => {
      this.toastr.success('Vecino agregado correctamente', 'Vecino Agregado!');
      console.log("vecino agregardo");
      this.router.navigate(["/lista-vecinos"]);
    }).catch(error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('ha ocurrido un error al agregar a un vecino', 'Error al guardar vecino');
    })

    console.log(vecino);
  }
}
