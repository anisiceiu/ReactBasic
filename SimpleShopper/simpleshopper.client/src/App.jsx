import 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ShoppingCart from './pages/ShoppingCart';
import ShopGrid from './pages/ShopGrid';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./router/PrivateRoute";


function App() {
    

    return (
        <>
            <BrowserRouter>
                <AuthProvider>
            <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shopping-grid" element={<ShopGrid />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>

    );
    
    
}

export default App;