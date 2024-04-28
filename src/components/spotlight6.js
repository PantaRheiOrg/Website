import React, { useEffect } from 'react';
import '../css/spotlight6.css';

const Spotlight6 = () => {
    
    useEffect(() => {
        const setNewRandomDuration = () => {
            const randomDuration = Math.random() * 0.5 + 0.5; // Generate a random duration between 0.1 and 2.1 seconds
            const bulbs = document.querySelectorAll('.bulb6');
            const light = document.querySelector('.light6');

            bulbs.forEach(bulb => {
                bulb.style.animationDuration = `${randomDuration}s`;
            });

            light.style.animationDuration = `${randomDuration}s`;
        };

        setNewRandomDuration(); // Set initial random duration

        const handleAnimationIteration = () => {
            setNewRandomDuration(); // Generate new random duration after each animation iteration
        };

        const light = document.querySelector('.light6');
        light.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            light.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
            <div className="lamp6">
                <div className="cover6"></div>
                <div className="in-cover6">
                    <div className="bulb6"></div>
                </div>
                <div className="light6"></div>
            </div>
 
    );
};

export default Spotlight6;
