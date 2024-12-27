import 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Header() {


    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/language.png" alt=""/>
                                        <div>English</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Spanis</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <NavLink to="/login"><i className="fa fa-user"></i>Login</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <h2>SHOPPER</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li ><NavLink to="/">Home</NavLink></li>
                                <li ><NavLink to="/shopping-grid">Shopping</NavLink></li>
                                <li ><NavLink to="/shopping-cart">Cart</NavLink></li>
                                <li ><NavLink to="/about">About</NavLink></li>
                                <li ><NavLink to="/dashboard">DB</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">Total: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    );
}

export default Header;