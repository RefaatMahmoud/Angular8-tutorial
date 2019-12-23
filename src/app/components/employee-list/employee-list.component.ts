import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent {

    public employees = [];

    constructor(public employeeService: EmployeeService) {
        this.employees = this.employeeService.getEmployees();
    }

}
