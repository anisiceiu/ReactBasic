import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";

function SecureHeader() {
    const auth = useAuth();
  return (
      <>
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
                                  <div className="header__top__right__authx">
                                      <a onClick={() => auth.logOut()}><i className="fa fa-user"></i> Logout</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
          <hr />
      </>
  );
}

export default SecureHeader;