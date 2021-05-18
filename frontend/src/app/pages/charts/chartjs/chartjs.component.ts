/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component } from '@angular/core';

interface Tanks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ngx-chartjs',
  styleUrls: ['./chartjs.component.scss'],
  templateUrl: './chartjs.component.html',
})
export class ChartjsComponent {
  tank: Tanks[] = [
    {value: 'tank-0', viewValue: 'Tank ID - 1'},
    {value: 'tank-1', viewValue: 'Tank ID - 2'},
    {value: 'tank-2', viewValue: 'Tank ID - 3'},
    {value: 'tank-3', viewValue: 'Tank ID - 4'},
    {value: 'tank-4', viewValue: 'Tank ID - 5'}
  ];
}
