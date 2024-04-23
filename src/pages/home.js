import React from 'react';
import Footer from '../components/footer';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import Section5 from '../components/section5';
import Reviews from '../components/reviews';

function Home() {
  return (
    <>
      <div>
        <Section1 />
        <Section3 />
        <Section2 />
        <Section5 />
        <Section4 />
         {/*<Reviews/> */} 
      </div>
      <Footer />
    </>
  );
}

export default Home;
