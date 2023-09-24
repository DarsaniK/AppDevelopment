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

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <DarkModeProvider>
      <LightProvider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/hom" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather" element={<Weather />}/>
        <Route path="/weatherhome" element={<Home />}/>
        <Route path='/timer' element={<TimerPage/>}/>
        <Route path='/timerhome' element={<Home />}/>
        <Route path='/logout' element={<Signin/>}/>
        <Route path='/about' element={<AboutUS/>}/>
        <Route path='/privacy' element={<Privacypolicy/>}/>
        <Route path='/terms' element={<TermsPage/>}/>
        <Route path='/adprivacy' element={<Privacy/>}/>
        <Route path='/adterms' element={<Terms/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/faq' element={<FAQAccordion/>}/>
        <Route path='/admindash' element={<Admindash/>}/>
        <Route path='/scan' element={<ScanPage/>}/>
        <Route path='/history' element={<UserDetails />}/>
      </Routes>
      </LightProvider>
      </DarkModeProvider>
    </Router>
  </Provider>
  );
};

export default App;

/*import React from 'react';
import ScanPage from './Pages/Scanpage';
const App = () => {
  return (
    <ScanPage />
    );
  };
  export default App;*/