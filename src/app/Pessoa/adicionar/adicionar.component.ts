import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/pessoa';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {

  }

  prepararParaGuardar(nome: String, sobrenome: String){
    if(nome != undefined && sobrenome != undefined){
      this.pessoa = new Pessoa(nome, sobrenome);
      this.guardar(this.pessoa);
    }else{
      alert("Favor preencher os campos")
    }

  }

  guardar(pessoa: Pessoa ){
    this.service.createPessoa(this.pessoa).subscribe( value => {
      alert("Pessoa adicionada com sucesso!")
      this.router.navigate(["listar"]);
    })
  }

}
