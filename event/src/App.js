import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Form from './Pages/Form';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
