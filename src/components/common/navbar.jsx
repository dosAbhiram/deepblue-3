import "../../assets/styles/common/navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    services: false,
    work: false,
  });
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // Function to explicitly close the navbar
  const closeNavbar = () => {
    setNavbarOpen(false); // Close the navbar
    document.getElementById("overlay").classList.remove("visible");
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    document.getElementById("overlay").classList.toggle("visible");
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen({ ...submenuOpen, [menu]: !submenuOpen[menu] });
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setNavbarHidden(true);
    } else {
      setNavbarHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    closeNavbar(); // Close the navbar when a link is clicked

    // Scroll to footer if needed
    if (targetId === "footer") {
      const footer = document.getElementById(targetId);
      if (footer) {
        footer.scrollIntoView({ behavior: "auto" });
      }
    }
  };

  return (
    <>
      {/* Navbar Header */}
      <div
        className={`navbar-header ${navbarHidden ? "navbar-hidden" : ""}`}
        style={{
          backgroundColor:
            location.pathname === "/" ? "transparent" : "#ffffff",
        }}
      >
        <div className="nav-container">
          <div className="nav-row">
            <div className="nav-col-3">
              <div className="nav-logo">
                <Link to="/" onClick={closeNavbar}>
                  <img src="icons/logo.webp" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="nav-col-9">
              <div id="hamburger" className="open" onClick={toggleNavbar}>
                <span className="openbtn open">
                  <span
                    className={`bar bar1 ${navbarOpen ? "open" : ""}`}
                  ></span>
                  <span
                    className={`bar bar2 ${navbarOpen ? "open" : ""}`}
                  ></span>
                  <span
                    className={`bar bar3 ${navbarOpen ? "open" : ""}`}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Side Navbar */}
      <div className={`side-navbar ${navbarOpen ? "side-navbar-open" : ""}`}>
        <span className="closebtn" onClick={toggleNavbar}>
          ×
        </span>
        <div className="site-menu">
          <div className="menu-primary-container">
            <ul className="menu-list">
              <li>
                <Link to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeNavbar}>
                  Services
                </Link>
                <span
                  className="plus-icon"
                  onClick={() => toggleSubmenu("services")}
                >
                  <i
                    className={`fa-solid ${
                      submenuOpen.services ? "fa-minus" : "fa-plus"
                    }`}
                  ></i>
                </span>
                <ul
                  className={`sub-menu ${submenuOpen.services ? "open" : ""}`}
                >
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Custom Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      AI-Powered Design
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Responsive Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Brand & Identity Strategy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Search Engine Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Website Maintenance & Analytics
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/work" onClick={closeNavbar}>
                  Work
                </Link>
                <span
                  className="plus-icon"
                  onClick={() => toggleSubmenu("work")}
                >
                  <i
                    className={`fa-solid ${
                      submenuOpen.work ? "fa-minus" : "fa-plus"
                    }`}
                  ></i>
                </span>
                <ul className={`sub-menu ${submenuOpen.work ? "open" : ""}`}>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Corporate
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Non-Profit
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      Government
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeNavbar}>
                      eCommerce
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/case-studies" onClick={closeNavbar}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/testimonials" onClick={closeNavbar}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeNavbar}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" onClick={(e) => handleLinkClick(e, "footer")}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/consultation" onClick={closeNavbar}>
                  Schedule a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/deepblueweb/"
            target="_blank"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/DeepBlue_2"
            target="_blank"
            title="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/deepblue/?viewAsMember=true"
            target="_blank"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="copyright">
          © 2024 DEEPBLUE LLC. All Rights Reserved.
        </div>
      </div>

      <div id="overlay"></div>
    </>
  );
}

export default Navbar;
