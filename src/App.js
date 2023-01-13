import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import ProductScreen from './screens/ProductScreen';
import AuthScreen from './screens/AuthScreen';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {
  const admin = useSelector(state => state.admin)
  const userId = useSelector(state => state.userId)


  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={!admin ? <HomeScreen /> : <Navigate to='/admin' />} />
      <Route path="/auth" element={!userId ? <AuthScreen /> : <Navigate to='/' />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/admin" element={admin ? <AdminScreen /> : <Navigate to='/' />} />
     </Routes>
    </div>
  );
}

export default App;
