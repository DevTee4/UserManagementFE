import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { DataHolderService } from 'src/app/service/data-holder.service';
import { WebRequestService } from '../../service/web-request.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent {
  user: User;
  registerForm: FormGroup;
  disabled: boolean = false;
  createOrUpdateBtn: string;
  constructor(
    private req: WebRequestService,
    private dataHolder: DataHolderService) {
      this.dataHolder.selectedUser.pipe(take(1)).subscribe((res) => {
        if (res){
          this.user = res;
          this.createOrUpdateBtn = "Update";
        }
        else{
          this.user = new User();
          this.createOrUpdateBtn = "Save";
        }
      });
      this.registerForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        phoneNumber: new FormControl("", Validators.required),
        gender: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required),
        nationality: new FormControl('', Validators.required)
      });
      
    }

  ngOnInit(): void {
  }
  get f() { 
    return this.registerForm.controls;
   }
 
  createUser(){
    if (!this.user._id) {
      this.req.post("User/create",[this.user]).subscribe((res) => {
        this.user = res as User;
        history.go(-1);
        alert("User created successfully");
      }, (err) => {
        console.log(err)
      });
    } else {
      this.req.put(`User/${this.user._id}`,this.user).subscribe((res) => {
        this.user = res as User;
        history.go(-1);
        alert("User Updated successfully");
      }, (err) => {
        console.log(err)
      });
    }
    
  }
  closeButton(){
    window.history.go(-1);
  }

}
