import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormComponent } from './manage-user-form-update/manage-user-form-update.component';
import { ManageUserFormComponent } from './manage-user-form/manage-user-form.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [
  {
    path: '', component: ManageUserComponent
  },
  {
    path: 'manage-user', component: ManageUserFormComponent
  },
  {
    path: 'manage-user/:id', component: ManageUserFormComponent
  },
  // {
  //   path: 'manage-user/:id', component: UpdateFormComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
