import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/";

class EmployeeSevice {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + "employees");
    }

    createEmployees(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "employees", employee);
    }
}

export default new EmployeeSevice()