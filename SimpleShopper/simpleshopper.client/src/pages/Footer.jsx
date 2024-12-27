import 'react';

function Footer() {
    let year =new Date().getFullYear();
    return (
        <footer className="navbar">
            <div className="container-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text"><p>
                                Copyright &copy;{year} All rights reserved &nbsp; 
                               </p></div>
                            <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
}

export default Footer;