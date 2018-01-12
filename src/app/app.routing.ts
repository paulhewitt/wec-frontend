import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NavigationComponent } from './layouts/navigation/navigation.component'

// import {} from ''

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: NavigationComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'login',
                loadChildren: '',
            },
            {
                path: 'addComponent',
                loadChildren: '',
            },
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }