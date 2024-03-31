import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Form from './Pages/Form';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    toast.success("CTAE Coders Carousel welcomes you")
  })
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes>
    <Toaster/>
    </div>
  );
}

export default App;
