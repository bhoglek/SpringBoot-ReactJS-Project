import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
      <Router>
          <div>
            <HeaderComponent />
              <div className="container">
                <Routes>
                  <Route path='/' caseSensitive={false} element={<ListEmployeesComponent />}></Route>
                  <Route path='/employees' caseSensitive={false} element={<ListEmployeesComponent />}></Route>
                  <Route path='/add-employee' caseSensitive={false} element={<CreateEmployeeComponent />}></Route>
                </Routes>
              </div>
            <FooterComponent />
          </div>
      </Router>
  );
}

export default App;
