import React from "react";
import { Button } from "./Button";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation
                    deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            className="footer-input"
                            placeholder="Your Email"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL &copy; 2021</small>
                    <div className="social-icons">
                        <Link
                            to="/"
                            target="_blank"
                            className="social-icon-link facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="social-icon-link instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="social-icon-link youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="social-icon-link twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="social-icon-link linkedin"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
