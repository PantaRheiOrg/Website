import React from 'react';
import '../css/footer.css';
import texts from '../text/texts.json';

function Footer({language}) {
  return (
    <footer className="footer mt-auto py-3 custom-color">
      <div className="container text-center">
        <span className="ftext">&copy; 2024 {texts.footerText[language]}</span>
      </div>
    </footer>
  );
}

export default Footer;