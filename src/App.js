import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
   </Routes>
   </>
  );
}

export default App;
