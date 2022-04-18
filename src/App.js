import { Routes, Route } from 'react-router-dom';
import { RoutesTypes } from "./Types/Routes";
import Login from './components/Login/Login';
import Home from './components/Home/Home';

export default function App() {
  return (
    <>
    <Routes>
      <Route path={RoutesTypes.ROUTES.LOGIN} element={<Login />} />
      <Route path={RoutesTypes.ROUTES.HOME} element={<Home />} />
    </Routes>
    </>
  );
}
