import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import { UserListComponent } from './user-list.component';
import { SharedModule } from 'src/app/service/shared.module';
import { HttpClientModule } from '@angular/common/http';


export const appRoutes: Routes = [
  { path: "", component: UserListComponent },
  { path: "user-list", component: UserListComponent },
];
@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,HttpClientModule,SharedModule, RouterModule.forChild(appRoutes)
  ],
  exports:[UserListComponent]
})
export class UserListModule { }
