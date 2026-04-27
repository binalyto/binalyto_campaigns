import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ERP from './pages/erp';
import Edtech from './pages/edtech';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/erp" element={<ERP />} />
        <Route path="/edtech" element={<Edtech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
