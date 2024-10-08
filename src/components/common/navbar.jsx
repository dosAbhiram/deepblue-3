/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { interpolate } from "flubber";
import "../../assets/styles/common/navbar.css";

function Navbar() {
  const openTop = "M50,150 L450,150";
  const openMiddle = "M50,250 L450,250";
  const openBottom = "M50,350 L450,350";

  const close =
    "M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z";

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pathTop, setPathTop] = useState(openTop);
  const [pathMiddle, setPathMiddle] = useState(openMiddle);
  const [pathBottom, setPathBottom] = useState(openBottom);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const interpolatorTop = interpolate(
      dropdownOpen ? openTop : close,
      dropdownOpen ? close : openTop
    );
    const interpolatorMiddle = interpolate(
      dropdownOpen ? openMiddle : close,
      dropdownOpen ? close : openMiddle
    );
    const interpolatorBottom = interpolate(
      dropdownOpen ? openBottom : close,
      dropdownOpen ? close : openBottom
    );

    let animationFrame;
    let start = null;

    const animatePath = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 300, 1);
      setPathTop(interpolatorTop(progress));
      setPathMiddle(interpolatorMiddle(progress));
      setPathBottom(interpolatorBottom(progress));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animatePath);
      }
    };

    animationFrame = requestAnimationFrame(animatePath);

    return () => cancelAnimationFrame(animationFrame);
  }, [dropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    document.body.classList.toggle("no-scroll", !dropdownOpen);
  };

  const dropdownVariants = {
    open: { x: 0, transition: { duration: 0.4, ease: "easeIn" } },
    closed: {
      x: "100vw",
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const controlNavbar = () => {
    if (!dropdownOpen) {
      if (window.scrollY > lastScrollY) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      setLastScrollY(window.scrollY);
    }

    if (window.scrollY > 100) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, dropdownOpen]);

  const handleLinkClick = (event, targetId) => {
    setDropdownOpen(false); // Close the dropdown when a link is clicked
    document.body.classList.remove("no-scroll"); // Ensure body scroll is enabled

    // If targetId is provided, scroll to the specific section
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  };

  return (
    <nav
      className={`navbar ${navHidden ? "hidden" : ""} ${
        navbarBackground ? "navbar-background" : "navbar-transparent"
      }`}
    >
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src="icons/logo.webp" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              key={dropdownOpen}
            >
              <motion.path
                d={pathTop}
                fill="white"
                stroke="white"
                strokeWidth={dropdownOpen ? "5" : "50"}
              />
              <motion.path
                d={pathMiddle}
                fill="white"
                stroke="white"
                strokeWidth={dropdownOpen ? "5" : "50"}
              />
              <motion.path
                d={pathBottom}
                fill="white"
                stroke="white"
                strokeWidth={dropdownOpen ? "5" : "50"}
              />
            </motion.svg>
          </button>

          <motion.div
            className="dropdown-content"
            initial="closed"
            animate={dropdownOpen ? "open" : "closed"}
            variants={dropdownVariants}
          >
            <div className="link">
              <Link to="/about" className="links" onClick={handleLinkClick}>
                About
              </Link>
              <Link to="/services" className="links" onClick={handleLinkClick}>
                Services
              </Link>
              <Link to="/work" className="links" onClick={handleLinkClick}>
                Work
              </Link>
              <Link to="/caseStudy" className="links" onClick={handleLinkClick}>
                Case Studies
              </Link>
              <Link
                to="/testimonials"
                className="links"
                onClick={handleLinkClick}
              >
                Testimonials
              </Link>
              <Link to="/blog" className="links" onClick={handleLinkClick}>
                Blog
              </Link>
              <Link
                to="#"
                className="links"
                onClick={(e) => handleLinkClick(e, "footer")}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="links"
                onClick={handleLinkClick}
              >
                Schedule a Consultation
              </Link>
            </div>

            <div className="navbar-social-icons">
              <a href="#">
                <img src="icons/social-icons/facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="icons/social-icons/twitter.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="icons/social-icons/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
            <p>© 2024 DEEPBLUE LLC. All Rights Reserved.</p>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
