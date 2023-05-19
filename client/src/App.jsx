import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login/Login';
import SignupUsuario from './Pages/SignupUsuario/SignupUsuario';
import SignupVendedor from './Pages/SignupVendedor/SignupVendedor';
import CategoryCourses from './Pages/CategoryCourses';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Pages/Profile/Profile';
import LandingSeller from './Pages/LandingSeller/LandingSeller';
import DetailCourse from './Components/DetailCourse.jsx/DetailCourse';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import MyCourses from './Pages/MyCourses/MyCourses';
import Notifications from './Pages/Notifications/Notifications';
import Cart from './Pages/Cart/Cart';
import Support from './Pages/Support/Support';
import Footer from './Components/Footer/Footer';
import Terms from './Pages/Terms/Terms';
import PostArticle from './Pages/PostArticle/PostArticle';
import PostCourse from './Pages/PostCourse/PostCourse';
import { Carrito } from './Components/Carrito/Carrito';
import SerchCardResults from './Pages/serchCardResults/serchCardResults';
import Purchaseconfirmation from './Pages/purchaseconfirmation/purchaseconfirmation';
import Purchaserejection from './Pages/purchaserejection/purchaserejection';

function App() {
return (
    <> 
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignupUsuario" element={<SignupUsuario/>} />
          <Route path="/SignupVendedor" element={<SignupVendedor/>} />
          <Route path="/DetailCourse/:id" element={<DetailCourse/>} />
          <Route path="/CategoryCourses" element={<CategoryCourses/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/LandingSeller" element={<LandingSeller/>}/>
          <Route path="/ResetPassword" element={<ResetPassword/>}/>
          <Route path="/MyCourses" element={<MyCourses/>}/>
          <Route path="/Notifications" element={<Notifications/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>  
          <Route path="/Support" element={<Support/>}/> 
          <Route path="/Terms" element={<Terms/>}/>   
          <Route path="/PostArticle" element={<PostArticle/>}/> 
          <Route path="/PostCourse" element={<PostCourse/>}/> 
          <Route path="/SerchCardResults" element={<SerchCardResults/>}/> 
          <Route path="/Purchaseconfirmation" element={<Purchaseconfirmation/>}/> 
          <Route path="/Purchaserejection" element={<Purchaserejection/>}/> 
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
