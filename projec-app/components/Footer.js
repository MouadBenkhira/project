import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark mt-auto">
      <div className="container p-3">
        <div className="row text-center text-white">
          <div className="col-md-12 col-lg-4 pb-2">
            <h4 className="text-center text-decoration-underline">Quick Links</h4>
            <ul className="nobull pt-3">
              <li>
                <a href="policy" className="link text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="terms" className="link text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-4">
            <h4 className="text-center text-decoration-underline pb-3">Social Links</h4>
            <a href="links" className="text-white p-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" className="text-white p-2">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#" className="text-white p-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white p-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white p-2">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white p-2">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
          <div className="col-md-12 col-lg-4 pb-2">
            <h4 className="text-center text-decoration-underline pb-3">Contact Us</h4>
            <p className="lead">TEST@TEST.com</p>
          </div>
        </div>
        <div className="col text-white text-center position-relative">
          <p className="lead font-weight-bold">Copyright &copy; 2023 |IMEDIA</p>
          <a href="#" className="position-absolute bottom-0 end-0">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
