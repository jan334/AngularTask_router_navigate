import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendlogComponent } from './backendlog/backendlog.component';
import { ComplainComponent } from './complain/complain.component';
import { FeatureComponent } from './feature/feature.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';

const routes: Routes = [
  {path:'', component:MaincomponentComponent},
  {path: 'complain', component: ComplainComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'backenlog', component: BackendlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
