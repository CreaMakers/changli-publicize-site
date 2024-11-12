import React from "react";
import "./index.css";

const LogoCircle = ({ logo, avatars }) => {
    return (
        <div className="circle-container">
            <div className="center-logo" style={{ backgroundImage: `url(${logo})` }}></div>

            {avatars.map((logo, index) => (
                <div
                    key={index}
                    className="logo-item"
                    style={{
                        backgroundImage: `url(${logo})`,
                        transform: `rotate(${index * (360 / avatars.length)}deg) translate(150px) rotate(-${index * (360 / avatars.length)}deg)`,
                    }}
                />
            ))}
        </div>
    );
};

export default LogoCircle;
