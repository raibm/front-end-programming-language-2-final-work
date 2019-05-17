import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pessoas: Pessoa[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.service.getPessoas().subscribe(valor => {
      this.pessoas = valor;
    });
  }

  editar(pessoa: Pessoa){
    console.log(pessoa)
    localStorage.setItem("id", pessoa.id.toString());
    this.router.navigate((["editar"]));
  }
  

}
