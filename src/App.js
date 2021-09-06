import './App.css';
import { useState } from 'react';
import RestrictedPage from './Components/RestrictedPage'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = 'Nadia'

  const Login = ()=> {
    setIsLoggedIn(true)
  }

  const Logout = ()=> {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
    <RestrictedPage 
    isLoggedIn={isLoggedIn}
    user={user}
    Login={Login}
    Logout={Logout} />
    </div>
  );
}

export default App;
