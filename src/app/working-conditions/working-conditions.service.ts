import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

export class WorkingCondition {
  id: number; 
  salaryGroup: string;
  companyCar: boolean;
  companyLaptop: string;
}

export class SalaryGroup {
  id: number; 
  salaryGroupCode: string;
  minAmount: number;
  maxAmount: number;
}

export class CompanyLaptop {
  id: number; 
  companyLaptopTypes: string;
  available: boolean;
  brandAndType: string;
  memory: string;
  diskspace: string;
  firstOperatingSystem: string;
  secondOperatingSystem: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkingConditionsService {

  BASE_URL = 'http://localhost:8083/api/workingconditions/';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*');
  httpOptions = {
    headers: this.headers
  };

  constructor(private httpclient: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getWorkingconditions(): Observable<WorkingCondition[]> {
    return this.httpclient.get<WorkingCondition[]>(this.BASE_URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
