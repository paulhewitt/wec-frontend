import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';

// import {} from ''

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: FeatureSelectorComponent,
        data: {
            title: 'Home'
        }
        // ,
        // children: [
        //     {
        //         path: 'login',
        //         loadChildren: '',
        //     },
        //     {
        //         path: 'addComponent',
        //         loadChildren: '',
        //     },
        // ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }