import React, { useEffect } from 'react';
import '../css/spotlight5.css';

const Spotlight5 = () => {
    
    useEffect(() => {
        const setNewRandomDuration = () => {
            const randomDuration = Math.random() * 0.5 + 0.5; // Generate a random duration between 0.1 and 2.1 seconds
            const bulbs = document.querySelectorAll('.bulb5');
            const light = document.querySelector('.light5');

            bulbs.forEach(bulb => {
                bulb.style.animationDuration = `${randomDuration}s`;
            });

            light.style.animationDuration = `${randomDuration}s`;
        };

        setNewRandomDuration(); // Set initial random duration

        const handleAnimationIteration = () => {
            setNewRandomDuration(); // Generate new random duration after each animation iteration
        };

        const light = document.querySelector('.light5');
        light.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            light.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
            <div className="lamp5">
                <div className="cover5"></div>
                <div className="in-cover5">
                    <div className="bulb5"></div>
                </div>
                <div className="light5"></div>
            </div>
 
    );
};

export default Spotlight5;
