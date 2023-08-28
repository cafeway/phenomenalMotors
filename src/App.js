import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Form from './form';
import Dashboard from './dashboard';
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
      sx={{ bgcolor: 'white',height:'100vh',flexGrow:1}}
      noValidate
      autoComplete="off"
      color='#eff0f5'
    >
    
      {/* <App_Bar/> */}
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>} ></Route>
          <Route exact path='/register' element={<Form/>}></Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
