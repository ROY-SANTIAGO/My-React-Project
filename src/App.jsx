import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Explore from './Components/Explore';
import Signup from './Components/Signup';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Explore/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
