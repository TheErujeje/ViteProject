// import './App.css';
import Loginpage from './pages/Loginpage';
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import { Link, Route, Routes } from 'react-router-dom';
import Complete from './pages/Complete';


function App() {
  return (<>
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/Login" element={<Loginpage />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Complete" element={<Complete />} />
   </Routes>
  </>
  );
}

export default App;
