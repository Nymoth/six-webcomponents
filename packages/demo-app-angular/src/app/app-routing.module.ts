import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksGuard } from './core/tasks/providers/tasks.guard';
import { InputTestComponent } from '~/app/input-test/input-test.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [],
    canActivate: [TasksGuard],
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canLoad: [],
    canActivate: [TasksGuard],
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then((m) => m.ReactiveFormModule),
  },
  {
    path: 'input-test',
    component: InputTestComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      onSameUrlNavigation: 'reload',
    }),
  ],
})
export class AppRoutingModule {}
