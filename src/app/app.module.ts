import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { WorkingConditionsComponent } from './working-conditions/working-conditions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserCardComponent } from './users/user-card/user-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { UserListComponent } from './users/user-card/user-list/user-list.component';
import { NewUserCardComponent } from './users/new-user-card/new-user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './users/user-card/details/details.component';
import { UserdetailCompanylaptopCardComponent } from './users/user-card/details/userdetail-companylaptop-card/userdetail-companylaptop-card.component';
import { UserdetailSalarygroupCardComponent } from './users/user-card/details/userdetail-salarygroup-card/userdetail-salarygroup-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { WorkingconditionsCardComponent } from './working-conditions/workingconditions-card/workingconditions-card.component';
import { CompanylaptopCardComponent } from './working-conditions/companylaptop-card/companylaptop-card.component';
import { SalarygroupCardComponent } from './working-conditions/salarygroup-card/salarygroup-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WorkingConditionsComponent,
    UserCardComponent,
    UserListComponent,
    NewUserCardComponent,
    DetailsComponent,
    UserdetailCompanylaptopCardComponent,
    UserdetailSalarygroupCardComponent,
    WorkingconditionsCardComponent,
    CompanylaptopCardComponent,
    SalarygroupCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }