import { makeVar, useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from './apollo';
import { Navigate, Route, Routes } from 'react-router-dom';
import PhoneLogin from './Routes/PhoneLogin/PhoneLogin';
import VerifyPhone from './Routes/VerifyPhone/VerifyPhone';
import SocialLogin from './Routes/SocialLogin/SocialLogin';
import Home from './Routes/Home/Home';
import Ride from './Routes/Ride/Ride';
import EditAccount from './Routes/EditAccount/EditAccount';
import Settings from './Routes/Settings/Settings';
import Places from './Routes/Places/Places';
import AddPlace from './Routes/AddPlace/AddPlace';
import FindAddress from './Routes/FindAddress/FindAddress';
import Login from './Routes/Login/Login';

const App = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar)
    const token = useReactiveVar(makeVar(localStorage.getItem('token'))) 
    console.log(token)
    return  <div>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</div> 
};
const LoggedOutRoutes = () =>{
    return (
        <Routes>
            <Route path="/"  element={<Login/>}/>
            <Route path='/phone-login' element={<PhoneLogin/>} />
            <Route path='/verify-phone' element={<VerifyPhone/>}/>
            <Route path='/social-login' element={<SocialLogin/>}/>
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
   
}

const LoggedInRoutes = () =>{
    return (
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path='/ride' element={<Ride/>} />
            <Route path='/edit-account' element={<EditAccount/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/places' element={<Places/>}/>
            <Route path='/add-place' element={<AddPlace/>}/>
            <Route path='/find-address' element={<FindAddress/>}/>
            <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    )
    
}
export default App;