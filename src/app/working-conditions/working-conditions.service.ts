import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkingConditionsService {

  BASE_URL = 'http://localhost:8083/api/workingconditions/';

  constructor(private httpclient: HttpClient) { }

  // Working conditions

  getWorkingconditions(): Observable<any> {
    return this.httpclient.get(this.BASE_URL);
  }

  getWorkingcondition(id): Observable<any> {
    return this.httpclient.get(`${this.BASE_URL}/${id}`);
  }

  createWorkingcondition(data): Observable<any> {
    return this.httpclient.post(this.BASE_URL, data);
  }

  updateWorkingcondition(id, data): Observable<any> {
    return this.httpclient.put(`${this.BASE_URL}/${id}`, data);
  }

  deleteWorkingcondition(id): Observable<any> {
    return this.httpclient.delete(`${this.BASE_URL}/${id}`);
  }

  // Salary groups

  getAllSalaryGroups(): Observable<any> {
    return this.httpclient.get(`${this.BASE_URL}/salarygroups/`);
  }

  getSalaryGroup(id): Observable<any> {
    return this.httpclient.get(`${this.BASE_URL}/salarygroups/${id}`);
  }

  updateSalaryGroup(id, data): Observable<any> {
    return this.httpclient.put(`${this.BASE_URL}/salarygroups/${id}`, data);
  }

  // Company laptops

  getAllCompanyLaptops(): Observable<any> {
    return this.httpclient.get(`${this.BASE_URL}/companylaptop/`);
  }

  getCompanyLaptop(id): Observable<any> {
    return this.httpclient.get(`${this.BASE_URL}/companylaptop/${id}`);
  }

  updateCompanyLaptop(id, data): Observable<any> {
    return this.httpclient.put(`${this.BASE_URL}/companylaptop/${id}`, data);
  }
}
