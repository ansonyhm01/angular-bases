import { Component, OnInit } from '@angular/core';
import { PatronWebService } from '../../services/patron-web.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Patron, Respuesta, Resultado } from '../../interfaces/prueba.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {
  
    pruebaFG = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
    datosPrueba:Resultado[]=[]

  constructor(private patronWebService:PatronWebService) {
   }
  // buildForm() {
  //   this.pruebaFG = new FormGroup({
  //     archivo: new FormControl("", Validators.required),
  //   });
  // }
  // getFC(control: string): AbstractControl |null {
  //   return this.pruebaFG.get(control);
  // }
  archivo:any=undefined;
  postPatronWeb(){
    const formData = new FormData();
    formData.append("archivoDBF", this.archivo);
    this.patronWebService.PostArchivo(formData).subscribe((resp:any)=>{
      const mensaje=resp['mensaje']
      Swal.fire(mensaje);
    })
  }
  postPatronWebLeer(){
    const formData = new FormData();
    formData.append("archivoDBF", this.archivo);
    this.patronWebService.PostArchivoLeer(formData).subscribe((resp:any)=>{
      // console.log(resp)
      this.datosPrueba=resp['resultado']
      // this.datosPrueba[]
    })
  }

  
  elegirAnchivo(archivo:any){
    this.archivo=archivo.target.files[0]
  }
  ngOnInit(): void {
  }
  

}
