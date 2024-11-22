import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import Registration from './component/pages/Registration';
import Login from './component/pages/Login';
import Homepage from './component/pages/Homepage';
import Shoppage from './component/pages/Shoppage';
import Detailpage from './component/pages/Detailpage';
import Cartpage from './component/pages/Cartpage';
import Floater from './component/Floater';
import EditRegDetails from './component/pages/EditRegDetails';
import ChangePassword from './component/pages/ChangePassword';
import DeletePage from './component/pages/DeletePage';


function App() { 
  
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/registration/' element={<Registration/>}/>
            <Route path='/shoppage/:id' element={<Shoppage/>}/>
            <Route path='/login/' element={<Login />}/>
            <Route path='/detailpage/:id' element={<Detailpage/>}/>
            <Route path='/cartpage/' element={<Cartpage/>}/>            
            <Route path='/EditRegDetails/' element={<EditRegDetails/>}/>            
            <Route path='/ChangePassword/' element={<ChangePassword/>}/>            
            <Route path='/DeletePage/' element={<DeletePage/>}/>            
          </Routes> 
          <Floater/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
