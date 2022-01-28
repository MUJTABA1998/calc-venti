import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './comps/Header';
import Home from './comps/Home';
import Login from './comps/Login';
import Registration from './comps/Registration';
import Footer from './comps/Footer';
import Dashboard from './comps/Dashboard';



function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/login" element={<Login />}/>
        <Route path="/app/register" element={<Registration />}/>
        <Route path="/app/user/dashboard" element={<Dashboard />}/>
      </Routes>
      <Footer />
   </>
  );
}

export default App;
