import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { OutdoorSportsComponent } from './outdoor-sports/outdoor-sports.component';
import { IndoorSportsComponent } from './indoor-sports/indoor-sports.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'home',component:ContentComponent},
  {path:'about',component:AboutComponent},
  {path:'outdoor',component:OutdoorSportsComponent},
  {path:'indoor',component:IndoorSportsComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
