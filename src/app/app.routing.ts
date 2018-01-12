import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: NavigationComponent,
        data: {
            title: 'Home'
        }
        ,
        children: [
            {
                path: 'select',
                component: FeatureSelectorComponent,
                data: {
                    title: 'Select Features'
                  },
                loadChildren: './components/component.module#ComponentModule'
            },
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }