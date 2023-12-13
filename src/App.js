import React from 'react';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Login from './React Project/Login';
import Navigate from './React Project/Navigate';
import SignUpForm from './React Project/Stock';
function App() {
  return (
    <div className="App">
    <h1>STOCK  MANAGEMENT  SYSTEM </h1>
    {/* <Login/> */}
      <BrowserRouter>
    <Navigate></Navigate>
        <Routes>
          <Route path='/login' element=<Login/> ></Route>
          <Route path='/signup' element=<SignUpForm/> ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;