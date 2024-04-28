import React, { useEffect } from 'react';
import '../css/spotlight.css';

const Spotlight = () => {
    
    useEffect(() => {
        const setNewRandomDuration = () => {
            const randomDuration = Math.random() * 0.5 + 0.5; // Generate a random duration between 0.1 and 2.1 seconds
            const bulbs = document.querySelectorAll('.bulb');
            const light = document.querySelector('.light');

            bulbs.forEach(bulb => {
                bulb.style.animationDuration = `${randomDuration}s`;
            });

            light.style.animationDuration = `${randomDuration}s`;
        };

        setNewRandomDuration(); // Set initial random duration

        const handleAnimationIteration = () => {
            setNewRandomDuration(); // Generate new random duration after each animation iteration
        };

        const light = document.querySelector('.light');
        light.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            light.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
            <div className="lamp">
                <div className="cover"></div>
                <div className="in-cover">
                    <div className="bulb"></div>
                </div>
                <div className="light"></div>
            </div>
 
    );
};

export default Spotlight;
