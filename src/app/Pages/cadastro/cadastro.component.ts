import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from 'src/app/Models/Contato';
import { TipoContato } from 'src/app/Models/TipoContato';
import { ContatosService } from 'src/app/Services/contatos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  tiposContatos!: TipoContato[];
  contato!: Contato

  constructor(private fb: FormBuilder, private cs: ContatosService, private router: Router) { }

  ngOnInit(): void {
    this.cs.obterTiposContatos().subscribe(
      tiposContatos => {
        console.log("tiposContatos: ", tiposContatos);
        this.tiposContatos = tiposContatos;
      },
      error => console.log("Erro:", error)
    );

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      sobreNome: ['', [Validators.required]],
      numero: [null, [Validators.required]],
      idTipoContato: [null, [Validators.required]]
    });
  }

  cadastrarContato(): void { 
    this.contato = <Contato> this.cadastroForm.value;

    let tipo = this.tiposContatos.find(obj => obj.id == this.contato.idTipoContato);

    this.contato.tipoContato = Object.assign({}, this.contato.tipoContato, tipo);
    this.contato.idTipoContato = parseInt(this.contato.idTipoContato?.toString());
    
    this.cs.cadastrarContato(this.contato).subscribe(
      response => {
        console.log("Response: ", response);
        this.router.navigate(['/home']);
      },
      error => console.log("Erro: ", error)
    );
  }

}
