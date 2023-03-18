import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favlist from './components/Favlist';


function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Favlist' element={<Favlist/>}></Route>
   </Routes>
   </>
  );
}

export default App;
