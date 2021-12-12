import React from "react";
import "./HeroSection.scss";
import "../App.scss";
import { Button } from "./Button";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btn">
                <Button
                    className="btn"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Get Started
                </Button>
                <Button
                    className="btn"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
