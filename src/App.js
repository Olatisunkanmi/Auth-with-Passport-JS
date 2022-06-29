// import './App.css';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar, Home} from './Components/';

function App() {
  const user = false;
  return (
    <BrowserRouter>
    <div className='bg-red-100 h-screen'>
          <Navbar />
              <Routes>
                      <Route path='/'  element={   <Home /> }/>
                      <Route 
                      path='/login'  
                      element={   <Login /> }/>
              </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App; 
