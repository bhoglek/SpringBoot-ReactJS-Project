import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { generatePath, Link, withRouter } from 'react-router-dom'

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    editEmployee(id) {
        this.props.history.push(generatePath("update-employee/:id", {id}));
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                    <Link to="/add-employee">
                        <button className='btn btn-primary'>Add Employee</button>
                    </Link>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button className='btn btn-info' onClick={this.editEmployee(employee.id)}>Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListEmployeesComponent);