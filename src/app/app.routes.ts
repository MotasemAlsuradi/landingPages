import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { ProfilesComponent } from './Components/Profile/profiles/profiles.component';
import { VacationComponent } from './Components/Vacation/vacation/vacation.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profiles', component: ProfilesComponent},
  {path: 'vacation', component: VacationComponent}
];
