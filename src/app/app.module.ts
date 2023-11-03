import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { TemplateComponent } from './admin/template/template.component';
import { RoominfoComponent } from './admin/roominfo/roominfo.component';
import { ManageTenantsComponent } from './admin/manage-tenants/manage-tenants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomehpageComponent } from './home/homehpage/homehpage.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomehpageComponent,
    LoginComponent,
    SignupComponent,
    TemplateComponent,
    RoominfoComponent,
    ManageTenantsComponent,
    RoomviewComponent,
    ProfileComponent,
    ChangepassComponent,
    UpgradeAccountComponent,
    ElectricityComponent,
    WaterComponent,
    BillComponent,
    AssetComponent,
    IncurredComponent,
    ManagementComponent,
    SettingComponent,
    ExpenseComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
