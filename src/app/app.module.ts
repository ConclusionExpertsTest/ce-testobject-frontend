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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { UserListComponent } from './users/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { WorkingconditionsCardComponent } from './working-conditions/workingconditions-card/workingconditions-card.component';
import { CompanylaptopCardComponent } from './working-conditions/companylaptop-card/companylaptop-card.component';
import { SalarygroupCardComponent } from './working-conditions/salarygroup-card/salarygroup-card.component';
import { CreateWorkingconditionsDialogComponent } from './working-conditions/create-workingconditions-dialog/create-workingconditions-dialog.component';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { DeleteDialogComponent } from './common/delete-dialog/delete-dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserDetailDialogComponent } from './users/user-detail-dialog/user-detail-dialog.component';
import { CompanylaptopListComponent } from './working-conditions/lists/companylaptop-list/companylaptop-list.component';
import { SalarygroupListComponent } from './working-conditions/lists/salarygroup-list/salarygroup-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WorkingConditionsComponent,
    UserListComponent,
    WorkingconditionsCardComponent,
    CompanylaptopCardComponent,
    SalarygroupCardComponent,
    CreateWorkingconditionsDialogComponent,
    UserDialogComponent,
    DeleteDialogComponent,
    UserDetailDialogComponent,
    CompanylaptopListComponent,
    SalarygroupListComponent,
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
        MatDialogModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateWorkingconditionsDialogComponent]
})
export class AppModule { }
