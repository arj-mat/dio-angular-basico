import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllItemsComponent } from './all-items/all-items.component';
import { EpicItemsComponent } from './epic-items/epic-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LegendaryItemsComponent } from './legendary-items/legendary-items.component';
import { RareItemsComponent } from './rare-items/rare-items.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: AllItemsComponent
    },
    {
        path: 'rares',
        component: RareItemsComponent
    },
    {
        path: 'epics',
        component: EpicItemsComponent
    },
    {
        path: 'legendaries',
        component: LegendaryItemsComponent
    },
    {
        path: 'details/:id',
        component: ItemDetailsComponent
    }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule { }
