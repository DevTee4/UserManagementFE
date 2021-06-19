import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'user-list',
        loadChildren: () =>
        import("../app/views/user-list/user-list.module").then((m) => m.UserListModule),
      },
      {
    path: "user-new",
    loadChildren: () =>
    import("../app/views/user-new/user-new.module").then((m) => m.UserNewModule),
    },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  }
    ];

  // {
  //   path: 'user-new',
  //   component:UserNewComponent
  // },
  // {
  //   path: 'user-list',
  //   component:UserListComponent
  // },
  // {
  //   path: "user-list",
  //   loadChildren: () =>
  //     import("../app/views/user-list/user-list.module").then((m) => m.UserListModule),
  // },
  // {
  //   path: "user-new",
  //   loadChildren: () =>
  //   import("../app/views/user-new/user-new.module").then((m) => m.UserNewModule),
  // },
  // {
  //   path: "users",
  //   loadChildren: () =>
  //   import("../app/views/users/users.module").then((m) => m.UsersModule),
  // },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
