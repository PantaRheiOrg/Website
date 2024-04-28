import React, { useEffect } from 'react';
import '../css/spotlight2.css';

const Spotlight2 = () => { 
    
    useEffect(() => {
        const setNewRandomDuration = () => {
            const randomDuration = Math.random() * 0.5 + 0.5; // Generate a random duration between 0.1 and 2.1 seconds
            const bulbs = document.querySelectorAll('.bulb2');
            const light = document.querySelector('.light2');

            bulbs.forEach(bulb => {
                bulb.style.animationDuration = `${randomDuration}s`;
            });

            light.style.animationDuration = `${randomDuration}s`;
        };

        setNewRandomDuration(); // Set initial random duration

        const handleAnimationIteration = () => {
            setNewRandomDuration(); // Generate new random duration after each animation iteration
        };

        const light = document.querySelector('.light2');
        light.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            light.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
            <div className="lamp2">
                <div className="cover2"></div>
                <div className="in-cover2">
                    <div className="bulb2"></div>
                </div>
                <div className="light2"></div>
            </div>
 
    );
};

export default Spotlight2;
