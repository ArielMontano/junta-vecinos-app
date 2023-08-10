import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Vecino } from 'src/app/modelo/vecino.model';
import { VecinoService } from 'src/app/services/vecino.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-vecinos',
  templateUrl: './list-vecinos.component.html',
  styleUrls: ['./list-vecinos.component.css']
})

export class ListVecinosComponent implements OnInit {
  vecinos: Vecino[] = [];
  formBusqueda = this.formBuilder.group({
    nombreVecino: ''
  });

  constructor(private _vecinoService: VecinoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getVecinos();
  }
  
  getVecinos(){
    this._vecinoService.getAll().subscribe(data =>{
      this.vecinos = [];
      data.forEach((element: any) => {
        this.vecinos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.vecinos);
    })
  }

  deleteVecino(id: string){
    if(confirm('Seguro que desea eliminar al vecino?')){
      this._vecinoService.delete(id).then(()=> {
        console.log('Vecino eliminado');
        this.toastr.info('El vecino fue eliminado con exito', 'Vecino Eliminado!');
      }).catch(error => {
        this.toastr.error('ha ocurrido un error al eliminar a un vecino', 'Error al eliminar vecino');
        console.log(error);
      })
    }
  }

  getVecinoByNombre(){
    let name: string = this.formBusqueda.get('nombreVecino')?.value || ''; 
    this._vecinoService.getByName(name).subscribe(
      data => {
        this.vecinos = [];
        data.forEach((element: any) =>{
          this.vecinos.push({
            ...element
          })
        });
        console.log(this.vecinos);
      }
    )
  }
}

