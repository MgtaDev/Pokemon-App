import './App.css';
import { Routes, Route } from "react-router-dom";
import style from './App.css'
import {Landing, Home, CreateForm, Detail, About} from './Views/index'
import NavBar from './Views/Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';


function App() {

 const location = useLocation();


  return (
    <div className={style.App}>
    {/* Sticky NavBar */}
    {location.pathname !== "/" && <NavBar/>}

    <Routes>
    <Route  path="/" element={<Landing/>} />

    <Route  path="/home" element={<Home/>} />

    <Route  path="/form" element={<CreateForm onsubmit={onsubmit} />} />

    <Route  path="/details/:id" element={<Detail/>} />

    <Route  path="/about" element={<About/>} />

    </Routes>
    </div>
   
  );
}

export default App;
