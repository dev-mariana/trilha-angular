import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUi } from './_components/base-ui/base-ui';

import { CommonModule } from '@angular/common';
import { Navbar } from './_components/navbar/navbar';
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados
      ? JSON.parse(certificados)
      : [];
    console.log(this.certificadoService.certificados);
  }
}
