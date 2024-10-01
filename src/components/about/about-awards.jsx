import { motion } from "framer-motion";

function AboutAward() {
  return (
    <div className="award-container">
      <div className="width-container">
        <div className="heading">
          <p>
            <em>Awards & Certifications</em> /
          </p>
        </div>
        <motion.div
          className="awards-wrapper"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="about-award">
            <div className="innerAward">
              <img src="images/awards/awwwards-home.png.webp" alt="Awwwards" />
              <p>Awwwards Winner</p>
            </div>
          </div>

          <div className="about-award">
            <div className="innerAward">
              <img
                src="images/awards/best-web-design.png.webp"
                alt="Best Web Design"
              />
              <p>Best Web Design</p>
            </div>
          </div>

          <div className="about-award">
            <div className="innerAward">
              <img src="images/awards/webbys-home.png.webp" alt="Webby Award" />
              <p>Webby Award Winner</p>
            </div>
          </div>

          <div className="about-award">
            <div className="innerAward">
              <img
                src="images/awards/GSA_home.png.webp"
                alt="GSA Contract Holder"
              />
              <p>GSA Contract Holder</p>
            </div>
          </div>

          <div className="about-award">
            <div className="innerAward">
              <img
                src="images/awards/american_advertising_awards.png.webp"
                alt="American Ad Award"
              />
              <p>American Ad Award</p>
            </div>
          </div>

          <div className="award">
            <div className="innerAwardGood">
              <div className="goodFirms">
                <img
                  src="	https://goodfirms.s3.amazonaws.com/badges/white-sticker/top-website-development-companies.svg"
                  alt="GoodFirms Top Agency"
                  className="goodFirms-img"
                />
              </div>
              <p>GoodFirms Top Agency</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutAward;
