import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  primerContactoNoValido(forma: FormGroup) {
    return forma.get('primerContacto').invalid && forma.get('primerContacto').touched;
  }

  nombreNoValido(forma: FormGroup) {
    return forma.get('nombre').invalid && forma.get('nombre').touched;
  }

  mesYAnioIngresoNoValido(forma: FormGroup) {
    return forma.get('mesYAnioIngreso').invalid && forma.get('mesYAnioIngreso').touched;
  }

  primerApellidoNoValido(forma: FormGroup) {
    return forma.get('primerApellido').invalid && forma.get('primerApellido').touched;
  }

  segundoApellidoNoValido(forma: FormGroup) {
    return forma.get('segundoApellido').invalid && forma.get('segundoApellido').touched;
  }

  nuaNoValido(forma: FormGroup) {
    return forma.get('nua').invalid && forma.get('nua').touched;
  }

  edadNoValido(forma: FormGroup) {
    return forma.get('edad').invalid && forma.get('edad').touched;
  }

  estadoCivilNoValido(forma: FormGroup) {
    return forma.get('estadoCivil').invalid && forma.get('estadoCivil').touched;
  }

  fechaNacimientoNoValido(forma: FormGroup) {
    return forma.get('fechaNacimiento').invalid && forma.get('fechaNacimiento').touched;
  }

  ciudadNacimientoNoValido(forma: FormGroup) {
    return forma.get('ciudadNacimiento').invalid && forma.get('ciudadNacimiento').touched;
  }

  estadoNacimientoNoValido(forma: FormGroup) {
    return forma.get('estadoNacimiento').invalid && forma.get('estadoNacimiento').touched;
  }

  campus_enmsNoValido(forma: FormGroup) {
    return forma.get('campus_enms').invalid && forma.get('campus_enms').touched;
  }

  division_sedeNoValido(forma: FormGroup) {
    return forma.get('division_sede').invalid && forma.get('division_sede').touched;
  }

  programaEducativoNoValido(forma: FormGroup) {
    return forma.get('programaEducativo').invalid && forma.get('programaEducativo').touched;
  }

  periodoNoValido(forma: FormGroup) {
    return forma.get('periodo').invalid && forma.get('periodo').touched;
  }

  gradoNoValido(forma: FormGroup) {
    return forma.get('grado').invalid && forma.get('grado').touched;
  }

  tipoPeriodoNoValido(forma: FormGroup) {
    return forma.get('tipoPeriodo').invalid && forma.get('tipoPeriodo').touched;
  }

  telefonoCelularNoValido(forma: FormGroup) {
    return forma.get('telefonoCelular').invalid && forma.get('telefonoCelular').touched;
  }

  telefonoCasaNoValido(forma: FormGroup) {
    return forma.get('telefonoCasa').invalid && forma.get('telefonoCasa').touched;
  }

  telefonoCasaCiudadNoValido(forma: FormGroup) {
    return forma.get('telefonoCasaCiudad').invalid && forma.get('telefonoCasaCiudad').touched;
  }

  telefonoCasaOrigenNoValido(forma: FormGroup) {
    return forma.get('telefonoCasaOrigen').invalid && forma.get('telefonoCasaOrigen').touched;
  }

  calleDomicilioNoValido(forma: FormGroup) {
    return forma.get('calleDomicilio').invalid && forma.get('calleDomicilio').touched;
  }

  numeroDomicilioNoValido(forma: FormGroup) {
    return forma.get('numeroDomicilio').invalid && forma.get('numeroDomicilio').touched;
  }

  coloniaDomicilioNoValido(forma: FormGroup) {
    return forma.get('coloniaDomicilio').invalid && forma.get('coloniaDomicilio').touched;
  }

  cpDomicilioNoValido(forma: FormGroup) {
    return forma.get('cpDomicilio').invalid && forma.get('cpDomicilio').touched;
  }

  localidadDomicilioNoValido(forma: FormGroup) {
    return forma.get('localidadDomicilio').invalid && forma.get('localidadDomicilio').touched;
  }

  ciudadDomicilioNoValido(forma: FormGroup) {
    return forma.get('ciudadDomicilio').invalid && forma.get('ciudadDomicilio').touched;
  }

  estadoDomicilioNoValido(forma: FormGroup) {
    return forma.get('estadoDomicilio').invalid && forma.get('estadoDomicilio').touched;
  }

  calleDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('calleDomicilioCiudad').invalid && forma.get('calleDomicilioCiudad').touched;
  }

  numeroDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('numeroDomicilioCiudad').invalid && forma.get('numeroDomicilioCiudad').touched;
  }

  coloniaDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('coloniaDomicilioCiudad').invalid && forma.get('coloniaDomicilioCiudad').touched;
  }

  cpDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('cpDomicilioCiudad').invalid && forma.get('cpDomicilioCiudad').touched;
  }

  localidadDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('localidadDomicilioCiudad').invalid && forma.get('localidadDomicilioCiudad').touched;
  }

  ciudadDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('ciudadDomicilioCiudad').invalid && forma.get('ciudadDomicilioCiudad').touched;
  }

  estadoDomicilioCiudadNoValido(forma: FormGroup) {
    return forma.get('estadoDomicilioCiudad').invalid && forma.get('estadoDomicilioCiudad').touched;
  }

  calleDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('calleDomicilioOrigen').invalid && forma.get('calleDomicilioOrigen').touched;
  }

  numeroDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('numeroDomicilioOrigen').invalid && forma.get('numeroDomicilioOrigen').touched;
  }

  coloniaDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('coloniaDomicilioOrigen').invalid && forma.get('coloniaDomicilioOrigen').touched;
  }

  cpDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('cpDomicilioOrigen').invalid && forma.get('cpDomicilioOrigen').touched;
  }

  localidadDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('localidadDomicilioOrigen').invalid && forma.get('localidadDomicilioOrigen').touched;
  }

  ciudadDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('ciudadDomicilioOrigen').invalid && forma.get('ciudadDomicilioOrigen').touched;
  }

  estadoDomicilioOrigenNoValido(forma: FormGroup) {
    return forma.get('estadoDomicilioOrigen').invalid && forma.get('estadoDomicilioOrigen').touched;
  }

  nombreCNoValido(forma: FormGroup) {
    return forma.get('nombreC').invalid && forma.get('nombreC').touched;
  }

  primerApellidoCNoValido(forma: FormGroup) {
    return forma.get('primerApellidoC').invalid && forma.get('primerApellidoC').touched;
  }
  segundoApellidoCNoValido(forma: FormGroup) {
    return forma.get('segundoApellidoC').invalid && forma.get('segundoApellidoC').touched;
  }
  telefonoCelularCNoValido(forma: FormGroup) {
    return forma.get('telefonoCelularC').invalid && forma.get('telefonoCelularC').touched;
  }
  telefonoCasaCNoValido(forma: FormGroup) {
    return forma.get('telefonoCasaC').invalid && forma.get('telefonoCasaC').touched;
  }
  calleDomicilioCNoValido(forma: FormGroup) {
    return forma.get('calleDomicilioC').invalid && forma.get('calleDomicilioC').touched;
  }
  numeroDomicilioCNoValido(forma: FormGroup) {
    return forma.get('numeroDomicilioC').invalid && forma.get('numeroDomicilioC').touched;
  }
  coloniaDomicilioCNoValido(forma: FormGroup) {
    return forma.get('coloniaDomicilioC').invalid && forma.get('coloniaDomicilioC').touched;
  }
  cpDomicilioCNoValido(forma: FormGroup) {
    return forma.get('cpDomicilioC').invalid && forma.get('cpDomicilioC').touched;
  }
  localidadDomicilioCNoValido(forma: FormGroup) {
    return forma.get('localidadDomicilioC').invalid && forma.get('localidadDomicilioC').touched;
  }
  ciudadDomicilioCNoValido(forma: FormGroup) {
    return forma.get('ciudadDomicilioC').invalid && forma.get('ciudadDomicilioC').touched;
  }
  estadoDomicilioCNoValido(forma: FormGroup) {
    return forma.get('estadoDomicilioC').invalid && forma.get('estadoDomicilioC').touched;
  }

  lunesNoValido(forma: FormGroup) {
    return forma.get('lunes').invalid && forma.get('lunes').touched;
  }

  martesNoValido(forma: FormGroup) {
    return forma.get('martes').invalid && forma.get('martes').touched;
  }

  miercolesNoValido(forma: FormGroup) {
    return forma.get('miercoles').invalid && forma.get('miercoles').touched;
  }

  juevesNoValido(forma: FormGroup) {
    return forma.get('jueves').invalid && forma.get('jueves').touched;
  }

  viernesNoValido(forma: FormGroup) {
    return forma.get('viernes').invalid && forma.get('viernes').touched;
  }

  terminosYCondicionesNoValido(forma: FormGroup) {
    return forma.get('terminosYCondiciones').invalid && forma.get('terminosYCondiciones').touched;
  }

  titleNoValido(forma: FormGroup) {
    return forma.get('title').invalid && forma.get('title').touched;
  }

  startDateNoValido(forma: FormGroup) {
    return forma.get('start').invalid && forma.get('start').touched;
  }

  endDateNoValido(forma: FormGroup) {
    return forma.get('end').invalid && forma.get('end').touched;
  }

  classNameNoValido(forma: FormGroup) {
    return forma.get('className').invalid && forma.get('className').touched;
  }

  descriptionNoValido(forma: FormGroup) {
    return forma.get('description').invalid && forma.get('description').touched;
  }

  emailNoValido(forma: FormGroup) {
    return forma.get('email').invalid && forma.get('email').touched;
  }

  passwordNoValido(forma: FormGroup) {
    return forma.get('password').invalid && forma.get('password').touched;
  }

  password2NoValido(forma: FormGroup) {
    const pass1 = forma.get('password').value;
    const pass2 = forma.get('password2').value;

    return ( pass1 === pass2 ) ? false : true;
  }

  passwordsIguales( pass1Name: string, pass2Name: string ) {
    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }

}
