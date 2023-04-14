import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName : '',
            lastName : '',
            email : ''
        }
    }

    changeFieldsHandler = (e) => {
        var fieldName = e.target.name;
        
        if(fieldName == 'fName') {
            this.setState({firstName : e.target.value});
        } else if (fieldName == 'lName') {
            this.setState({lastName : e.target.value});
        } else if(fieldName == 'email') {
            this.setState({email : e.target.value});
        }
    }

    saveEmployeeHandler = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log("onClick = " + JSON.stringify(employee));

        EmployeeService.createEmployees(employee).then(res => {
            alert("Employee " + this.state.firstName + " added successfully");
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Add Employee</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <input placeholder='First Name' name='fName' className='form-control' 
                                        value={this.state.firstName} onChange={this.changeFieldsHandler} />
                                </div>
                                <div className='form-group'>
                                    <input placeholder='Last Name' name='lName' className='form-control' 
                                        value={this.state.lastName} onChange={this.changeFieldsHandler} />
                                </div>
                                <div className='form-group'>
                                    <input placeholder='Email' type='email' name='email' className='form-control' 
                                        value={this.state.email} onChange={this.changeFieldsHandler} />
                                </div>

                                <div style = {{padding:10}}>
                                    <button className='btn btn-outline-success' style = {{margin:5}} onClick={this.saveEmployeeHandler}>Save</button>
                                    <button className='btn btn-outline-danger' style = {{margin:5}} onClick={this.cancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;