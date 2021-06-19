import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import { UserNewComponent } from './user-new.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
export const appRoutes: Routes = [
  { path: "", component: UserNewComponent },
  { path: "user-new", component: UserNewComponent },
];
@NgModule({
  declarations: [UserNewComponent],
  imports: [
  CommonModule, FormsModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule, MatTabsModule, ReactiveFormsModule, RouterModule.forChild(appRoutes)
  ],
  exports:[UserNewComponent]
})
export class UserNewModule { }
