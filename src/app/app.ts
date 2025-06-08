import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUi } from './_components/base-ui/base-ui';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { Certificado } from './pages/certificado/certificado';
import { CertificadosForm } from './pages/certificados-form/certificados-form';
import { Certificados } from './pages/certificados/certificados';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    PrimaryButton,
    SecondaryButton,
    ItemCertificado,
    BaseUi,
    Certificados,
    CertificadosForm,
    Certificado,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'gerador-certificado';
  exibirNavbar: boolean = false;
}
