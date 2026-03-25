import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthLoginInfo } from '../../interfaces/authlogininfo.interface';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formulario: FormGroup;
  private loginInfo: AuthLoginInfo;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private tokenStorage: TokenStorageService) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.formulario = this.fb.group({
      email: ['', Validators.required ],
      password : ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/)] ],
    })
  }

  login() {
    this.loginInfo = new AuthLoginInfo(
      this.formulario.value.email,
      this.formulario.value.password);
    console.log(this.loginInfo)

    this.auth.signIn(this.loginInfo)
      .subscribe(resp => {
        this.tokenStorage.saveToken(resp.accessToken);
        this.tokenStorage.saveEmail(resp.email);
        this.tokenStorage.saveAuthorities(resp.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role =>{
          if(role === 'ROLE_ADMINISTRADOR')
            this.router.navigateByUrl('/admin')
          else if (role === 'ROLE_PSICOLOGO')
            this.router.navigateByUrl('/psicologo')
          else
            this.router.navigateByUrl('/schedule')
        })
      },
      error => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: error.error,
        })
      })
  }
}
