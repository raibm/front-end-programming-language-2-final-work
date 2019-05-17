import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lp2';

  constructor(private router: Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Novo(){
    this.router.navigate(["adicionar"]);
  }
}
