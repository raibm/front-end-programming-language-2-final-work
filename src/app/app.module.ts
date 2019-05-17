import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { EditarComponent } from './Pessoa/editar/editar.component';
import { AdicionarComponent } from './Pessoa/adicionar/adicionar.component';
import { FormsModule } from '@angular/forms'
import { ServiceService} from '../app/Service/service.service'
import { HttpClientModule } from'@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
