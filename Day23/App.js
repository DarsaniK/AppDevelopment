import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Pages/Signin';
import Weather from './Pages/Weather';
import Home from './Pages/Home';
import Login from './Pages/Login';
import TimerPage from './Pages/Timer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import rootReducer from './Pages/reducers/chartReducers';
import AboutUS from './Pages/Aboutus';
import Privacypolicy from './Pages/PrivacyPolicy';
import TermsPage from './Pages/Terms';
import { DarkModeProvider } from './Pages/context/DarkModeContext';
import Dashboard from './Pages/Dashboard';
import { LightProvider } from './Pages/context';
import ContactUs from './Pages/Contactus';
import Admindash from './Pages/Admindash';
import FAQAccordion from './Pages/FAQ';
import ScanPage from './Pages/Scanpage';
import UserDetails from './Pages/UserDetails';
import Privacy from './Pages/Adminprivacy';
import Terms from './Pages/Adminterms';
import Forget from './Pages/Forget';
import AddUser from './Pages/AddUser';
import UpdateUser from './Pages/UpdateUser';
import GetUser from './Pages/getuser';
import GardenDetails from './Pages/Gardendetails';
import Machinery from './Pages/Machinery';
import Pest from './Pages/Pest';
import Plant from './Pages/Plant';
import UserPlant from './Pages/UserPlant';
import PestUser from './Pages/PestUser';
import DeleteUser from './Pages/DeleteUser';
import WateringControl from './Pages/Scanpage';
import ReviewApp from './Pages/Review';
import ReviewAdmin from './Pages/ReviewAdmin';
import UserDetailsPage from './Pages/UserDetailsPage';
import { CustomerAuth } from './Pages/Customerauth';
import { AdminAuth } from './Pages/Adminauth';
import AdminHome from './Pages/Adminhome';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <DarkModeProvider>
      <LightProvider>
        <>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/hom" element={<Home />} />
        <Route exact path='/admin' element={<Login/>}/>
        <Route exact path='/adminhome' element={<AdminHome />}/>
        <Route element={<CustomerAuth />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/weather" element={<Weather />}/>
        <Route exact path="/weatherhome" element={<Home />}/>
        <Route exact path='/timer' element={<TimerPage/>}/>
        <Route exact path='/timerhome' element={<Home />}/>
        <Route exact path='/logout' element={<Signin/>}/>
        <Route exact path='/about' element={<AboutUS/>}/>
        <Route exact path='/privacy' element={<Privacypolicy/>}/>
        <Route exact path='/terms' element={<TermsPage/>}/>
        <Route exact path='/contact' element={<ContactUs/>}/>
        <Route exact path='/faq' element={<FAQAccordion/>}/>
        <Route exact path='/scan' element={<WateringControl/>}/>
        <Route exact path='/garden' element={<GardenDetails />}/>
        <Route exact path='/machine' element={<Machinery />}/>
        <Route exact path='/uplant' element={<UserPlant />}/>
        <Route exact path='/upest' element={<PestUser />}/>
        <Route exact path='/review' element={<ReviewApp />}/>
        </Route>
        <Route element={<AdminAuth />}>
        <Route exact path='/admindash' element={<Admindash/>}/>
        <Route exact path='/adprivacy' element={<Privacy/>}/>
        <Route exact path='/adterms' element={<Terms/>}/>
        <Route exact path='/history' element={<UserDetails />}/>
        <Route exact path='/Get' element={<GetUser />}/>
        <Route exact path='/Add' element={<AddUser />}/>
        <Route exact path='/update/:id' element={<UpdateUser />}/>
        <Route exact path='/pest' element={<Pest />}/>
        <Route exact path='/plant' element={<Plant />}/>
        <Route exact path='/Delete' element={<DeleteUser />}/>
        <Route exact path='/Areview' element={<ReviewAdmin />}/>
        <Route exact path='/messagedetails' element={<UserDetailsPage />}/>
        <Route exact path='/messagedetails' element={<UserDetailsPage />}/>
        </Route>
      </Routes>
      </>
      </LightProvider>
      </DarkModeProvider>
    </Router>
  </Provider>
  );
};

export default App;

/*import React from 'react';
import LoginForm from './Pages/NLogin';
const App = () => {
  return (
    <LoginForm />
    );
  };
  export default App;*/