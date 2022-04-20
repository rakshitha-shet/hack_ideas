import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useState } from 'react';
export const EmpIdContext = React.createContext();

export default function App() {
  const [empId, setEmpId] = useState();
  
  return (empId ? 
    <EmpIdContext.Provider value={empId}>
        <Home setEmpId={setEmpId}/>
    </EmpIdContext.Provider>
    :  <Login setEmpId={setEmpId}/>);
}
