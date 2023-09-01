import './App.css';
import ToolBar from './components/toolBar';
import { CounterProvider } from './context/counter';
import { PaymentProvider } from './context/payment';
import CounterPage from './pages/counterPage';
import NewPaymentPage from './pages/newPaymentPage'
import HomePage from './pages/homePage';

import { Routes, Route } from "react-router-dom";
import ReqPage from './pages/reqPage';
import MusicPage from './pages/musicPage';
import FormWallet from './components/formWallet';

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
            <Route path='/musicpage' element={<MusicPage/>} />
          </Routes>
        </PaymentProvider>
      </CounterProvider>
  );
}
export default App;