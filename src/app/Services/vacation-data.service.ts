import { Injectable } from '@angular/core';
import { IVacation } from '../Interfaces/ivacation';

@Injectable({
  providedIn: 'root'
})
export class VacationDataService {
  private vacationData: IVacation[] = [
    {
        id: 1,
        imgSrc: "profile-1.jpg",
        name: "Motasem Ahmad",
        submittedOn: "1/3/2024",
        duration: "2 Weeks (1/4/2023 - 14/4/2023)",
        salary: "2500 AED"
    },
    {
        id: 2,
        imgSrc: "profile-2.jpg",
        name: "Sara Khaled",
        submittedOn: "10/1/2024",
        duration: "1 Month (11/1/2024 - 10/2/2024)",
        salary: "4000 AED"
    },
    {
        id: 3,
        imgSrc: "profile-3.jpg",
        name: "Omar Ali",
        submittedOn: "15/2/2024",
        duration: "3 Weeks (8/4/2023 - 27/4/2023)",
        salary: "3000 AED"
    },
    {
        id: 4,
        imgSrc: "profile-4.jpg",
        name: "Doha Hamed",
        submittedOn: "25/12/2023",
        duration: "1 Week (1/1/2024 - 7/1/2024)",
        salary: "1500 AED"
    },
    {
        id: 5,
        imgSrc: "profile-1.jpg",
        name: "Ahmed Ibrahim",
        submittedOn: "12/1/2024",
        duration: "2 Weeks (15/2/2024 - 29/2/2024)",
        salary: "2800 AED"
    },
    {
        id: 6,
        imgSrc: "profile-2.jpg",
        name: "Laila Mahmoud",
        submittedOn: "5/3/2024",
        duration: "3 Days (7/3/2024 - 9/3/2024)",
        salary: "1200 AED"
    },
    {
        id: 7,
        imgSrc: "profile-3.jpg",
        name: "Karim Nasser",
        submittedOn: "22/2/2024",
        duration: "1 Month (1/3/2024 - 31/3/2024)",
        salary: "5000 AED"
    },
    {
        id: 8,
        imgSrc: "profile-4.jpg",
        name: "Fatima Youssef",
        submittedOn: "8/2/2024",
        duration: "2 Weeks (10/3/2024 - 24/3/2024)",
        salary: "2600 AED"
    },
    {
        id: 9,
        imgSrc: "profile-1.jpg",
        name: "Hassan Ali",
        submittedOn: "3/2/2024",
        duration: "1 Week (4/3/2024 - 11/3/2024)",
        salary: "2200 AED"
    },
    {
        id: 10,
        imgSrc: "profile-2.jpg",
        name: "Nada Khalil",
        submittedOn: "10/2/2024",
        duration: "3 Weeks (15/3/2024 - 5/4/2024)",
        salary: "3000 AED"
    },
    {
        id: 11,
        imgSrc: "profile-3.jpg",
        name: "Rami Samir",
        submittedOn: "9/3/2024",
        duration: "2 Weeks (12/3/2024 - 26/3/2024)",
        salary: "3200 AED"
    },
    {
        id: 12,
        imgSrc: "profile-4.jpg",
        name: "Amira Mohamed",
        submittedOn: "22/1/2024",
        duration: "1 Week (23/2/2024 - 29/2/2024)",
        salary: "2100 AED"
    },
    {
        id: 13,
        imgSrc: "profile-1.jpg",
        name: "Ziad Tamer",
        submittedOn: "7/2/2024",
        duration: "1 Week (10/2/2024 - 17/2/2024)",
        salary: "2300 AED"
    },
    {
        id: 14,
        imgSrc: "profile-2.jpg",
        name: "Mona Ebrahim",
        submittedOn: "12/3/2024",
        duration: "3 Weeks (15/3/2024 - 5/4/2024)",
        salary: "3400 AED"
    },
    {
        id: 15,
        imgSrc: "profile-3.jpg",
        name: "Tariq Hassan",
        submittedOn: "22/1/2024",
        duration: "2 Days (25/1/2024 - 27/1/2024)",
        salary: "900 AED"
    },
    {
        id: 16,
        imgSrc: "profile-4.jpg",
        name: "Lina Salem",
        submittedOn: "15/2/2024",
        duration: "1 Week (20/2/2024 - 27/2/2024)",
        salary: "1800 AED"
    },
    {
        id: 17,
        imgSrc: "profile-1.jpg",
        name: "Faisal Hadi",
        submittedOn: "17/1/2024",
        duration: "1 Month (18/2/2024 - 18/3/2024)",
        salary: "4500 AED"
    },
    {
        id: 18,
        imgSrc: "profile-2.jpg",
        name: "Hiba Hasan",
        submittedOn: "25/2/2024",
        duration: "2 Weeks (1/3/2024 - 14/3/2024)",
        salary: "2800 AED"
    },
    {
        id: 19,
        imgSrc: "profile-3.jpg",
        name: "Mahmoud Fawzi",
        submittedOn: "4/3/2024",
        duration: "3 Days (5/3/2024 - 7/3/2024)",
        salary: "1000 AED"
    },
    {
        id: 20,
        imgSrc: "profile-4.jpg",
        name: "Jana Abdul",
        submittedOn: "6/2/2024",
        duration: "1 Month (1/3/2024 - 31/3/2024)",
        salary: "4200 AED"
    },
    {
        id: 21,
        imgSrc: "profile-1.jpg",
        name: "Yousef Al-Masri",
        submittedOn: "12/2/2024",
        duration: "2 Weeks (10/3/2024 - 24/3/2024)",
        salary: "2800 AED"
    },
    {
        id: 22,
        imgSrc: "profile-2.jpg",
        name: "Sama Younes",
        submittedOn: "22/3/2024",
        duration: "1 Week (24/3/2024 - 31/3/2024)",
        salary: "1700 AED"
    },
    {
        id: 23,
        imgSrc: "profile-3.jpg",
        name: "Khaled Ismail",
        submittedOn: "7/2/2024",
        duration: "1 Week (10/2/2024 - 17/2/2024)",
        salary: "2300 AED"
    },
    {
        id: 24,
        imgSrc: "profile-4.jpg",
        name: "Dina Abdallah",
        submittedOn: "1/3/2024",
        duration: "3 Weeks (3/4/2024 - 24/4/2024)",
        salary: "3100 AED"
    },
    {
        id: 25,
        imgSrc: "profile-1.jpg",
        name: "Bilal Yassin",
        submittedOn: "18/1/2024",
        duration: "1 Month (20/2/2024 - 20/3/2024)",
        salary: "4000 AED"
    },
    {
        id: 26,
        imgSrc: "profile-2.jpg",
        name: "Maha Amin",
        submittedOn: "28/2/2024",
        duration: "2 Weeks (1/4/2024 - 15/4/2024)",
        salary: "2600 AED"
    },
    {
        id: 27,
        imgSrc: "profile-3.jpg",
        name: "Mostafa Ismail",
        submittedOn: "7/2/2024",
        duration: "1 Week (10/2/2024 - 17/2/2024)",
        salary: "2300 AED"
    },
    {
        id: 28,
        imgSrc: "profile-4.jpg",
        name: "Sana Abdallah",
        submittedOn: "1/3/2024",
        duration: "3 Weeks (3/4/2024 - 24/4/2024)",
        salary: "3100 AED"
    },
  ];


  getAllVacData(): IVacation[] {
    return this.vacationData;
  }

  getThe_4TopVacData():IVacation[]{
    return this.vacationData.slice(0, 4);
  }

  getThe_2TopVacData():IVacation[]{
    return this.vacationData.slice(0, 2);
  }

}
