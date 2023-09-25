import { Component, OnInit } from '@angular/core';
import { PatronWebService } from '../../services/patron-web.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Patron } from '../../interfaces/prueba.interface';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {
  
    pruebaFG = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
    datosPrueba:any[]=[
      {
        name:'jose',
        lastName:'huillca',
        address:'av los incas 45'
      },{
        name:'maria',
        lastName:'inojosa',
        address:'av los sauces 45'
      },{
        name:'raul',
        lastName:'saire',
        address:'av el sol 45'
      }
    ]

  constructor(private patronWebService:PatronWebService) {
    // this.buildForm
   }
  // buildForm() {
  //   this.pruebaFG = new FormGroup({
  //     archivo: new FormControl("", Validators.required),
  //   });
  // }
  // getFC(control: string): AbstractControl |null {
  //   return this.pruebaFG.get(control);
  // }
  postPatronWeb(){
    const formData = new FormData();
    // formData.append("archivoDBF", this.pruebaFG.value.archivo);
    formData.append("archivoDBF", this.archivo);
    this.patronWebService.PostArchivo(formData).subscribe((resp:any)=>{
      this.mensaje=resp['mensaje']
        // console.log(resp['mensaje']);
    })
  }
  postPatror2(){
    
  }
  archivo:any=undefined;
  mensaje:string=''
  elegirAnchivo(archivo:any){
    this.archivo=archivo.target.files[0]
    // console.log(arch);

  }
  ngOnInit(): void {
  }
  

}
