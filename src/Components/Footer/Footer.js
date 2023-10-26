import React from "react";
import { useSelector } from "react-redux";
import Container from "../UI/Container";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  const contactData = useSelector((state) => state.contactSlice);
  const colorsData = useSelector((state) => state.colorsSlice);
  const homeData = useSelector((state) => state.homeSlice);
  const footerStyle = {
    borderTop: `1px solid ${colorsData.data.mainColor}`,
  };
  const socialMediaStyle = {
    color: "#EAD665",
  };
  console.log(contactData);
  return (
    <Container
      style={footerStyle}
      className={`w-full mt-10 py-4 flex flex-col md:flex-row md:justify-between`}
    >
      <div className={`flex items-center md:w-1/2 flex-row`}>
        <ul
          className={`flex items-start justify-between md:justify-center flex-wrap flex-col w-full md:w-auto`}
        >
          <li className={`py-1 md:py-2 text-lg md:text-2xl underline`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`py-1 md:py-2  text-lg md:text-2xl underline`}>
            <Link to="/services">Services</Link>
          </li>
          <li className={`py-1 md:py-2  text-lg md:text-2xl underline`}>
            <Link to="/cars">Cars</Link>
          </li>
          <li className={`py-1 md:py-2 text-lg md:text-2xl underline`}>
            <Link to="/rates">Rates</Link>
          </li>
          <li className={`py-1 md:py-2 text-lg md:text-2xl underline`}>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div
          className={`flex items-center justify-center flex-col-reverse mt-4 md:mt-0 flex-1`}
        >
          <ul
            style={socialMediaStyle}
            className={`md:flex items-center justify-between text-5xl my-2  hidden`}
          >
            <li className={`mx-2`}>
              <a
                href={contactData.data.content.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className={`text-5xl`} />
              </a>
            </li>{" "}
            <li className={`mx-2`}>
              <a
                href={contactData.data.content.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin className={`text-5xl`} />
              </a>
            </li>
            <li className={`mx-2`}>
              <a
                href={`https://api.whatsapp.com/send?phone=971${contactData.data.content.whatsApp}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className={`text-5xl`} />
              </a>
            </li>
          </ul>
          <div className={`flex items-center justify-center flex-col mt-2`}>
            <div>
              <p className={`my-1`}>{contactData.data.content.email}</p>
            </div>
            <div className={` flex flex-col mt-2 my-1`}>
              <div className={`flex items-center flex-col my-1`}>
                <h5>{contactData.data.content.titleOne}</h5>
                <span>{contactData.data.content.emailOne}</span>
                <span style={{ whiteSpace: 'nowrap', fontFeatureSettings: '"tnum"' }}>
                  +971 {contactData.data.content.mobileOne.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}
                </span>
              </div>
              <div className={`flex items-center flex-col my-1`}>
                <h5>{contactData.data.content.titleTwo}</h5>
                <span>{contactData.data.content.emailTwo}</span>
                <span style={{ whiteSpace: 'nowrap', fontFeatureSettings: '"tnum"' }}>
                  +971 {contactData.data.content.mobileTwo.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={`mt-5 md:hidden`}>
        <ul
          style={socialMediaStyle}
          className={`flex items-center justify-evenly text-5xl my-2 mx-20`}
        >
          <li className={`mx-2`}>
            <a
              href={contactData.data.content.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className={`text-5xl`} />
            </a>
          </li>{" "}
          <li className={`mx-2`}>
            <a
              href={contactData.data.content.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className={`text-5xl`} />
            </a>
          </li>
          <li className={`mx-2`}>
            <a
              href={`https://api.whatsapp.com/send?phone=971${contactData.data.content.whatsApp}`}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className={`text-5xl`} />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`flex items-center justify-center md:flex-col mt-10 md:mt-0 md:w-1/2`}
      >
        <img
          src={homeData.data.logoImg}
          alt={homeData.data.brandName}
          className={`w-36 md:w-[30rem]`}
        />
        <div className={``}>
          <h3
            className={`text-center text-lg md:text-5xl mb-4  font-semibold ${secondFont["second-font"]}`}
          >
            {homeData.data.brandName}
          </h3>
          <p
            className={`text-xs md:text-lg font-medium ${thirdFont["third-font"]} text-center`}
          >
            {homeData.data.brandDesc}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
