import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarH from './Components/BarNav';
import HomeView from './Views/HomeView';
import CompleteView from './Views/CompleteView';

function App() {
  return (
    <>
    <Router>
      <NavbarH />
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path='/complete' element={<CompleteView/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App
