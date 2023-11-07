import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Register from './components/register';
import Dash from './components/dash';
import Login from './components/login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import App_Bar from './components/appbar';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import AboutUs from './components/aboutUs';
function App() {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    
   
 
     
      
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>} ></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/' element={<Dash/>}></Route>
          <Route exact path='/about' element={<AboutUs/>}></Route>
        </Routes>
      </Router>
   
  );
}

export default App;
