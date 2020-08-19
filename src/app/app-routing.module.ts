import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WorkingConditionsComponent } from './working-conditions/working-conditions.component';
import { SalarygroupsComponent } from './salarygroups/salarygroups.component';
import { CompanylaptopsComponent } from './companylaptops/companylaptops.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UsersComponent },
  { path: 'working-conditions', component: WorkingConditionsComponent },
  { path: 'salarygroups', component: SalarygroupsComponent },
  { path: 'companylaptops', component: CompanylaptopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
