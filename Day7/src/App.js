import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Pages/Signin';
import Weather from './Pages/Weather';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import TimerPage from './Pages/Timer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import rootReducer from './Pages/reducer';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/hom" element={<Home />}/>
        <Route path="/weate" element={<Weather />}/>
        <Route path="/dash" element={<Dashboard />}/>
        <Route path="/dhome" element={<Home />}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/timer' element={<TimerPage/>}/>
      </Routes>
    </Router>
  </Provider>
  );
};

export default App;

/*import React from 'react';
import Dashboard from './Pages/Dashboard';
const App = () => {
  return (
    <Dashboard />
    );
  };
  export default App;*/