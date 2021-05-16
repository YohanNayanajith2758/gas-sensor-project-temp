/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { GaugeModule } from 'angular-gauge';

@Component({
  selector: 'ngx-echarts-radar',
  styleUrls: ['./echarts.component.scss'],
  // <div echarts [options]="options" class="echart"></div>
  template: `
    

    <mwl-gauge
    [max]="100"
    [dialStartAngle]="180"
    [dialEndAngle]="180"
    [value]="50"
    [animated]="true"
    [animationDuration]="1"
    >
    </mwl-gauge>
  `,

})
export class EchartsRadarComponent implements AfterViewInit, OnDestroy {
  options: any = {}; //any type object
  themeSubscription: any; //any type varible
  colorScheme: any; //Intregated

  constructor(private theme: NbThemeService) {
    //Intregated
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.warning],
        tooltip: {},
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Techology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: 'Budget vs Spending',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Allocated Budget',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Actual Spending',
              },
            ],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
