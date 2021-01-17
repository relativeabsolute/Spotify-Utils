import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/user-handle-form', pathMatch: 'full' },
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
