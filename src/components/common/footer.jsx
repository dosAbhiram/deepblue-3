import "../../assets/styles/footer.css";

function FormSection() {
  return (
    <div className="form-container">
      <h1>We would love to hear about your project. Let&apos;s talk.</h1>
      <form>
        <input type="text" placeholder="First and last name*" />
        <input type="email" placeholder="Email*" />
        <input type="text" placeholder="Company name*" />
        <input type="text" placeholder="Phone*" />
        <input type="text" placeholder="Please describe your project*" />
        <input type="submit" />
      </form>
    </div>
  );
}

function Map() {
  return (
    <div className="map-container">
      <a
        href="https://www.google.com/maps?cid=8323910318169749144&authuser=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="images/maps/MAP1.jpg.webp" />
      </a>
      <a
        href="https://www.google.com/maps?cid=5733914885028411947"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="images/maps/map2.jpg.webp" />
      </a>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h4>
            <em>Contact</em>
          </h4>
          <div className="footer-contact">
            <h5>Atlanta</h5>
            <p>
              1201 W Peachtree St NW
              <br />
              Suite 2300
              <br />
              Atlanta, GA 30309
              <br />
              <a href="tel:+14048601555">(404) 860-1555</a>
            </p>
            <h5>San Francisco</h5>
            <p>
              388 Market St
              <br />
              Suite 1300
              <br />
              San Francisco, CA 94111
              <br />
              <a href="tel:+14152286861">(415) 228-6861</a>
            </p>
          </div>
        </div>
        <div className="footer-section info">
          <h4>
            <em>Info</em>
          </h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Accessibility Statement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>
            <em>Social</em>
          </h4>
          <div className="social-icons">
            <a href="#">
              <img src="icons/social-icons/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="icons/social-icons/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="icons/social-icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="icons/social-icons/yelp.png" alt="Yelp" />
            </a>
            <a href="#">
              <img src="icons/social-icons/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img
                src="icons/social-icons/pinterest-logo.png"
                alt="Pinterest"
              />
            </a>
          </div>
        </div>
        <div className="footer-section logo">
          <img src="icons/logo.webp" alt="DEEPBLUE Logo" />
        </div>
      </div>
    </footer>
  );
}
function Footer() {
  return (
    <>
      <FormSection />
      <Map />
      <FooterSection />
    </>
  );
}
export default Footer;
