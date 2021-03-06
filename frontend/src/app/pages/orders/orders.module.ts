/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { AuthModule } from '../../@auth/auth.module';

// components
import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order/order.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { ComponentsModule } from '../../@components/components.module';
// resolvers
import { OrderFormResolver } from './order/order.resolver';

// components

// modules
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
} from '@nebular/theme';

const  NB_MODULES = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbInputModule,
];

@NgModule({
  imports: [
    ThemeModule,
    AuthModule,
    Ng2SmartTableModule,
    OrdersRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ...NB_MODULES,
  ],
  declarations: [
    OrdersComponent,
    OrdersTableComponent,
    OrderComponent,
  ],
  entryComponents: [
  ],
  providers: [
    OrderFormResolver,
  ],
})
export class OrdersModule { }
