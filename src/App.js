import './App.css';
import { Provider } from 'react-redux';
import store from './Content/store';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Container/Home/Home';
import { CurrencyProvider } from './Container/Currency/CurrencyContext';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectIsProfileComplete } from './Content/reducers';
import { LoginSignup } from './Container/Login/LoginSignup';
import { LandingPage } from './Container/LandingPage/LandingPage';
import { UserProfile } from './Container/UserProfile/UserProfile';

function App() {
  return (
    <Provider store={store}>
      <CurrencyProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CurrencyProvider>
    </Provider>
  );
}

function AppRoutes() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isProfileComplete = useSelector(selectIsProfileComplete);

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={!isAuthenticated ? <LoginSignup /> : (isProfileComplete ? <Navigate to={'/home'} /> : <Navigate to={'/profile'} />)} />
      <Route path='/home' element={isAuthenticated ? <Home /> : <Navigate to={'/login'} />} />
      <Route path='/profile' element={isAuthenticated ? <UserProfile /> : <Navigate to={'/login'} />} />
    </Routes>
  );
}

export default App;
