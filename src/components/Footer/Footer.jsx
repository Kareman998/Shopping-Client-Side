import React from 'react';
// import{ Link } from "react-router-dom";
import './footer.css';
// import foot from '../../assets/footer/icons.jpg'


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section id="footer1">
          <div className="FOOTERROW">
            <div className='photo'>
              {/* <img src={foot} alt="" /> */}
            </div>
            <div className="col-md-4">
              <h3>"NEW TO Shopping?</h3>
              <p>
                "Subscribe to our newsletter to get updates on our latest
                offers!"
              </p>
              <form action="">
                <input
                  type="email"
                  placeholder="Enter E-mail address"
                />
                <button className="btnn">"MALE"</button>
                <button>"FEMAL" </button>
              </form>
            </div>
            <div>
              <div>
                <div className="image">
                  {/* <img src={star} alt="" /> */}
                </div>
                <div>
                  <h3>
                    " DOWNLOAD Shopping FREE APP"
                    <p>"Get access to exclusive offers!"</p>
                  </h3>
                </div>
              </div>
              <div className="btn12">
                <button type="button" class="btn btn-outline-light mr-2">
                  <i className="fab fa-app-store"></i> App Store
                </button>
                <button type="button" className="btn btn-outline-light">
                  <i className="fab fa-google-play"> </i> Google Play
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="footer2"></section>
      </div>

    </footer>
  );
};

export default Footer;
