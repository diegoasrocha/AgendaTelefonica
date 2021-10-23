import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contato } from '../Models/Contato';
import { TipoContato } from '../Models/TipoContato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private http: HttpClient) { }

  protected UrlServiceV1: string = "http://localhost:3000";

  // GET /Contatos
  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.UrlServiceV1 + "/Contatos");
  }

  // POST /Contatos
  cadastrarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.UrlServiceV1 + "/Contatos", contato);
  }

  // DELETE /Contatos/id
  removerContato(id: number): Observable<Contato> {
    return this.http.delete<Contato>(this.UrlServiceV1 + "/Contatos/" + id);
  }

  // GET /TiposContatos
  obterTiposContatos(): Observable<TipoContato[]> {
    return this.http.get<TipoContato[]>(this.UrlServiceV1 + "/TiposContatos");
  }

  // GET /TiposContatos/id
  obterTipoContato(id: number): Observable<TipoContato> {
    return this.http.get<TipoContato>(this.UrlServiceV1 + "/TiposContatos/" + id);
  }

}
