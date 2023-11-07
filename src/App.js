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

function App() {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{ bgcolor: '#F7F7F7',height:'100%',flexGrow:1}}
      noValidate
      autoComplete="off"
      color='#eff0f5'
    >
 
     
      
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>} ></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/dashboard' element={<Dash/>}></Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
