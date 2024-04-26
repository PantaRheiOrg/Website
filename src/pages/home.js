import React, { useState } from 'react';
import Footer from '../components/footer';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import Section5 from '../components/section5';
import EmailForm from '../components/emailForm';

function Home() {
  const [language, setLanguage] = useState('da'); 

  const handleLanguageChange = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  return (
    <>
      <div>
        <Section1 language={language} handleLanguageChange={handleLanguageChange} /> 
        <Section3 language={language}/>
        <Section2 language={language}/>
        <Section5 language={language}/>
        <Section4 language={language}/>
        <EmailForm language={language}/> 
      </div>
      <Footer language={language}/> 
    </>
  );
}

export default Home;
