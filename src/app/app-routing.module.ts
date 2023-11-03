import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomehpageComponent } from './home/homehpage/homehpage.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { TemplateComponent } from './admin/template/template.component';
import { RoominfoComponent } from './admin/roominfo/roominfo.component';
import { ManageTenantsComponent } from './admin/manage-tenants/manage-tenants.component';
import { RoomviewComponent } from './admin/roomview/roomview.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ChangepassComponent } from './admin/changepass/changepass.component';
import { UpgradeAccountComponent } from './admin/upgrade-account/upgrade-account.component';
import { ElectricityComponent } from './admin/electricity/electricity.component';
import { WaterComponent } from './admin/water/water.component';
import { BillComponent } from './admin/bill/bill.component';
import { AssetComponent } from './admin/asset/asset.component';
import { IncurredComponent } from './admin/incurred/incurred.component';
import { ManagementComponent } from './admin/management/management.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ExpenseComponent } from './admin/expense/expense.component';
import { ChartComponent } from './admin/chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomehpageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  
  { path: "", component: TemplateComponent,
  children: [
  { path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin', component: TemplateComponent},
  { path: 'roominfo', component: RoominfoComponent},
  { path: 'manage-tenants', component: ManageTenantsComponent},
  { path: 'roomview', component: RoomviewComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'changepass', component: ChangepassComponent},
  { path: 'upgrade', component: UpgradeAccountComponent},
  { path: 'electricity', component: ElectricityComponent},
  { path: 'water', component: WaterComponent},
  { path: 'bill', component: BillComponent},
  { path: 'asset', component: AssetComponent},
  { path: 'incurred', component: IncurredComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'expense', component: ExpenseComponent},
  { path: 'chart', component: ChartComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
