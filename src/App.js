import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Form from './form';
import Dashboard from './dashboard';
import Login from './components/login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function App() {
  return (
    <Box
      component="form"
      sx={{ bgcolor: '#eff0f5',height:'100%',flexGrow:1}}
      noValidate
      autoComplete="off"
      color='#eff0f5'
    >
      <Router>
        {/* <ul>
          <li style={{color:'black'}}>
            <Link  to='/login'>Login </Link>
          </li>

        </ul> */}
        <Routes>
          <Route exact path='/login' element={<Login/>} ></Route>
          <Route exact path='/signUp' element={<Form/>}></Route>
        </Routes>
      </Router>
      <Dashboard/>
    </Box>
  );
}

export default App;
