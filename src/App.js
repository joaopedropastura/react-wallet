import './App.css';
import Test from './components/teste';
import ToolBar from './components/toolBar';
import { CounterProvider } from './context/counter';
import { PaymentProvider } from './context/payment';
import CounterPage from './pages/counterPage';
import NewPaymentPage from './pages/newPaymentPage'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <CounterProvider>
        <PaymentProvider>
          <ToolBar/>
          <Routes>
            <Route path='/teste'  element={<Test/>}/>
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/new-wallet' element={<NewPaymentPage/>} />
          </Routes>
        </PaymentProvider>
      </CounterProvider>
  );
}
export default App;