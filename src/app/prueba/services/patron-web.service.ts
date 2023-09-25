import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatronWebService {
  url:string=`${environment.base_url}`
  constructor(private http: HttpClient) { }

  PostArchivo(inputRequest: any) {
    return this.http.post(`${this.url}/archivo`,inputRequest);
  }
  PostArchivoLeer(inputRequest: any) {
    return this.http.post(`${this.url}/lectura-archivo`,inputRequest);
  }
}
