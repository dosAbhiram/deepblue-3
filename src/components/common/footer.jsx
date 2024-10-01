import "../../assets/styles/common/footer.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDescription: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.phone ||
      !formData.projectDescription
    ) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    setErrorMessage("");

    setLoading(true);

    emailjs
      .send(
        "service_g5vxp18",
        "template_a4zj6wh",
        formData,
        "3yukRhy_g6o2u07IH"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setFormSubmitted(true);
        setLoading(false);

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectDescription: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send the email:", error);
        setErrorMessage("Failed to send your message. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div className="form-container">
      <h1>We would love to hear about your project. Let&apos;s talk.</h1>
      {formSubmitted && <p>Thank you! Your message has been submitted.</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {loading ? (
        <p>Sending your message...</p>
      ) : (
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="First and last name*"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company name*"
            value={formData.company}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="projectDescription"
            placeholder="Please describe your project*"
            value={formData.projectDescription}
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      )}
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
