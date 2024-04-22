import React from 'react';
import Footer from '../components/footer';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';

function Home() {
  return (
    <>
      <div>
        <Section1 />
        <Section3 />
        <Section2 />
      </div>
      <Footer />
    </>
  );
}

export default Home;
