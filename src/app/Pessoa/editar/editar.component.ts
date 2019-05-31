import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/pessoa';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id = localStorage.getItem("id");
    this.service.getPessoaId(+id).subscribe(data => {
      this.pessoa = data;
    })
  }

  atualizar(pessoa: Pessoa){
    this.service.updatePessoa(pessoa).subscribe(data=>{
      this.pessoa = data;
      alert("Pessoa atualizada!");
      this.router.navigate(["listar"]);
    })
  }

}
