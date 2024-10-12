import { Injectable } from '@angular/core';
import { IHistory } from '../Interfaces/ihistory';

@Injectable({
  providedIn: 'root'
})
export class HistoryDataService {
  private historyData: IHistory[] = [
    {
      title: 'Annual Vacation',
      durationDate: '2/3/2023 - 10/3/2023',
      durationDays: '8 days',
      approved: 'Hazem Azmi'
    },
    {
      title: 'Sick Vacation',
      durationDate: '15/5/2023 - 20/5/2023',
      durationDays: '5 days',
      approved: 'Hazem Azmi'
    },
    {
      title: 'Non Paid Vacation',
      durationDate: '1/7/2023 - 15/7/2023',
      durationDays: '14 days',
      approved: 'Hazem Azmi'
    },
    {
      title: 'Annual Vacation',
      durationDate: '10/8/2023 - 20/8/2023',
      durationDays: '10 days',
      approved: 'Hazem Azmi'
    },
    {
      title: 'Sick Vacation',
      durationDate: '22/9/2023 - 25/9/2023',
      durationDays: '3 days',
      approved: 'Hazem Azmi'
    },
    {
      title: 'Non Paid Vacation',
      durationDate: '5/2/2023 - 15/2/2023',
      durationDays: '10 days',
      approved: 'Hazem Azmi'
    },
    {
      title: 'Sick Vacation',
      durationDate: '25/1/2023 - 30/1/2023',
      durationDays: '5 days',
      approved: 'Hazem Azmi'
    },
  ];

  getAllHistoryData(): IHistory[] {
    return this.historyData;
  }
}
