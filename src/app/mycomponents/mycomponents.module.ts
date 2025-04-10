import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundsComponent } from './funds/funds.component';
import { LoansComponent } from './loans/loans.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BranchesComponent } from './branches/branches.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    FundsComponent,
    LoansComponent,
    TransactionsComponent,
    BranchesComponent,
    ComplaintsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    SidebarComponent // This line is crucial!
  ]
})
export class MycomponentsModule { }
