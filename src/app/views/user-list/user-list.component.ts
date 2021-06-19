import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { DataHolderService } from 'src/app/service/data-holder.service';
import { WebRequestService } from 'src/app/service/web-request.service';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, take } from "rxjs/operators";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  hint="Search by Firstname,Lastname,Email,Phone"
  userCtrl = new FormControl();
  filteredlist$: Observable<any[]>;
  title = 'Usermanagement';
  data: User[]=[];
  constructor(private req:WebRequestService,
    private dataHolder: DataHolderService,
    private route: Router) {
    this.filteredlist$ = this.userCtrl.valueChanges
    .pipe(
      startWith(''),
      switchMap(  val=> {
        if (val?.length > 0) {
          this.hint = '';
        }
        return val && val.length>=1 ?this.getData(val):[];
      })
    );
  this.getAll()
    
  }
  getAll(){
    this.req.get("user").subscribe((res) => {
      (res as User[]).forEach(u=>{
        u.isChecked =false;
      })
      this.data = res;
    }, (err) => {
      console.log(err)
    });
  }
   delete(){
    if(this.data.filter(m=>m.isChecked).length>0){
     var arrToDelete= this.data.filter(m=>m.isChecked).map(m=>m._id);
     this.req.delete(`User/delete?id=${arrToDelete.toString()}`).subscribe((res) => {
     this.getAll()
     alert("User deleted successfully");
   }, (err) => {
     console.log(err)
   });
  }
   }
  getData(text:string) {
    var url=''
    if(text && text.trim().length>0){
      url ="User/Search/"+text;
    }
    return this.req.get(url).pipe(
      map(res=> {
        try{
        const first10 =res.splice(0,10);
        return first10;
        }
        catch(ex){
          
        }
      }));
  }
  createUser() {
    this.dataHolder.sendSelectedUser(null);
    this.route.navigate(['/user-new']);
  }
  userCLick(user: User) {
    this.dataHolder.sendSelectedUser(user);
    this.route.navigate(['/user-new']);
  }
  searchClick(user:User){
   console.log(user);
   this.data= [user]
  }

}
