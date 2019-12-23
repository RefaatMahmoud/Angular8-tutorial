import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    constructor() { }

    public employees = [];

    public getEmployees() {
        this.employees = [
            { id: 1, name: "Refaat" },
            { id: 2, name: "Ahmed" },
            { id: 3, name: "Sayed" }
        ];
        return this.employees;
    }
}
