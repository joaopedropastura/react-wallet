import './App.css';
import ToolBar from './components/toolBar';
import { CounterProvider } from './context/counter';
import { PaymentProvider } from './context/payment';
import CounterPage from './pages/counterPage';
import NewPaymentPage from './pages/newPaymentPage'
import HomePage from './pages/homePage';

import { Routes, Route, Router } from "react-router-dom";
import ReqPage from './pages/reqPage';
import MusicPage from './pages/musicPage';
import FormWallet from './components/formWallet';
import Countries from './pages/countriesPage';
import Login from './pages/loginPage'
import RegisterPage from './pages/userRegisterPage';


function App() {
  return (
      <CounterProvider>
        <PaymentProvider>
          <ToolBar/>
          <Routes>
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/new-wallet' element={<NewPaymentPage/>} />
            <Route path='/list-bill' element={<HomePage/>} />
            <Route path='/req' element={<ReqPage/>} />
            <Route path='/music-page' element={<MusicPage/>} />
            <Route path='/countries' element={<Countries/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<RegisterPage/>} />
          </Routes>
        </PaymentProvider>
      </CounterProvider>
  );
}
export default App;