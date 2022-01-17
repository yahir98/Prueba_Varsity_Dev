import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(  private formBuilder: FormBuilder,
    private api: LoginService,
    private router: Router,
    private modalService: NgbModal) {

      this.form = formBuilder.group({
        usuario: ['', [Validators.required]],
        clave: ['', [Validators.required]],
      });

     }

  ngOnInit(): void {
  }

  onSubmit(content) {
    var RequestLogin = this.form.getRawValue();

    this.api
      .login(RequestLogin.usuario, RequestLogin.clave)
      .subscribe((response) => {
        
        if (response.exito) {
   
        
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['inicio']);
     

        }
        else{
        this.modalService.open(content, { centered: true });
        }
  
      });
  }

}
