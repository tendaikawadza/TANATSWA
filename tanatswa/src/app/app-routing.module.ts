import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OnLineAppointmentComponent } from './pages/on-line-appointment/on-line-appointment.component';
import { InpersonAppointmentComponent } from './pages/inperson-appointment/inperson-appointment.component';
import { SelfImprovementComponent } from './pages/self-improvement/self-improvement.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'category', component:SingleCategoryComponent},
{path: 'about',component :AboutUsComponent},
{path:'contact',component:ContactUsComponent},
{path:'onLineappointment',component:OnLineAppointmentComponent},
{path:'InpersonAppointment',component:InpersonAppointmentComponent},
{path:'SelfImprovement',component:SelfImprovementComponent}










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
