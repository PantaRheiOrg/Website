import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-3">PNTA</h5>
            <p className="text">PNTA MAYBE COMPANY OR SMTG company description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna vel libero maximus.</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text">Home</a></li>
              <li><a href="#" className="text">About Us</a></li>
              <li><a href="#" className="text">Services</a></li>
              <li><a href="#" className="text">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="text">Email: info@pnta.com</p>
            <p className="text">Phone: +123-456-7890</p>
            <p className="text">Address: 123 Main St, City, Country</p>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="row">
          <div className="col-md-6 text-muted">© 2024 PNTA. All rights reserved.</div>
          <div className="col-md-6 text-right">
            <a href="#" className="text me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text me-3"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
