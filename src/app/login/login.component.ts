import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericApiService } from '../shared/generic-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  overlayForm: FormGroup;
  user : User;
  

  constructor(private formBuilder: FormBuilder,
    private genericApiService: GenericApiService<any>) { }

  ngOnInit(): void {
    this.overlayForm = this.formBuilder.group({
      UserName: [''],
      Password: ['']      
    });
  }

  login():void{

    let credentials = '?UserName' + this.overlayForm.get('UserName').value +'&Password'+ this.overlayForm.get('Password').value;    
    this.genericApiService.getById('Auth/Login', credentials).subscribe(
      (res) => {
        if(res !=null){
          localStorage.setItem("jwt", res.token);    

        }

      }
    )

  }

}

export class User{
  UserName : string = '';
  Password : string = '';
}
