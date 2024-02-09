
import LoginForm from './components/Auth/LoginForm/LoginForm'
import Main from './components/index'
import { useAuth } from './components/Auth/AuthContext';
import SignUpForm from './components/Auth/SignUpForm';
function App() {
   const { isLoggedIn,pref,setPref } = useAuth();

 
  return (
      <>
    {pref === false ? (
      <SignUpForm />
    ) : (
      <>
        {!isLoggedIn && <LoginForm />}
        {isLoggedIn && <Main />}
      </>
    )}
  </>
  )
}

export default App
