import React, { useEffect } from 'react';
import '../css/spotlight3.css';

const Spotlight3 = () => {
    
    useEffect(() => {
        const setNewRandomDuration = () => {
            const randomDuration = Math.random() * 0.5 + 0.5; // Generate a random duration between 0.1 and 2.1 seconds
            const bulbs = document.querySelectorAll('.bulb3');
            const light = document.querySelector('.light3');

            bulbs.forEach(bulb => {
                bulb.style.animationDuration = `${randomDuration}s`;
            });

            light.style.animationDuration = `${randomDuration}s`;
        };

        setNewRandomDuration(); // Set initial random duration

        const handleAnimationIteration = () => {
            setNewRandomDuration(); // Generate new random duration after each animation iteration
        };

        const light = document.querySelector('.light3');
        light.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            light.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
            <div className="lamp3">
                <div className="cover3"></div>
                <div className="in-cover3">
                    <div className="bulb3"></div>
                </div>
                <div className="light3"></div>
            </div>
 
    );
};

export default Spotlight3;
