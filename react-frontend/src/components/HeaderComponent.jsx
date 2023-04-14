import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className='class'><a href='/' className='navbar-brand'>Employee Management App</a></div>
                        <div className='class'><a href='/' className='nav-link'>Add Employee</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;