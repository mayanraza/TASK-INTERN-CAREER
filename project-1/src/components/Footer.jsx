import React from 'react';

const Footer = () => {
    return (
        <footer className="footer section text-center bg-light bg-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="social-media">
                            <li>
                                <a href="" className="social-link" style={{ fontSize: '16px' }}>
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" className="social-link" style={{ fontSize: '16px' }}>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" className="social-link" style={{ fontSize: '16px' }}>
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" className="social-link" style={{ fontSize: '16px', }}>
                                    <i className="bi bi-pinterest"></i>
                                </a>
                            </li>
                        </ul>
                        <ul class="footer-menu text-uppercase">
                            <li>
                                <a href="contact.html">CONTACT</a>
                            </li>
                            <li>
                                <a href="shop.html">SHOP</a>
                            </li>
                            <li>
                                <a href="pricing.html">Pricing</a>
                            </li>
                            <li>
                                <a href="contact.html">PRIVACY POLICY</a>
                            </li>
                        </ul>
                        <p class="copyright-text">Copyright &copy;2024, Designed &amp; Developed by <b style={{color:"orange"}}> M Ayan Raza</b></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
