import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../Modelo/pessoa'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:8080/lp2/pessoas"

  getPessoas(){
    return this.http.get<Pessoa[]>(this.Url);
  }

  createPessoa(pessoa: Pessoa){
    return this.http.post<Pessoa>(this.Url,pessoa);
  }

  getPessoaId(id: number){
    return this.http.get<Pessoa>(this.Url+"/"+id);
  }

  updatePessoa(pessoa: Pessoa){
    return this.http.put<Pessoa>(this.Url+"/"+pessoa.id, pessoa);
  }

  deletePessoa(pessoa: Pessoa){
    return this.http.delete<Pessoa>(this.Url+"/"+pessoa.id);
  }
}
