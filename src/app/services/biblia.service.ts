import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BibliaService {

  public apostolos = ["Matheus", "Marcos", "Matheus", "Lucas"];

  private baseURL: string = 'https://bible-api.com/';
  constructor(
    private _httpClient: HttpClient
  ) { }

  public getApostolo() {
    return this.apostolos[Math.floor(Math.random()*this.apostolos.length)];
  }
  
  public getVersiculoBiblia(): Observable<any> {
    let apostolo = this.getApostolo();
    let numero = Math.floor(Math.random() * 5) + 1;
    let numero2 = Math.floor(Math.random() * 15) + 1;
    
    return this._httpClient.get(`${this.baseURL+apostolo+'+10:'+numero+'-'+numero2}?translation=almeida`).pipe(
      tap((data: any) => {
        data
    }),
    catchError((error: HttpErrorResponse) => { 
      console.log('error', error);
      return EMPTY; 
    }),
  )}
}
