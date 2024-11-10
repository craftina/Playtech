import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
