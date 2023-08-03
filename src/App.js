import './App.css';
import Login from './components/Login';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
