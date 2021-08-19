import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AllItemsComponent } from './all-items/all-items.component';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { RareItemsComponent } from './rare-items/rare-items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import { FormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { EpicItemsComponent } from './epic-items/epic-items.component';
import { LegendaryItemsComponent } from './legendary-items/legendary-items.component';
import { TimestampToDatePipe } from './timestamp-to-date.pipe';

@NgModule( {
    declarations: [
        AppComponent,
        AllItemsComponent,
        ItemGridComponent,
        RareItemsComponent,
        NavBarComponent,
        LoadingMaskComponent,
        ItemDetailsComponent,
        EpicItemsComponent,
        LegendaryItemsComponent,
        TimestampToDatePipe
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        NoopAnimationsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule { }
