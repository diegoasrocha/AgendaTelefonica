import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/Models/Contato';
import { ContatosService } from 'src/app/Services/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' 
})
export class HomeComponent implements OnInit {
  
  public contatos!: Contato[];

  constructor(private cs: ContatosService) { }

  ngOnInit(): void {
    this.cs.obterContatos().subscribe(
      contatos => {
        console.log("Contatos: ", contatos);      
        this.contatos = contatos; 
      },
      error => console.log("Erro:", error)
    )
  }

  removerContato(id: number): void{
    this.cs.removerContato(id).subscribe(
      response => {
        console.log("Response: ", response);

        this.ngOnInit();
      },
      error => console.log("Erro:", error)
    );
 
  }

}
