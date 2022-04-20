import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useState } from 'react';

export default function App() {
  const [empId, setEmpId] = useState();
  return (empId ? <Home setEmpId={setEmpId} empId={empId}/> :  <Login setEmpId={setEmpId}/>);
}
