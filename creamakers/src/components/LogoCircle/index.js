import React, { useEffect, useState } from "react";
import "./index.css";

const LogoCircle = ({ logo, avatars }) => {
    const [animationDelay, setAnimationDelay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setAnimationDelay(false), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="circle-container">
            <div className="center-logo" style={{ backgroundImage: `url(${logo})` }}></div>

            {avatars.map((logo, index) => (
                <div
                    key={index}
                    className={`logo-item ${animationDelay ? 'initial-position' : 'final-position'}`}
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
