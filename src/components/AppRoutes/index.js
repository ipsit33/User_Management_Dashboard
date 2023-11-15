import { Route,  Routes } from 'react-router-dom';
import UserDetails from '../../Pages/UserDetails';
import AccountCreation from '../../Pages/AccountCreation';
import DashBoard from '../../Pages/Dashboard';
function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<DashBoard />}></Route>
            <Route path='/details' element={<UserDetails />}></Route>
            <Route path='/create' element={<AccountCreation/>}></Route>
        </Routes>
    );
}
export default AppRoutes;