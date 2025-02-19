import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt_50 xs_pt_20">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-sm-8 col-md-6 col-lg-4">
            <div className="footer_content">
              <Link className="footer_logo" href="/">
                <img
                  src="images/logo.png"
                  alt="Fxotary"
                  className="img-fluid w-100"
                />
              </Link>
              <p>
                Xpira is a dynamic digital agency specializing in innovative
                solutions that drive business growth
              </p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-3 col-md-6 col-lg-2">
            <ul className="footer_menu">
              <li>
                <Link
                  href="/"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="portfolio"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="services"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="blog_grid"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Address</h3>
              <p>33 Road Broklyn Street, 600 New York, USA</p>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Contact</h3>
              <p>
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                <a href="callto:+926668880000">+92 (666) 888 0000</a>
              </p>
              <p>
                <a href="mailto:needhelp@company.com">youmail@company.com</a>
                <a href="callto:+926668880000">+80 (222) 888 11110</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer_copyright">
              <p>Copyright © 202 Codeefly. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
